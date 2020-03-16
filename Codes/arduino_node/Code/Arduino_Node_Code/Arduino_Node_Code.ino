
/*  Arduino Node Code
 * 
 * Developer : Khushboo Qayyum
 * 
 * Organization : COMNETS (Communication Networks Working Group)
 *                Univsität Bremen
 *                
 * Contact : Khushboo@uni-bremen.de
 * 
 * 
 * About the Code: 
 * The arduino multinode/temperature code for the H2OSense Project. 
 * 
 * As a multi node code, searches for sensors connected to the tentacle shields and 
 * upon waking the search is performed every time. Polls each sensor for new readings and sends it to 
 * the sink node
 * 
 * As temperature node, upon waking up and after initialization, polls sensor for new temperature readings and 
 * sends the readings to sink node
 * 
 * NOTE *** To use this code as temperature node please comment out the MACRO TEMPNODE ****
 * 
 * 
 * 
 * This code contains liberaries and codes from whitebox labs to control and use the tentacle sheild
 * 
 */

#include <Wire.h>

/*
 * Headers for temprature sensor
 */
#include <OneWire.h>
#include <DallasTemperature.h>
/*
 * RTC HEADERS
 */
#include "rv8523_clock_alarm.h"
#include <Arduino.h>
#include <avr/interrupt.h>
#include <avr/sleep.h>
#include <avr/power.h>
#include <avr/wdt.h>

#define TEMPNODE                                                        //comment out to use as main node code

#if defined (ARDUINO_SAM_DUE)                                           // On Arduino Due the standard I2C pins are Wire1, not Wire.
#define WIRE Wire1
#else
#define WIRE Wire
#endif

#if defined (ARDUINO_SAM_DUE) || defined (ARDUINO_SAMD_ZERO)
#define I2C_ONLY 1
#endif

#if !defined(I2C_ONLY)
#include <SoftwareSerial.h>                                             //Include the software serial library  

/*
 *  For the 433Mhz radio
 */
#include <RFM69.h>                                                      //get it here: https://www.github.com/lowpowerlab/rfm69
#include <SPI.h>



#define NODEID        7                                                 //unique for each node on same network
#define NETWORKID     50                                                //the same on all nodes that talk to each other
#define GATEWAYID     1                                                 //The receiving node id

//Match frequency to the hardware version of the radio (uncomment one):
#define FREQUENCY     RF69_433MHZ

//#define FREQUENCY   RF69_868MHZ
//#define FREQUENCY   RF69_915MHZ

#define ENCRYPTKEY    "sampleEncryptKey"                                //exactly the same 16 characters/bytes on all nodes!
//#define IS_RFM69HW                                                    //uncomment only for RFM69HW! Leave out if you have RFM69W!

#define LED           9                                                 // LED on D9 - Not necessary

#define SERIAL_BAUD   9600
#define DATA_SIZE     50

int TRANSMITPERIOD = 10;                                                //transmit a packet to gateway so often (in ms)
char payload[DATA_SIZE];                                                // outgoing data buffer
byte sendsize=0;
boolean requestACK = true;

RFM69 radio;

//#define DEBUG                                                         //uncomment only for if you want DEBUGGING messages to display      

SoftwareSerial sSerial(17, 16);                                         // RX, TX  - Name the software serial library sSerial (this cannot be omitted)

// assigned to pins 10 and 11 for maximum compatibility
const int s0 = 15;                                                      //Molenet pin  15 to control pin S0
const int s1 = 14;                                                      //Molenet pin  14 to control pin S0
const int enable_1 = 5;                                                 //Molenet pin 5 to control pin E on shield 1
const int enable_2 = 4;                                                 //Molenet pin 4 to control pin E on shield 2

// for testing ... if this works, then so should the above one. 
/*SoftwareSerial sSerial(11, 10);          // RX, TX  - Name the software serial library sSerial (this cannot be omitted)
// assigned to pins 10 and 11 for maximum compatibility

const int s0 = 7;                        //Arduino pin 7 to control pin S0
const int s1 = 6;                        //Arduino pin 6 to control pin S1
const int enable_1 = 5;                   //Arduino pin 5 to control pin E on shield 1
const int enable_2 = 4;
*/
#endif

/*
 * RTC RELATED 
 */
 
#define INT_PIN 1



RV8523_RTC rtc;                                                         //Create object of RTC class

bool alarmInt = false;
int minutes_alarm = 1;

/*
 * TEMP SENSOR RELATED
 */

#define ONE_WIRE_BUS 6 

OneWire oneWire (ONE_WIRE_BUS);

DallasTemperature sensors(&oneWire);



char sensordata[32];                                                    //A 30 byte character array to hold incoming data from the sensors
byte computer_bytes_received = 0;                                       //We need to know how many characters bytes have been received
byte sensor_bytes_received = 0;                                         //We need to know how many characters bytes have been received
int channel;                                                            //INT pointer for channel switching - 0-7 serial, 8-127 I2C addresses
char *cmd;                                                              //Char pointer used in string parsing
int retries;                                                            // com-check functions store number of retries here
boolean answerReceived;                                                 // com-functions store here if a connection-attempt was successful
byte error;                                                             // error-byte to store result of Wire.transmissionEnd()

String stamp_type;                                                      // hold the name / type of the stamp
char stamp_version[4];                                                  // hold the version of the stamp

char computerdata[20];                                                  //we make a 20 byte character array to hold incoming data from a pc/mac/other.
int computer_in_byte;
boolean computer_msg_complete = false;

byte i2c_response_code = 0;                                             //used to hold the I2C response code.
byte in_char = 0;                                                       //used as a 1 byte buffer to store in bound bytes from an I2C stamp.

float curr_PH = 0;                                                      // variables to store the values of sensors 
float curr_sal = 0;
float curr_temp = 0;
float curr_D_O = 0;
float old_temp = 0;
float old_sal = 0;

#if !defined (I2C_ONLY)
const long validBaudrates[] = {                                         // list of baudrates to try when connecting to a stamp (they're ordered by probability to speed up things a bit)
  38400, 19200, 9600, 115200, 57600
};

long channelBaudrate[] = {                                              // store for the determined baudrates for every stamp
  0, 0, 0, 0,
};

#endif

boolean I2C_mode = false;  
boolean scan_not_done = false;
int stamp_amount = 0;                                                   // number of sensor chips found 

/*
 * Function:
 * 
 * Paramateres
 * 
 * Returns
 * 
 * 
 */

void alarmInterrupt()
{
  alarmInt = true;
}

/*
 * Function:
 * 
 * Paramateres
 * 
 * Returns
 * 
 * 
 */
void resetAlarm()
{
    alarmInt = false;
   
    rtc.resetCtrl();
    rtc.setAlarmTime( ( (rtc.getCurrentMinutes()+minutes_alarm) % 60), 0, 0, 0);
    rtc.clearAllAlarm();
    rtc.setAlarmType(RV8523_RTC::AT_MINUTE);
    rtc.activateAlarm();
    rtc.resetInterrupt();
   
    rtc.batterySwitchOver(true);
    Serial.println("Resetting Alarm");
    
}

/*
 * Function:
 * 
 * Paramateres
 * 
 * Returns
 * 
 * 
 */
void setup() {
  
#if !defined (I2C_ONLY)
  pinMode(s1, OUTPUT);                                                    //Set the digital pin as output.
  pinMode(s0, OUTPUT);                                                    //Set the digital pin as output.
  pinMode(enable_1, OUTPUT);                                              //Set the digital pin as output.
  pinMode(enable_2, OUTPUT);                                              //Set the digital pin as output.
#endif  

Serial.begin(9600);                                                       // Set the hardware serial port to 9600
  while (!Serial) ;                                                       // Leonardo-type arduinos need this to be able to write to the serial port in setup()
#if !defined (I2C_ONLY)
  sSerial.begin(38400);                                                   // Set the soft serial port to 38400
#endif
  WIRE.begin();                                                           // enable I2C port.
/*
 * 
 * Setup for the RFM69
 * 
 */

  pinMode(2,INPUT);
  radio.initialize(FREQUENCY,NODEID,NETWORKID);
#ifdef IS_RFM69HW
    radio.setHighPower();                                                 //uncomment only for RFM69HW!
#endif
  radio.setPowerLevel(31);
  radio.encrypt(ENCRYPTKEY);
  scan_not_done = false;
  stamp_amount = 0;
  /*
   * RTC SETUP
   */

  rtc.setTimeMode(RV8523_RTC::TM_24HOUR);
  rtc.setClockTime(50,00,14, 13,8,16);
  rtc.startRTC();
  rtc.batterySwitchOver(1);

  rtc.resetCtrl();
  rtc.setAlarmTime(1,0,0,0);
  rtc.clearAllAlarm();  
  rtc.setAlarmType(RV8523_RTC::AT_MINUTE);
  rtc.activateAlarm();
  rtc.resetInterrupt();
  attachInterrupt(INT_PIN, alarmInterrupt, FALLING); 

  /*
   * Temprature sensor settings 
   */

  sensors.begin();

}

/*
 * Function:
 * 
 * Paramateres
 * 
 * Returns
 * 
 * 
 */
void enterSleep(void)
{
  
    //set_sleep_mode(SLEEP_MODE_PWR_SAVE);                                  // Some power Saving 
    set_sleep_mode(SLEEP_MODE_PWR_DOWN);                                    // Even more Power Savings
    sleep_enable();                                                         // Now enter sleep mode.            
    
    sleep_mode();
    sleep_bod_disable();                                                    // Additionally disable the Brown out detector
    /* The program will continue from here after the WDT timeout*/
    sleep_disable();                                                        // First thing to do is disable sleep. 
    
    power_all_enable();                                                     // Re-enable the peripherals. 
}

long lastPeriod = 0;

/*
 * Function: loop
 * 
 * Paramateres: none
 * 
 * Returns: none
 * 
 * Main loop of the arduino code
 */
 
void loop() {
     
    //char buff[10];
    int loop;
    
#ifndef TEMPNODE 
#ifdef DEBUG
    Serial.print ("*In main ftn* \n");  
#endif// Look out for connected devices:
    

#ifdef DEBUG        
    Serial.print("stamp_amount = ");
    Serial.println(stamp_amount);
    Serial.print("\n");
#endif

    search_for_probes();                                                  // look for connected probes

    
    cmd = "0";                                         
    
    
    get_reading_probes()                                                  //get current readings from probes
#endif

#ifdef TEMPNODE
  Serial.print("Temprature Node working \n");
#endif

    
    for (loop = 0; loop < 3; loop ++){
      
        sensors.requestTemperatures();                                  // send request for  temperature
        
        Serial.print("Temprature is:");
        Serial.print(sensors.getTempCByIndex(0));
        Serial.print("\n");
        curr_temp = sensors.getTempCByIndex(0);                         // update variables for new readings
        if (curr_temp != -127)                                          // if readings are faulty -- get out
            break;
    }
    
    send_Sensor_Data();                                                 // send all data to the collector
   
    resetAlarm();                                                       // reset interrupt ofr next wakeup
    delay (500);                                                        // delay to let the external modules finish 
    
    enterSleep();                                                       // put device to sleep
    Serial.print(" Out of sleep mode");     
}

/*
 * Function: search_for_probes
 * 
 * Paramateres none
 * 
 * Returns : none
 * 
 *  The funciton searches for all the connected probes to the molenet mote 
 *  and displays details of the sensor chip when found 
 */
bool search_for_probes()
{
    if (scan_not_done == false)
    {
        Serial.print ("---- Initiating scan ----- \n");  
        Serial.print ("--- Looking for devices ---\n");
        scan_not_done = true;
        for (channel = 0; channel < 4; channel++) {

            if (change_channel()) {
              stamp_amount++;

              serialPrintDivider();
              Serial.print(    F("-- SERIAL CHANNEL "));
              Serial.println(  channel);
              Serial.println(  F("--"));
              Serial.print(    F("-- Type: "));
              Serial.println(  stamp_type);
              Serial.print(    F("-- Baudrate: "));
              Serial.println(  channelBaudrate[channel]);
              //get device status and put to sleep
              run_cmd("status");
              run_cmd("sleep");
            }
        }    
    }
}

/*
 * Function: get_reading_probes
 * 
 * Paramateres none
 * 
 * Returns none
 * 
 *  Reads the data from the probes and process it
 * 
 */
bool get_reading_probes()
{
    char buff[10];
    int loop;
    for (int x = 0; x < stamp_amount; x++) {    
        if (String(cmd) == String(x)) {
            Serial.print(F("changing channel to "));
            Serial.println( cmd);
            channel = atoi(cmd);                                          //set channel variable to number 0-127
            
            if (change_channel()) {                                       //set MUX switches or I2C address
                
                Serial.println(  F("-------------------------------------"));
                Serial.print(    F("ACTIVE channel : "));
                Serial.println(  channel );
                Serial.print(    F("Type: "));
                Serial.print(    stamp_type);
                Serial.print(    F(", Version: "));
                Serial.print(    stamp_version);
                Serial.print(    F(", COM: "));
              
#if !defined (I2C_ONLY)
                if (channel > 8) {
                    Serial.println(F("I2C"));
                }
                else {
                    Serial.print(  F("UART ("));
                    Serial.print(  String(channelBaudrate[channel]));
                    Serial.println(F(" baud)"));
                }
#else
                Serial.println(F("I2C"));
#endif
          }
          else {
              Serial.println(F("CHANNEL NOT AVAILABLE! Empty slot? Different COM-mode?"));
              Serial.println(F("Try 'scan' or set baudrate manually (see 'help')."));
          }
          computer_msg_complete = false;                                //Reset the var computer_bytes_received to equal 0
          
        }
        // get temperature 
        for (loop = 0; loop < 3; loop ++){
            
            sensors.requestTemperatures();
            Serial.print("Temprature is:");
            Serial.print(sensors.getTempCByIndex(0));
            Serial.print("\n"); 
            curr_temp = sensors.getTempCByIndex(0); 
             
            if (curr_temp != -127)
                break;         
        }
         
        run_cmd("t,?");                                                 // find the current temp value in probe registers 
        
        if (curr_temp != old_temp){                                     // if old temperature of the probe =! new than update 
            
            memset(payload,0x00,sizeof(payload));
            strcat(payload,"t,");
        
            dtostrf(curr_temp, 5, 2, buff);           
            Serial.print(buff);
            strncat(payload,buff,5);
            Serial.print("****");
            Serial.print(payload);
            Serial.print("***\n");
            run_cmd(payload);
            old_temp = curr_temp;
        }
        
        if((strcmp(stamp_type.c_str(),"EZO D.O") == 0) || (strcmp(stamp_type.c_str(),"EZO DO") == 0)){      // if dissolved oxygen probe, also update salinity values
            
            if (curr_sal != old_sal){
                
                memset(payload,0x00,sizeof(payload));
                strcat(payload,"s,");

                dtostrf(curr_sal, 5, 2, buff);
                Serial.print(buff);
                strncat(payload,buff,5);
                strncat(payload,",ppt",4);
                Serial.print("****");
                Serial.print(payload);
                Serial.print("***\n");
                run_cmd(payload);
                old_sal = curr_sal;
                  
             }
        }
             
                
        
        run_cmd("r");                                                       //wake the probe up and get  the reading
          
        
        run_cmd("sleep");                                                   //put the probe  back to sleep -- save some power

                                    
        if (stamp_amount > 1)                                               // move to next probe chip
        {   
            switch (x)
            {
                case 0x00:
                    cmd = "1";
                    break;
                case 0x01:
                    cmd = "2";
                    break;
                case 0x02:
                    cmd = "3";
                    break;
                case 0x03:
                    cmd = "4";
                    break;
            
            }
            delay (5000);
        }
    }
}

/*
 * Function:send_Sensor_Data
 * 
 * Paramateres none
 * 
 * Returns none
 * 
 * Sends all the data from the sensord to the sink node
 * 
 * 
 */
bool send_Sensor_Data()
{
    
    char buff [10];
    char *pointer,*p;
    memset(payload,0x00,sizeof(payload));                             // reset buffers
    
    char temp[3];
    itoa(NODEID,temp,10);                                               // parse data and add to buffer
    Serial.print(NODEID);
    Serial.print (temp);
    Serial.print ("this the values");
    strncat(payload,temp,2);
    strcat(payload,"/");
    dtostrf(curr_PH, 5, 2, buff);
    strncat(payload,buff,5);
    strcat(payload,"/");
    dtostrf(curr_D_O, 5, 2, buff);
    strncat(payload,buff,5);
    strcat(payload,"/");
    dtostrf(curr_sal, 5, 2, buff);
    strncat(payload,buff,5);
    strcat(payload,"/");
    dtostrf(curr_temp, 5, 2, buff);
    strncat(payload,buff,5);
    strcat(payload,"/");
    dtostrf(minutes_alarm, 5, 2, buff);
    strncat(payload,buff,5);
    
    
    //strncpy(payload,sensordata,sensor_bytes_received);
    sendsize = strlen(payload);                           
    Serial.print(payload);
    Serial.print("\n");
     
     int currPeriod = millis()/TRANSMITPERIOD;
     if ((currPeriod != lastPeriod) || (sendsize>(DATA_SIZE-2)))
     {
        lastPeriod=currPeriod;

        if(sendsize>0)
        {
           Serial.print("Before transmit");
           if (radio.sendWithRetry(GATEWAYID, payload, sendsize) == true)           // send payload
           {
                Serial.print((char*)radio.DATA);                                     //  check reply

               
                p = strtok_r((char *)radio.DATA,":",&pointer);
                Serial.print("****");
                if (strcmp(p, "Sendperiod") == false){                              // if new time period sedn for node, update time periods
                  p = strtok_r(NULL,":",&pointer);
                  
                  int period = atoi(p);
                  if ((period > 0) && (period != minutes_alarm))
                  {
                    Serial.print("Setting new alarm time! \n");
                    Serial.print(period);
                    minutes_alarm = period;
                  }
                }

              Serial.print("Sent Succesfully! \n");                               //ask means delivery success
            }
            else
            {
              Serial.print("No Ack \n");
            }
            radio.receiveDone();
           radio.sleep();                                                       // put radio to sleep after all work is done. to save energy.
           sendsize = 0;
        }
    }
}

/*
 * Function: run_cmd
 * 
 * Paramateres char *cmd      the command to send
 * 
 * Returns bool               
 * 
 * The functions sends the comand to probes and process the reply of the probe 
 * when the function completes its run return true
 * 
 */
bool run_cmd(char * cmd)
{
    memset(sensordata, 0, sizeof(sensordata));                                  // clear stamp info

#ifdef DEBUG
    Serial.print ("*In update_data_variables ftn* \n");  
#endif

    bool data_available = false;
    Serial.print(cmd);
    sSerial.print(cmd);                                                       //Send the command from the computer to the Atlas Scientific device using the softserial port
    sSerial.print("\r");                                                      //After we send the command we send a carriage return <CR>
 
    do{
        int countdown = 0;
        data_available = false;

        while ((sSerial.available() == 0) ) {}                              //If data has been transmitted from an Atlas Scientific device
        

        if (sSerial.available() > 0)
        {
#ifdef DEBUG
            Serial.print ("Data Available?");
#endif
            data_available = true;    
        }
    }while (data_available == false );
    
    sensor_bytes_received = sSerial.readBytesUntil(13, sensordata, 30);     //we read the data sent from the Atlas Scientific device until we see a <CR>. We also count how many character have been received
    sensordata[sensor_bytes_received] = 0;                                  //we add a 0 to the spot in the array just after the last character we received. This will stop us from transmitting incorrect data 
                                                                            //that may have been left in the buffer
    Serial.print(F("< "));
    Serial.println(sensordata);

    // for reading the response codes 
    if (sSerial.available() > 0)
    {
          char temp [50],temp_bytes;
          temp_bytes = sSerial.readBytesUntil(13, temp, 30);                //we read the data sent from the Atlas Scientific device until we see a <CR>. We also count how many character have been received
          temp[temp_bytes] = 0;                                             //we add a 0 to the spot in the array just after the last character we received.
                                                                            //This will stop us from transmittingincorrect data that may have been left in the buffe

    }
    if (strncmp(sensordata,"*UV",3) == false)                               // if the sensor has detected low voltage -- notify the sink node immediately 
      radio.sendWithRetry(GATEWAYID, sensordata, sensor_bytes_received);
    if (strcmp(cmd,"t,?")== false)                                          //if temperature registers is read for the sensor save the values
    {
      old_temp = atof(&sensordata[3]);
      Serial.print(old_temp);
      Serial.print("\n");
    }
    
    if (strcmp(cmd, "r") == false)                                          //if values are read from sensors save the values  in variables                         
      update_data_variables(sensordata);
    return true;
}

/*
 * Function:update_data_variables
 * 
 * Paramateres char *data         data buffer 
 * 
 * Returns none
 * 
 * based on the the id of the sensor, updates the variables 
 * 
 */
bool update_data_variables(char *data)
{
  
#ifdef DEBUG
    Serial.print ("*In update_data_variables ftn* \n");  
#endif
  if (strcmp(stamp_type.c_str(),"EZO pH") == 0)
  { 
    Serial.print(F("Updating ph values \n"));
    curr_PH = atof(data);
    Serial.print(curr_PH);
    Serial.print("\n");
  }
  else if ((strcmp(stamp_type.c_str(),"EZO D.O") == 0) || (strcmp(stamp_type.c_str(),"EZO DO") == 0))
  {
    
    Serial.print(F("Updating DO values \n"));
    curr_D_O = atof(data);
    Serial.print(curr_D_O);
    Serial.print("\n");
  }
  else if (strcmp(stamp_type.c_str(),"EZO EC") == 0)
  {
    Serial.print(F("Updating Salinity values \n"));
    curr_sal = atof (data);
    Serial.print(curr_sal);
    Serial.print("\n");
   }
   else 
   {
    Serial.print(F("Updating DO values \n"));
   }
 }
 
/*
 * Function: check_serial_connection  
 * 
 * Paramateres none
 * 
 * Returns: bool
 * 
 * will return true if there is a stamp on this serial channel, false otherwise
 */
boolean check_serial_connection() {                // check the selected serial port. find and set baudrate, request info from the stamp
  
  // 
  answerReceived = true;                           // will hold if we received any answer. also true, if no "correct" baudrate has been found, but still something answered.
  retries = 0;
#ifdef DEBUG
    Serial.print ("*In check_serial_connection ftn* \n");  
#endif
  if (channelBaudrate[channel] > 0) {

    sSerial.begin(channelBaudrate[channel]);
    
    while (retries < 3 && answerReceived == true) {
      answerReceived = false;
      if (request_serial_info()) {
        return true;
      }
    }
  }

  answerReceived = true;                             // will hold if we received any answer. also true, if no "correct" baudrate has been found, but still something answered.

  while (retries < 3 && answerReceived == true) {    // we don't seem to know the correct baudrate yet. try it 3 times (in case it doesn't work right away)
    
    answerReceived = false;                          // we'll toggle this to know if we received an answer, even if no baudrate matched. probably a com-error, so we'll just retry.
    if (scan_baudrates()) {
      return true;
    }
    retries++;
  }

  return false;   // no stamp was found at this channel
}



/*
 * Function:change_channel
 * 
 * Paramateres none
 * 
 * Returns bool
 * 
 * //function controls which UART/I2C port is opened. returns true if channel could be changed.

 */

boolean change_channel() {                                 
  I2C_mode = false;            //0 for serial, 1 for I2C
  stamp_type = "";
  memset(stamp_version, 0, sizeof(stamp_version));         // clear stamp info
#ifdef DEBUG
    Serial.print ("*In channel change ftn* \n");  
#endif
#if !defined (I2C_ONLY)

  change_serial_mux_channel();                             // configure serial muxer(s) (or disable if we're in I2C mode)

  if (channel < 8) {                                       // serial?
    if (!check_serial_connection()) {                      // determine and set the correct baudrate for this stamp
      return false;
    }

    return true;
  }
  
  

#else

 

#endif
}


 /*
 * Function:change_serial_mux_channel
 * 
 * Paramateres none 
 * 
 * Returns none
 * 
 * 
 *   Change the channel to be communicated with 
 *   Since we are only working with 4 channels at max, this code only caters 
 *   for 4 channels. The Tentacle sheild can work with more. 
 *
 */
void change_serial_mux_channel() {           // configures the serial muxers depending on channel.
#ifdef DEBUG
    Serial.print ("*In change_serial_mux_channel ftn* \n");  
#endif
  switch (channel) {                         //Looking to see what channel to open

    case 0:                                  //If channel==0 then we open channel 0
      digitalWrite(enable_1, LOW);           //Setting enable_1 to low activates primary channels: 0,1,2,3
      digitalWrite(enable_2, HIGH);          //Setting enable_2 to high deactivates secondary channels: 4,5,6,7
      digitalWrite(s0, LOW);                 //S0 and S1 control what channel opens
      digitalWrite(s1, LOW);                 //S0 and S1 control what channel opens
      break;                                 //Exit switch case

    case 1:
      digitalWrite(enable_1, LOW);
      digitalWrite(enable_2, HIGH);
      digitalWrite(s0, HIGH);
      digitalWrite(s1, LOW);
      break;

    case 2:
      digitalWrite(enable_1, LOW);
      digitalWrite(enable_2, HIGH);
      digitalWrite(s0, LOW);
      digitalWrite(s1, HIGH);
      break;

    case 3:
      digitalWrite(enable_1, LOW);
      digitalWrite(enable_2, HIGH);
      digitalWrite(s0, HIGH);
      digitalWrite(s1, HIGH);
      break;

    default:
      digitalWrite(enable_1, HIGH);   //disable soft serial
      digitalWrite(enable_2, HIGH);   //disable soft serial
  }
}


/*
 * Function:scan_baudrates
 * 
 * Paramateres none
 * 
 * Returns bool 
 * 
 * scans baudrates to auto-detect the right one for this uart channel. if one is found, it is saved globally in channelBaudrate[]
 * returns true if a valid baudrate is found, false othervise
 * 
 */
boolean scan_baudrates() {                               
#ifdef DEBUG
    Serial.print ("*In scan_baudrates ftn* \n");  
#endif
  for (int j = 0; j < 5; j++) {
    // TODO: make this work for legacy stuff and EZO in uart / continuous mode
    sSerial.begin(validBaudrates[j]);                  // open soft-serial port with a baudrate
    sSerial.print(F("\r"));
    sSerial.flush();                                   // buffers are full of junk, clean up
    sSerial.print(F("c,0\r"));                            // switch off continuous mode for new ezo-style stamps
    delay(150);
    //clearIncomingBuffer();                             // buffers are full of junk, clean up
    sSerial.print(F("e\r"));                              // switch off continous mode for legacy stamps

    delay(150);                                          // give the stamp some time to burp an answer
    clearIncomingBuffer();

    int r_retries = 0;
    answerReceived = true;
    while (r_retries < 3 && answerReceived == true) {
      answerReceived = false;
      if (request_serial_info()) {                         // check baudrate for correctness by parsing the answer to "i"-command
        channelBaudrate[channel] = validBaudrates[j];      // we found the correct baudrate!
        return true;
      }
      r_retries++;
    }
  }
  return false;                                          // we could not determine a correct baudrate
}



/*
 * Function: request_serial_info
 * 
 * Paramateres none 
 * 
 * Returns bool
 * 
 * helper to request info from a uart stamp and parse the answer into the global stamp_ variables
 * returns true when info is received from the stamp, false otherwise
 */
boolean request_serial_info() {                        

#ifdef DEBUG
    Serial.print ("*In request_serial_info ftn* \n");  
#endif
  clearIncomingBuffer();
  sSerial.write("i");                                // send "i" which returns info on all versions of the stamps
  sSerial.write("\r");

  delay(150);                            // give it some time to send an answer

  sensor_bytes_received = sSerial.readBytesUntil(13, sensordata, 9);  //we read the data sent from the Atlas Scientific device until we see a <CR>. We also count how many character have been received

  if (sensor_bytes_received > 0) {                     // there's an answer
    answerReceived = true;                             // so we can globally know if there was an answer on this channel
 
    if ( parseInfo() ) {                               // try to parse the answer string
      delay(100);
      clearIncomingBuffer();                           // some stamps burp more info (*OK or something). we're not interested yet.
      return true;
    }
  }

  return false;                                        // it was not possible to get info from the stamp
}

/*
 * Function: parseInfo
 * 
 * Paramateres: none
 * 
 * Returns bool
 * 
 * parse the infor data received from the probe chip
 * returns true when data is succesfully processed
 * false otherwise
 * 
 */

boolean parseInfo() {                  // parses the answer to a "i" command. returns true if answer was parseable, false if not.
#ifdef DEBUG
    Serial.print ("*In parseInfo ftn* \n");  
#endif
  // example:
  // PH EZO  -> '?I,pH,1.1'
  // ORP EZO -> '?I,OR,1.0'   (-> wrong in documentation 'OR' instead of 'ORP')
  // DO EZO  -> '?I,D.O.,1.0' || '?I,DO,1.7' (-> exists in D.O. and DO form)
  // EC EZO  -> '?I,EC,1.0 '
  // TEMP EZO-> '?I,RTD,1.2'


  // Legazy PH  -> 'P,V5.0,5/13'
  // Legazy ORP -> 'O,V4.4,2/13'
  // Legazy DO  -> 'D,V5.0,1/13'
  // Legazy EC  -> 'E,V3.1,5/13'

  if (sensordata[0] == '?' && sensordata[1] == 'I') {          // seems to be an EZO stamp

    // PH EZO
    if (sensordata[3] == 'P' && sensordata[4] == 'H') {
      stamp_type = F("EZO pH");
      stamp_version[0] = sensordata[6];
      stamp_version[1] = sensordata[7];
      stamp_version[2] = sensordata[8];

      return true;

      // ORP EZO
    }
    else if (sensordata[3] == 'O' && sensordata[4] == 'R') {
      stamp_type = F("EZO ORP");
      stamp_version[0] = sensordata[6];
      stamp_version[1] = sensordata[7];
      stamp_version[2] = sensordata[8];

      return true;

      // DO EZO
    }
    else if (sensordata[3] == 'D' && sensordata[4] == 'O') {
      stamp_type = F("EZO DO");
      stamp_version[0] = sensordata[6];
      stamp_version[1] = sensordata[7];
      stamp_version[2] = sensordata[8];

      return true;

      // D.O. EZO
    }
    else if (sensordata[3] == 'D' && sensordata[4] == '.' && sensordata[5] == 'O' && sensordata[6] == '.') {
      stamp_type = F("EZO DO");
      stamp_version[0] = sensordata[8];
      stamp_version[1] = sensordata[9];
      stamp_version[2] = sensordata[10];

      return true;

      // EC EZO
    }
    else if (sensordata[3] == 'E' && sensordata[4] == 'C') {
      stamp_type = F("EZO EC");
      stamp_version[0] = sensordata[6];
      stamp_version[1] = sensordata[7];
      stamp_version[2] = sensordata[8];

      return true;
      
      // RTD EZO
    }
    else if (sensordata[3] == 'R' && sensordata[4] == 'T' && sensordata[5] == 'D') {
      stamp_type = F("EZO RTD");
      stamp_version[0] = sensordata[7];
      stamp_version[1] = sensordata[8];
      stamp_version[2] = sensordata[9];

      return true;

      // unknown EZO stamp
    }
    else {
      stamp_type = F("unknown EZO stamp");
      return true;
    }

  }

  // it's a legacy stamp (non-EZO)
  else
  {
    // Legacy pH
    if ( sensordata[0] == 'P') {
      stamp_type = F("pH (legacy)");
      stamp_version[0] = sensordata[3];
      stamp_version[1] = sensordata[4];
      stamp_version[2] = sensordata[5];
      stamp_version[3] = 0;
      return true;

      // legacy ORP
    }
    else if ( sensordata[0] == 'O') {
      stamp_type = F("ORP (legacy)");
      stamp_version[0] = sensordata[3];
      stamp_version[1] = sensordata[4];
      stamp_version[2] = sensordata[5];
      stamp_version[3] = 0;
      return true;

      // Legacy D.O.
    }
    else if ( sensordata[0] == 'D') {
      stamp_type = F("D.O. (legacy)");
      stamp_version[0] = sensordata[3];
      stamp_version[1] = sensordata[4];
      stamp_version[2] = sensordata[5];
      stamp_version[3] = 0;
      return true;

      // Lecagy EC
    }
    else if ( sensordata[0] == 'E') {
      stamp_type = F("EC (legacy)");
      stamp_version[0] = sensordata[3];
      stamp_version[1] = sensordata[4];
      stamp_version[2] = sensordata[5];
      stamp_version[3] = 0;
      return true;
    }
  }

  /*
    Serial.println("can not parse data: ");
    Serial.print("'");
    Serial.print(sensordata);
    Serial.println("'");
  */
  return false;        // can not parse this info-string
}

/*
 * Function: clearIncomingBuffer
 * 
 * Paramateres: none
 * 
 * Returns none
 * 
 * "clears" the incoming soft-serial buffer
 */
#if !defined (I2C_ONLY)
void clearIncomingBuffer() {           

  while (sSerial.available() ) {
    //Serial.print((char)sSerial.read());
    sSerial.read();
  }
}
#endif

/*
 * Function: serialPrintDivider
 * 
 * Paramateres none
 * 
 * Returns none
 * 
 * only for printing a divider
 */
void serialPrintDivider() {
  Serial.println(  F("------------------"));
}


