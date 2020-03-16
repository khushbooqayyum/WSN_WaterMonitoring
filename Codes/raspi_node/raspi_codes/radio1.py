#!/usr/bin/env python2

import RFM69
from RFM69registers import *
import datetime
import time
import MySQLdb


#RFM69 settings
NODE=1
NET=50
KEY="sampleEncryptKey"
TIMEOUT=3
TOSLEEP=0.1

#My SQL database information
Username = ""
Password = ""
Servername = "localhost"
Databsename = "data"



# sqlquery = " INSERT INTO NodeData (nodeid, ph, dissolvedoxygen, salinity, temprature, read_flag) VALUES (%d,%f,%f,%f,%f,%d); " % (2,6.8,8.0,0.2,25.5,1)
#
# try:
#     print ("in ")
#     x.execute(sqlquery)
#     db.commit()
# except:
#     print ("in except")
#     db.rollback()

#sqlquery = " SELECT * FROM NodeData"
# sqlquery = "UPDATE NodeData SET read_flag = 0 WHERE id = 3"
#
#
# try:
#     print ("in ")
#     x.execute(sqlquery)
#     db.commit()
# except:
#     print ("in except")
#     db.rollback()







while True:

    radio = RFM69.RFM69(RF69_433MHZ, NODE, NET, False)
    print "class initialized"

    print "reading all registers"
    results = radio.readAllRegs()
    #for result in results:
    print results

    print "Performing rcCalibration"
    radio.rcCalibration()

    print "setting high power"
    radio.setPowerLevel(31)

    print "Checking temperature"
    print radio.readTemperature(0)

    print "setting encryption"
    radio.encrypt(KEY)

    print "starting loop..."
    sequence = 0
    timeoutcounter = 0
    while True:

        msg = "I'm radio %d: %d" % (NODE, sequence)
        sequence = sequence + 1

        print "tx to radio 2: " + msg
        msg = "ping \n"

        print "start recv..."
        radio.receiveBegin()
        timedOut=0
        while not radio.receiveDone():
            timedOut+=TOSLEEP
            time.sleep(TOSLEEP)

            if timedOut > TIMEOUT:
                print "timed out waiting for recv"     # waiting for receive but receiving nothing
                timeoutcounter = timeoutcounter + 1    # reset the transceiver
                break

        if (timeoutcounter > 300):
            print ("timer timed out ");
            break

        print ("end recv...")
        print " *** %s from %s RSSI:%s" % ("".join([chr(letter) for letter in radio.DATA]), radio.SENDERID, radio.RSSI)
        temp ="".join([chr(letter) for letter in radio.DATA])
        reading = temp.split("/") #parse received data

        print ("this is reading :" +reading[0]+"---")

        if (len("".join([chr(letter) for letter in radio.DATA])) != 0) and ( radio.SENDERID != 0):
            print temp
            timeoutcounter = 0;
            if (reading[0].startswith("*UV")): # register warning in the database

                db = MySQLdb.connect(Servername, Username, Password, Databsename)
                x = db.cursor()

                sqlquery = "INSERT INTO Warnings (nodeid, type, read_flag) VALUES (%d,%f,%f,%f,%f,%d); " % (
                    radio.SENDERID, "UV",1)

                print sqlquery
                # try:
                #     print ("in ")
                #     x.execute(sqlquery)
                #     db.commit()
                # except:
                #     print ("in except")
                #     db.rollback()
                #
                # db.close()

            else:  # insert the data into the sql server
                db = MySQLdb.connect(Servername, Username, Password, Databsename)
                x = db.cursor()
                print ("this is send_time :" + reading[5] + "---")
                sqlquery = "INSERT INTO NodeData (nodeid, ph, dissolvedoxygen, salinity, temprature,send_time, read_flag) VALUES (%s,%s,%s,%s,%s,%s,%d); " % (
                reading[0], reading[1], reading[2], reading[3], reading[4],reading [5], 1)
                print sqlquery
                try:
                    print ("writing data to database ")
                    x.execute(sqlquery)
                    db.commit()
                except:
                    print (" error")
                    db.rollback()

                db.close()

        if radio.ACKRequested(): # reply with an ack when requested
            print ("sending ack...")

            db = MySQLdb.connect(Servername, Username, Password, Databsename)
            x = db.cursor()

            sqlquery = "SELECT * FROM Changes ORDER BY id DESC LIMIT 1"

            print sqlquery

            try:
                x.execute(sqlquery)
                result = x.fetchall()
                for row in result:
                    print row[0] + row[1] + row[2] + row[3]
                    print "\\n"
            except:
                print ("except")
                db.rollback()

            data = "Sendperiod:"+row[1]     #send the wake period to the device

            radio.sendACK(0,data)
        else:
            print ("ack not requested...")

    print ("shutting down")
    radio.shutdown()
print ("out of loop")



