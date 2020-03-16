window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 42)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};
var temp_node_1_warn_high;
var temp_node_1_warn_low;


var DO_node_1_warn_low;

var Sal_node_1_warn_high;
var Sal_node_1_warn_low;

var PH_node_1_warn_high;
var PH_node_1_warn_low;

var temp_node_2_warn_high;
var temp_node_2_warn_low;

var temp_node_3_warn_high;
var temp_node_3_warn_low;

var temp_node_4_warn_high;
var temp_node_4_warn_low;



var opts_do_tilapia = {
    angle: -0.25,
    lineWidth: 0.2,
    radiusScale:0.9,
    pointer: {
        length: 0.6,
        strokeWidth: 0.05,
        color: '#000000'
    },
    staticLabels: {
        font: "10px sans-serif",
        labels: [0,5,10, 15, 20],
        fractionDigits: 0
    },
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 1},
        {strokeStyle: "#FFDD00", min: 1, max: 4},
        {strokeStyle: "#30B32D", min: 4, max: 20},

    ],

    limitMax: false,
    limitMin: false,
    highDpiSupport: true,
    renderTicks: {
        divisions: 4,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#333333',
        subDivisions: 5,
        subLength: 0.5,
        subWidth: 0.6,
        subColor: '#666666'
    },
 };

var opts_do_kob = {
    angle: -0.25,
    lineWidth: 0.2,
    radiusScale:0.9,
    pointer: {
        length: 0.6,
        strokeWidth: 0.05,
        color: '#000000'
    },
    staticLabels: {
        font: "10px sans-serif",
        labels: [0,5,10, 15, 20],
        fractionDigits: 0
    },
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 2},
        {strokeStyle: "#FFDD00", min: 2, max: 4},
        {strokeStyle: "#30B32D", min: 4, max: 20},

    ],

    limitMax: false,
    limitMin: false,
    highDpiSupport: true,
    renderTicks: {
        divisions: 4,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#333333',
        subDivisions: 5,
        subLength: 0.5,
        subWidth: 0.6,
        subColor: '#666666'
    },
 };

var opts_temp_tilapia = {
        angle: -0.25,
        lineWidth: 0.2,
        radiusScale:0.9,
        pointer: {
            length: 0.6,
            strokeWidth: 0.05,
            color: '#000000'
        },
        staticLabels: {
            font: "10px sans-serif",
            labels: [0, 20, 40, 60,80,100],
            fractionDigits: 0
        },
        staticZones: [
            {strokeStyle: "#F03E3E", min: 0, max: 10},
            {strokeStyle: "#FFDD00", min: 10, max: 26},
            {strokeStyle: "#30B32D", min: 26, max: 31},
            {strokeStyle: "#FFDD00", min: 31, max: 35},
            {strokeStyle: "#F03E3E", min: 35, max: 100}
        ],
        limitMax: false,
        limitMin: false,
        highDpiSupport: true,
        renderTicks: {
          divisions: 10,
          divWidth: 1.1,
          divLength: 0.7,
          divColor: '#333333',
          subDivisions: 5,
          subLength: 0.5,
          subWidth: 0.6,
          subColor: '#666666'
        },
    };

var opts_temp_kob = {
        angle: -0.25,
        lineWidth: 0.2,
        radiusScale:0.9,
        pointer: {
            length: 0.6,
            strokeWidth: 0.05,
            color: '#000000'
        },
        staticLabels: {
            font: "10px sans-serif",
            labels: [0, 20, 40, 60,80,100],
            fractionDigits: 0
        },
        staticZones: [
            {strokeStyle: "#F03E3E", min: 0, max: 12},
            {strokeStyle: "#FFDD00", min: 12, max: 18},
            {strokeStyle: "#30B32D", min: 18, max: 22},
            {strokeStyle: "#FFDD00", min: 22, max: 25},
            {strokeStyle: "#F03E3E", min: 25, max: 100}
        ],
        limitMax: false,
        limitMin: false,
        highDpiSupport: true,
        renderTicks: {
          divisions: 10,
          divWidth: 1.1,
          divLength: 0.7,
          divColor: '#333333',
          subDivisions: 5,
          subLength: 0.5,
          subWidth: 0.6,
          subColor: '#666666'
        },
    };

var opts_ph_tilapia = {
    angle: -0.25,
    lineWidth: 0.2,
    radiusScale:0.9,
    pointer: {
        length: 0.6,
        strokeWidth: 0.05,
        color: '#000000'
    },
    staticLabels: {
        font: "10px sans-serif",
        labels: [0,2,5,7,9,11,14],
        fractionDigits: 0
    },
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 4},
        {strokeStyle: "#FFDD00", min: 4, max: 7},
        {strokeStyle: "#30B32D", min: 7, max: 9},
        {strokeStyle: "#FFDD00", min: 8, max: 11},
        {strokeStyle: "#F03E3E", min: 11, max: 14}
    ],
    limitMax: false,
    limitMin: false,
    highDpiSupport: true,
    renderTicks: {
        divisions: 14,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#333333',

    },
};

var opts_ph_kob = {
    angle: -0.25,
    lineWidth: 0.2,
    radiusScale:0.9,
    pointer: {
        length: 0.6,
        strokeWidth: 0.05,
        color: '#000000'
    },
    staticLabels: {
        font: "10px sans-serif",
        labels: [0,2,5,7,9,11,14],
        fractionDigits: 0
    },
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 4},
        {strokeStyle: "#FFDD00", min: 4, max: 6},
        {strokeStyle: "#30B32D", min: 6, max: 8},
        {strokeStyle: "#FFDD00", min: 8, max: 10},
        {strokeStyle: "#F03E3E", min: 10, max: 14}
    ],
    limitMax: false,
    limitMin: false,
    highDpiSupport: true,
    renderTicks: {
        divisions: 14,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#333333',

    },
};

    var opts_sal_tilapia = {
        angle: -0.25,
        lineWidth: 0.2,
        radiusScale:0.9,
        pointer: {
            length: 0.6,
            strokeWidth: 0.05,
            color: '#000000'
        },
        staticLabels: {
            font: "10px sans-serif",
            labels: [0,10, 20,30, 40,50,60],
            fractionDigits: 0
        },
        //todo: Get values for the warnings to add a warning mechanism
        staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 20},
        {strokeStyle: "#FFDD00", min: 20, max: 35},
        {strokeStyle: "#30B32D", min: 35, max: 37},
        {strokeStyle: "#FFDD00", min: 37, max: 40},
        {strokeStyle: "#F03E3E", min: 40, max: 60}
        ],
        limitMax: false,
        limitMin: false,
        highDpiSupport: true,
        renderTicks: {
            divisions: 10,
            divWidth: 1.1,
            divLength: 0.7,
            divColor: '#333333',
            subDivisions: 5,
            subLength: 0.5,
            subWidth: 0.6,
            subColor: '#666666'
        },
    };

var opts_sal_kob = {
        angle: -0.25,
        lineWidth: 0.2,
        radiusScale:0.9,
        pointer: {
            length: 0.6,
            strokeWidth: 0.05,
            color: '#000000'
        },
        staticLabels: {
            font: "10px sans-serif",
            labels: [0,10, 20,30, 40,50,60],
            fractionDigits: 0
        },
        //todo: Get values for the warnings to add a warning mechanism
        staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 20},
        {strokeStyle: "#FFDD00", min: 20, max: 35},
        {strokeStyle: "#30B32D", min: 35, max: 37},
        {strokeStyle: "#FFDD00", min: 37, max: 40},
        {strokeStyle: "#F03E3E", min: 40, max: 60}
        ],
        limitMax: false,
        limitMin: false,
        highDpiSupport: true,
        renderTicks: {
            divisions: 10,
            divWidth: 1.1,
            divLength: 0.7,
            divColor: '#333333',
            subDivisions: 5,
            subLength: 0.5,
            subWidth: 0.6,
            subColor: '#666666'
        },
    };



var is_remote= 1;

var device1_temp = [1,2,3,4,5,6,7,8,9,10];
var device2_temp = [10,9,8,7,6,5,4,3,2,1];
var device3_temp = [1,2,3,6,5,4,9,8,7,10];
var device4_temp = [7,6,5,4,7,6,5,4,7,5];
var device1_PH = [1,2,3,4,5,6,7,8,9,10];
var device1_DO = [1,2,3,4,5,6,7,8,9,10];
var device1_Sal = [1,2,3,4,5,6,7,8,9,10];
var data_values = [];
var data_labels = [];


var plot_DO,plot_Sal,plot_PH,plot_temp,plot_Data;
var GaugeInterval_dev1,GaugeInterval_dev2,GaugeInterval_dev3,GaugeInterval_dev4;
var Device_1_interval,Device_2_interval,Device_3_interval,Device_4_interval;
var PHInterval_dev1,DOInterval_dev1,SalInterval_dev1,warning_interval;
var SendNodeDataInterval,GetChangesInterval,SendWarningInterval;



window.onload =codeAddress

function codeAddress()
{
    drawTempChartDev1();
    drawPHChartDev1();
    drawSAlChartDev1();
    drawDOChartDev1();
    drawTempChartDev2();
    drawTempChartDev3();
    drawTempChartDev4();
    startIntervalsGauges();
    startWarningInterval();
    if (is_remote == 0)
    {

        startDataSharingIntervals();

    }
    GetSystemSettings();


}

function GetSystemSettings()
{

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {

                    Data_array = this.responseText.split("/");

                     if (this.responseText == "no data")
                    {
                    }
                    else if (this.responseText == "ERROR")
                    {
                        alert("Error has occurred");
                    }
                    else if (Data_array[0] == "Settings")
                    {
                        if (Data_array[1] == "1")
                        {
                            if (Data_array[2] == "1")
                            {
                                TempGauge.setOptions (opts_temp_tilapia);
                                PHGauge.setOptions(opts_ph_tilapia);
                                SalGauge.setOptions(opts_sal_tilapia);
                                DOGauge.setOptions(opts_do_tilapia);
                                temp_node_1_warn_high = 31;
                                temp_node_1_warn_low=26;
                                DO_node_1_warn_low=3;
                                Sal_node_1_warn_high = 38;
                                Sal_node_1_warn_low= 30;
                                PH_node_1_warn_high=9;
                                PH_node_1_warn_low=6;
                            }
                            else
                            {
                                TempGauge.setOptions(opts_temp_kob);
                                PHGauge.setOptions(opts_ph_kob);
                                SalGauge.setOptions(opts_sal_kob);
                                DOGauge.setOptions(opts_do_kob);

                                temp_node_1_warn_high = 24;
                                temp_node_1_warn_low=17;
                                DO_node_1_warn_low=3;
                                Sal_node_1_warn_high = 38;
                                Sal_node_1_warn_low= 30;
                                PH_node_1_warn_high=8;
                                PH_node_1_warn_low=6;
                            }

                        }
                        if (Data_array[3] == "2")
                        {
                             if (Data_array[4] == "1")
                            {
                                TempGauge_2.setOptions (opts_temp_tilapia);
                                settings_2 = 1;
                                temp_node_1_warn_high = 31;
                                temp_node_1_warn_low=26;

                            }
                            else
                            {
                                TempGauge_2.setOptions(opts_temp_kob);
                                settings_2 = 2;
                                temp_node_1_warn_high = 24;
                                temp_node_1_warn_low=17;


                            }
                        }
                        if (Data_array[5] == "3")
                        {
                             if (Data_array[6] == "1")
                            {
                                TempGauge_3.setOptions (opts_temp_tilapia);
                                settings_3 = 1;
                                temp_node_1_warn_high = 31;
                                temp_node_1_warn_low=26;

                            }
                            else
                            {
                                TempGauge_3.setOptions(opts_temp_kob);
                                settings_3 = 2;
                                temp_node_1_warn_high = 24;
                                temp_node_1_warn_low=17;

                            }
                        }
                        if (Data_array[7] == "4")
                        {
                             if (Data_array[8] == "1")
                            {
                                settings_4 = 1;
                                TempGauge_4.setOptions (opts_temp_tilapia);
                                temp_node_1_warn_high = 31;
                                temp_node_1_warn_low=26;


                            }
                            else
                            {
                                settings_4 = 2;
                                TempGauge_4.setOptions(opts_temp_kob);
                                temp_node_1_warn_high = 24;
                                temp_node_1_warn_low=17;


                            }
                        }


                    }
                }
            };

            xmlhttp.open("GET", "gethint.php?q=" + "GetSettings", true);
            xmlhttp.send();

}

function startDataSharingIntervals()
{

    SendNodeDataInterval = setInterval(function() {
        if (navigator.onLine == true)
        {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {

                }
            };

            xmlhttp.open("GET", "write_file.php?q=" + "SendNodeData", true);
            xmlhttp.send();
        }

         // data.setValue(0, 1, 50 );

        }, 10000);

    SendWarningInterval = setInterval(function() {

        if (navigator.onLine == true)
        {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {

                }
            };

            xmlhttp.open("GET", "write_file.php?q=" + "Warnings", true);
            xmlhttp.send();
        }
         // data.setValue(0, 1, 50 );

        }, 30000);

    GetChangesInterval = setInterval(function() {

        if (navigator.onLine == true)
        {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {
                     //alert("in the IF");
                    // alert(this.responseText);

                }
            };
        }
        xmlhttp.open("GET", "write_file.php?q=" + "GetChanges", true);
        xmlhttp.send();

         // data.setValue(0, 1, 50 );

        }, 30000);

}

function startWarningInterval()
{
    warning_interval = setInterval(function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                // alert(this.responseText);
                if (this.responseText == "no data")
                {
                }
                else if (this.responseText == "ERROR")
                {
                    alert("Error has occurred");
                }
                else
                {
                    Data_array = this.responseText.split("/");
                    if (Data_array[1] == "UV")
                        document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Low Voltage on Node " + Data_array[0] +"  ("+Data_array[2]+")";

                }
            }
        };

        xmlhttp.open("GET", "gethint.php?q=" + "WARNING", true);
        xmlhttp.send();



         // data.setValue(0, 1, 50 );

        }, 10000);

}


function drawTempChartDev1() {

       // var data = google.visualization.arrayToDataTable([
         // ['Label', 'Value'],
         // ['Temperature', 80]
        //]);

    var options = {
        width: 400, height: 200,
        redFrom: 9, redTo: 18,
        greenFrom:18, greenTo:40,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
    };

    TempGauge = new Gauge(document.getElementById("Temp-preview"));

    TempGauge.setTextField(document.getElementById("preview-textfield"));
    TempGauge.maxValue = 100;
    TempGauge.minvalue = 0;
    TempGauge.set(device1_temp[9]);
    TempGauge

        //var target = document.getElementById('PH_chart'); // your canvas element
        //ar gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
        //gauge.maxValue = 3000; // set max gauge value
        //gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
        //gauge.animationSpeed = 32; // set animation speed (32 is default value)
        //gauge.set(1050); // set actual value




}

function drawTempChartDev2() {

// var data = google.visualization.arrayToDataTable([
 // ['Label', 'Value'],
 // ['Temperature', 80]
//]);

    var options = {
        width: 400, height: 200,
        redFrom: 9, redTo: 18,
        greenFrom:18, greenTo:40,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
    };

    TempGauge_2 = new Gauge(document.getElementById("Temp-preview-d-2"));

    TempGauge_2.setTextField(document.getElementById("preview-textfield-d-2"));
    TempGauge_2.maxValue = 100;
    TempGauge_2.minvalue = 0;
    TempGauge_2.set(device2_temp[9]);

//var target = document.getElementById('PH_chart'); // your canvas element
//ar gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
//gauge.maxValue = 3000; // set max gauge value
//gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
//gauge.animationSpeed = 32; // set animation speed (32 is default value)
//gauge.set(1050); // set actual value




}

function drawTempChartDev3() {

    // var data = google.visualization.arrayToDataTable([
     // ['Label', 'Value'],
     // ['Temperature', 80]
    //]);

    var options = {
        width: 400, height: 200,
        redFrom: 9, redTo: 18,
        greenFrom:18, greenTo:40,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
    };

    TempGauge_3 = new Gauge(document.getElementById("Temp-preview-d-3"));


    TempGauge_3.setTextField(document.getElementById("preview-textfield-d-3"));
    TempGauge_3.maxValue = 100;
    TempGauge_3.minvalue = 0;
    TempGauge_3.set(device3_temp[9]);

    //var target = document.getElementById('PH_chart'); // your canvas element
    //ar gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    //gauge.maxValue = 3000; // set max gauge value
    //gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    //gauge.animationSpeed = 32; // set animation speed (32 is default value)
    //gauge.set(1050); // set actual value




}


function drawTempChartDev4() {

   // var data = google.visualization.arrayToDataTable([
     // ['Label', 'Value'],
     // ['Temperature', 80]
    //]);

    var options = {
      width: 400, height: 200,
      redFrom: 9, redTo: 18,
      greenFrom:18, greenTo:40,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    TempGauge_4 = new Gauge(document.getElementById("Temp-preview-d-4"));
    TempGauge_4.setTextField(document.getElementById("preview-textfield-d-4"));
    TempGauge_4.maxValue = 100;
    TempGauge_4.minvalue = 0;
    TempGauge_4.set(device4_temp[9]);

    //var target = document.getElementById('PH_chart'); // your canvas element
    //ar gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    //gauge.maxValue = 3000; // set max gauge value
    //gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    //gauge.animationSpeed = 32; // set animation speed (32 is default value)
    //gauge.set(1050); // set actual value




}







function drawPHChartDev1() {

    //var data = google.visualization.arrayToDataTable([
    //  ['Label', 'Value'],
    //  ['PH', 3]
    // ]);

    PHGauge = new Gauge(document.getElementById("PH-preview"));



    PHGauge.setTextField(document.getElementById("PH-textfield"));
    PHGauge.maxValue = 14;
    PHGauge.minvalue = 0;
    PHGauge.set(10.5);


}

function drawSAlChartDev1() {

/*var data = google.visualization.arrayToDataTable([
  ['Label', 'Value'],
  ['Salinity', 3]
]);*/

    var options = {
        max: 10,
        width: 400, height: 200,
        redFrom: 9, redTo: 10,
        yellowFrom:7, yellowTo: 9,
        minorTicks: 5
    };

    SalGauge = new Gauge(document.getElementById("Sal-preview"));

    SalGauge.setTextField(document.getElementById("Sal-textfield"));
    SalGauge.maxValue = 60;
    SalGauge.minvalue = 0;
    SalGauge.set(12);


}

function drawDOChartDev1() {

    /*var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['D/O', 3]
    ]);*/

    var options = {
        max: 19,
        width: 400, height: 200,
        redFrom: 9, redTo: 10,
        yellowFrom:7, yellowTo: 9,
        minorTicks: 5
    };

    DOGauge = new Gauge(document.getElementById("DO-preview"));
    var opts = {
        angle: -0.25,
        lineWidth: 0.2,
        radiusScale:0.9,
        pointer: {
            length: 0.6,
            strokeWidth: 0.05,
            color: '#000000'
        },
        staticLabels: {
            font: "10px sans-serif",
            labels: [0,5,10, 15, 20],
            fractionDigits: 0
        },
        staticZones: [
            {strokeStyle: "#F03E3E", min: 0, max: 5},
            {strokeStyle: "#FFDD00", min: 5, max: 6},
            {strokeStyle: "#30B32D", min: 6, max: 20},
           // {strokeStyle: "#FFDD00", min: 35, max: 40},
            //{strokeStyle: "#F03E3E", min: 40, max: 20}
        ],

        limitMax: false,
        limitMin: false,
        highDpiSupport: true,
        renderTicks: {
            divisions: 4,
            divWidth: 1.1,
            divLength: 0.7,
            divColor: '#333333',
            subDivisions: 5,
            subLength: 0.5,
            subWidth: 0.6,
            subColor: '#666666'
        },
    };
    DOGauge.setOptions(opts);
    DOGauge.setTextField(document.getElementById("DO-textfield"));
    DOGauge.maxValue = 20;
    DOGauge.minvalue = 0;
    DOGauge.set(10.5);


}

function startIntervalsGauges()
{

    GaugeInterval_dev1 = setInterval(function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                //alert(this.responseText);
                Data_array = this.responseText.split("/");
                if (this.responseText == "no data")
                {
                }
                else if (this.responseText == "ERROR")
                {
                    alert("Error has occurred");
                }
                else if (Data_array[0] == "Data")
                {
                    if (((Number(Data_array[5])) <= TempGauge.maxValue) && ((Number(Data_array[5])) >= TempGauge.minValue))
                    {
                        TempGauge.set(Number(Data_array[5]));
                        device1_temp.splice(0,1);
                        device1_temp.push(Number(Data_array[5]));
                        if ((Number(Data_array[5])) < temp_node_1_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too low for Node 1 "; }
                        else if ((Number(Data_array[5])) > temp_node_1_warn_high)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too high for Node 1 "; }
                        else {}
                    }
                    else
                    {
                        document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Invalid data From Node 1 ";
                    }

                    if (((Number(Data_array[2])) <= PHGauge.maxValue) && ((Number(Data_array[2])) >= PHGauge.minValue))
                    {
                        PHGauge.set(Number(Data_array[2]));
                        device1_PH.splice(0,1);
                        device1_PH.push(Number(Data_array[2]));
                        if ((Number(Data_array[2])) < PH_node_1_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "PH too low for Node 1 "; }
                        else if ((Number(Data_array[2])) > PH_node_1_warn_high)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "PH too high for Node 1 "; }
                        else {}
                    }
                    else
                    {
                        document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Invalid data From Node 1 ";
                    }

                    if (((Number(Data_array[4])) <= SalGauge.maxValue) && ((Number(Data_array[4])) >= SalGauge.minValue))
                    {
                        SalGauge.set(Number(Data_array[4]));
                        device1_Sal.splice(0,1);
                        device1_Sal.push(Number(Data_array[4]));
                        if ((Number(Data_array[4])) < Sal_node_1_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Salinity too low for Node 1 "; }
                        else if ((Number(Data_array[4])) > Sal_node_1_warn_high)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Salinity too high for Node 1 "; }
                        else {}
                    }
                    else
                    {
                        document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Invalid data From Node 1 ";
                    }

                    if (((Number(Data_array[3])) <= DOGauge.maxValue) && ((Number(Data_array[3])) >= DOGauge.minValue))
                    {
                        DOGauge.set(Number(Data_array[3]));
                        device1_DO.splice(0,1);
                        device1_DO.push(Number(Data_array[3]));

                        if ((Number(Data_array[3])) < DO_node_1_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Dissolved Oxygen too low for Node 1 "; }

                    }
                    else
                    {
                        document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Invalid data From Node 1 ";
                    }
                    if (is_remote == 0)
                        document.getElementById("TimeStamp_dev1").textContent = 'Last Updated: ' + Data_array[6];
                    else
                        document.getElementById("TimeStamp_dev1").textContent = 'Last Updated: ' + Data_array[7];










                }
                else
                {}
            }
        };

        xmlhttp.open("GET", "gethint.php?q=" + "Device1", true);
        xmlhttp.send();



         // data.setValue(0, 1, 50 );

        }, 5000);

    GaugeInterval_dev2 = setInterval(function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
               //  alert(this.responseText);
                Data_array = this.responseText.split("/");

                if (this.responseText == "no data")
                {
                }
                else if (this.responseText == "ERROR")
                {
                    alert("Error has occurred");
                }
                else if (Data_array[0] == "Data")
                {

                    if (((Number(Data_array[5])) <= TempGauge_2.maxValue) && ((Number(Data_array[5])) >= TempGauge_2.minValue))
                    {

                        TempGauge_2.set(Number(Data_array[5]));
                        device2_temp.splice(0,1);
                        device2_temp.push(Number(Data_array[5]));

                        if (is_remote == 0)
                            document.getElementById("TimeStamp_dev2").textContent = 'Last Updated: ' + Data_array[6];
                        else
                            document.getElementById("TimeStamp_dev2").textContent = 'Last Updated: ' + Data_array[7];

                         if ((Number(Data_array[5])) < temp_node_2_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too low for Node 2 "; }
                        else if ((Number(Data_array[5])) > temp_node_2_warn_high)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too high for Node 2 "; }
                        else {}
                        }
                         else
                        {
                            document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Invalid data From Node 2 ";
                        }


                }
                else
                {}
            }
        };

        xmlhttp.open("GET", "gethint.php?q=" + "Device2", true);
        xmlhttp.send();

         // data.setValue(0, 1, 50 );

        }, 5000);

        GaugeInterval_dev3 = setInterval(function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                // alert(this.responseText);
                Data_array = this.responseText.split("/");

                if (this.responseText == "no data")
                {
                }
                else if (this.responseText == "ERROR")
                {
                    alert("Error has occurred");
                }
                else if (Data_array[0] == "Data")
                {
                    Data_array = this.responseText.split("/");

                    if (((Number(Data_array[5])) <= TempGauge_3.maxValue) && ((Number(Data_array[5])) >= TempGauge_3.minValue))
                    {
                        TempGauge_3.set(Number(Data_array[5]));
                        device3_temp.splice(0,1);
                        device3_temp.push(Number(Data_array[5]));

                        if (is_remote == 0)
                            document.getElementById("TimeStamp_dev3").textContent = 'Last Updated: ' + Data_array[6];
                        else
                            document.getElementById("TimeStamp_dev3").textContent = 'Last Updated: ' + Data_array[7];

                        if ((Number(Data_array[5])) < temp_node_3_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too low for Node 3 "; }
                        else if ((Number(Data_array[5])) > temp_node_3_warn_high)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too high for Node 3 "; }
                        else {}
                    }
                     else
                    {
                        document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Invalid data From Node 3 ";
                    }


                }
                else
                {}
            }
        };

        xmlhttp.open("GET", "gethint.php?q=" + "Device3", true);
        xmlhttp.send();

         // data.setValue(0, 1, 50 );

        }, 5000);

        GaugeInterval_dev4 = setInterval(function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                // alert(this.responseText);

                Data_array = this.responseText.split("/");


                if (this.responseText == "no data")
                {
                }
                else if (this.responseText == "ERROR")
                {
                    alert("Error has occurred");
                }
                else if (Data_array[0] == "Data")
                {
                    Data_array = this.responseText.split("/");

                    if (((Number(Data_array[5])) <= TempGauge_4.maxValue) && ((Number(Data_array[5])) >= TempGauge_4.minValue))
                    {
                        TempGauge_4.set(Number(Data_array[5]));
                        device4_temp.splice(0,1);
                        device4_temp.push(Number(Data_array[5]));

                        if (is_remote == 0)
                            document.getElementById("TimeStamp_dev4").textContent = 'Last Updated: ' + Data_array[6];
                        else
                            document.getElementById("TimeStamp_dev4").textContent = 'Last Updated: ' + Data_array[7];

                        if ((Number(Data_array[5])) < temp_node_4_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too low for Node 4 "; }
                        else if ((Number(Data_array[5])) > temp_node_4_warn_high)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too high for Node 4 "; }
                        else {}
                    }
                     else
                    {
                        document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Invalid data From Node 4 ";
                    }
                }
                else
                {}
            }
        };

        xmlhttp.open("GET", "gethint.php?q=" + "Device4", true);
        xmlhttp.send();

         // data.setValue(0, 1, 50 );

        }, 5000);

}
function startIntervalsCharts()
{
        Device_1_interval  =    setInterval(function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                Data_array = this.responseText.split("/");

                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occured");
                }
                else if (Data_array[0] == "Data")
                {
                    if (Number(Data_array[5]) != -127){
                        removeDatafromFront(plot_temp,'Device 1');

                        addDataAtEnd(plot_temp,'Device 1',Number(Data_array[5]));
                        if ((Number(Data_array[5])) < temp_node_1_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too low for Node 1 "; }
                        else if ((Number(Data_array[5])) > temp_node_1_warn_high)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too high for Node 1 "; }
                        else {}

                    }

                    removeDatafromFront(plot_PH,'Device 1');
                    addDataAtEnd(plot_PH,'Device 1',Number(Data_array[2]));
                    removeDatafromFront(plot_Sal,'Device 1');
                    addDataAtEnd(plot_Sal,'Device 1',Number(Data_array[4]));
                    removeDatafromFront(plot_DO,'Device 1');
                    addDataAtEnd(plot_DO,'Device 1',Number(Data_array[3]));

                    if (is_remote == 0){
                        document.getElementById("TimeStamp_dev1").textContent = 'Last Updated: ' + Data_array[6];
                        document.getElementById("TimeStamp_dev2").textContent = 'Last Updated: ' + Data_array[6];
                        document.getElementById("TimeStamp_dev3").textContent = 'Last Updated: ' + Data_array[6];
                        document.getElementById("TimeStamp_dev4").textContent = 'Last Updated: ' + Data_array[6];
                    }
                    else
                    {
                        document.getElementById("TimeStamp_dev1").textContent = 'Last Updated: ' + Data_array[7];
                        document.getElementById("TimeStamp_dev2").textContent = 'Last Updated: ' + Data_array[7];
                        document.getElementById("TimeStamp_dev3").textContent = 'Last Updated: ' + Data_array[7];
                        document.getElementById("TimeStamp_dev4").textContent = 'Last Updated: ' + Data_array[7];


                    }

                    if ((Number(Data_array[2])) < PH_node_1_warn_low)
                    {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "PH too low for Node 1 "; }
                    else if ((Number(Data_array[2])) > PH_node_1_warn_high)
                    {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "PH too high for Node 1 "; }
                    else {}

                    if ((Number(Data_array[4])) < Sal_node_1_warn_low)
                    {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Salinity too low for Node 1 "; }
                    else if ((Number(Data_array[4])) > Sal_node_1_warn_high)
                    {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Salinity too high for Node 1 "; }
                    else {}

                    if ((Number(Data_array[3])) < DO_node_1_warn_low)
                    {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Dissolved Oxygen too low for Node 1 "; }



                }
                else{}

            }
        };

        xmlhttp.open("GET", "gethint.php?q=" + "Device1", true);
        xmlhttp.send();
    }, 5000);

    Device_2_interval  =    setInterval(function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                Data_array = this.responseText.split("/");

                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occured");
                }
                else if (Data_array[0] == "Data")
                {
                    Data_array = this.responseText.split("/");
                    if (Number(Data_array[5]) != -127){
                        removeDatafromFront(plot_temp,'Device 2');
                        addDataAtEnd(plot_temp,'Device 2',Number(Data_array[5]));

                        if (is_remote == 0)
                            document.getElementById("TimeStamp_dev1").textContent = 'Last Updated: ' + Data_array[6];
                        else
                            document.getElementById("TimeStamp_dev1").textContent = 'Last Updated: ' + Data_array[7];

                        if ((Number(Data_array[5])) < temp_node_2_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too low for Node 2 "; }
                        else if ((Number(Data_array[5])) > temp_node_2_warn_high)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too high for Node 2 "; }
                        else {}
                    }
                }
                else
                {}

            }
        };

        xmlhttp.open("GET", "gethint.php?q=" + "Device2", true);
        xmlhttp.send();
    }, 5000);

    Device_3_interval  =    setInterval(function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                Data_array = this.responseText.split("/");


                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occured");
                }
                else if (Data_array[0] == "Data")
                {
                    if (Number(Data_array[5]) != -127){
                        Data_array = this.responseText.split("/");
                        removeDatafromFront(plot_temp,'Device 3');
                        addDataAtEnd(plot_temp,'Device 3',Number(Data_array[5]));

                        if (is_remote == 0)
                            document.getElementById("TimeStamp_dev1").textContent = 'Last Updated: ' + Data_array[6];
                        else
                            document.getElementById("TimeStamp_dev1").textContent = 'Last Updated: ' + Data_array[7];

                        if ((Number(Data_array[5])) < temp_node_3_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too low for Node 3 "; }
                        else if ((Number(Data_array[5])) > temp_node_3_warn_high)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too high for Node 3 "; }
                        else {}
                        }


                }
                else
                {}

            }
        };

        xmlhttp.open("GET", "gethint.php?q=" + "Device3", true);
        xmlhttp.send();
    }, 5000);
    Device_4_interval  =    setInterval(function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                Data_array = this.responseText.split("/");

                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occurred");
                }
                else if (Data_array[0] == "Data")
                {
                    //alert (this.responseText);

                    if (Number(Data_array[5]) != -127){

                        removeDatafromFront(plot_temp,'Device 4');
                        addDataAtEnd(plot_temp,'Device 4',Number(Data_array[5]));

                        if (is_remote == 0)
                            document.getElementById("TimeStamp_dev1").textContent = 'Last Updated: ' + Data_array[6];
                        else
                            document.getElementById("TimeStamp_dev1").textContent = 'Last Updated: ' + Data_array[7];


                        if ((Number(Data_array[5])) < temp_node_4_warn_low)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too low for Node 4 "; }
                        else if ((Number(Data_array[5])) > temp_node_4_warn_high)
                        {    document.getElementById("warning").innerHTML = "<strong> WARNING: </strong>" + "Temperature too high for Node 4 "; }
                        else {}
                    }
                }
                else
                {}

            }
        };

        xmlhttp.open("GET", "gethint.php?q=" + "Device4", true);
        xmlhttp.send();
    }, 5000);
}

function drawlinechart_temp(){

    var ctx = document.getElementById("Temp_Chart").getContext('2d');
    plot_temp = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [{
                    label: 'Device 1',
                    data: device1_temp,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    borderWidth: 3,
                    fill : false,

                },

                {
                    label: 'Device 2',
                    data: device2_temp,
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    borderWidth: 3,
                    fill:false,
                },
                {
                    label: 'Device 3',
                    data: device3_temp,
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    borderWidth: 3,
                    fill:false,
                },
                {
                    label: 'Device 4',
                    data: device4_temp,
                    backgroundColor: window.chartColors.yellow,
                    borderColor: window.chartColors.yellow,
                    borderWidth: 3,
                    fill:false,
                }

            ]
        },
        options: {
            scales: {
                xAxes: [{
                    time: {
                        unit: 'Readings'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: 'Readings'
                    }
                },],
                yAxes: [{
                    scaleLabel:{
                        display: true,
                        labelString: 'Value °C'
                    }
                }]
            }
        }
    });

}

function draw_linechart_PH(){

    var ctx = document.getElementById("PH_Chart").getContext('2d');
    plot_PH = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [{
                    label: 'Device 1',
                    data: device1_PH,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    borderWidth: 3,
                    fill : false,

                },

               /* {
                    label: 'Device 2',
                    data: [3, 5, 7, 8, 9, 3,5,6,2,1],
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    borderWidth: 3,
                    fill:false,
                },
                {
                    label: 'Device 3',
                    data: [12, 19, 3, 5, 2, 5,14,21,9,10],
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    borderWidth: 3,
                    fill:false,
                },
                {
                    label: 'Device 4',
                    data: [25, 26, 7, 7, 8, 8,1,4,5,2],
                    backgroundColor: window.chartColors.yellow,
                    borderColor: window.chartColors.yellow,
                    borderWidth: 3,
                    fill:false,
                }*/

            ]
        },
        options: {
            scales: {
                xAxes: [{
                    time: {
                        unit: 'Readings'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: 'Readings'
                    }
                },],
                yAxes: [{
                    scaleLabel:{
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    });

}

function draw_linechart_Sal(){

    var ctx = document.getElementById("Salinity_Chart").getContext('2d');
    plot_Sal = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [{
                    label: 'Device 1',
                    data: device1_Sal,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    borderWidth: 3,
                    fill : false,

                },

/*                {
                    label: 'Device 2',
                    data: [3, 5, 7, 8, 9, 3,5,6,2,1],
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    borderWidth: 3,
                    fill:false,
                },
                {
                    label: 'Device 3',
                    data: [12, 19, 3, 5, 2, 5,14,21,9,10],
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    borderWidth: 3,
                    fill:false,
                },
                {
                    label: 'Device 4',
                    data: [25, 26, 7, 7, 8, 8,1,4,5,2],
                    backgroundColor: window.chartColors.yellow,
                    borderColor: window.chartColors.yellow,
                    borderWidth: 3,
                    fill:false,
                }*/

            ]
        },
        options: {
            scales: {
                xAxes: [{
                    time: {
                        unit: 'Readings'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: 'Readings'
                    }
                },],
                yAxes: [{
                    scaleLabel:{
                        display: true,
                        labelString: 'Value mg/L'
                    }
                }]
            }
        }
    });

}

function draw_linechart_DO(){

    var ctx = document.getElementById("DO_Chart").getContext('2d');
    plot_DO = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [{
                    label: 'Device 1',
                    data: device1_DO,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    borderWidth: 3,
                    fill : false,

                },

                /*{
                    label: 'Device 2',
                    data: [3, 5, 7, 8, 9, 3,5,6,2,1],
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    borderWidth: 3,
                    fill:false,
                },
                {
                    label: 'Device 3',
                    data: [12, 19, 3, 5, 2, 5,14,21,9,10],
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    borderWidth: 3,
                    fill:false,
                },
                {
                    label: 'Device 4',
                    data: [25, 26, 7, 7, 8, 8,1,4,5,2],
                    backgroundColor: window.chartColors.yellow,
                    borderColor: window.chartColors.yellow,
                    borderWidth: 3,
                    fill:false,
                }*/

            ]
        },
        options: {
            scales: {
                xAxes: [{
                    time: {
                        unit: 'Readings'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: 'Readings'
                    }
                },],
                yAxes: [{
                    scaleLabel:{
                        display: true,
                        labelString: 'Value mg/L'
                    }
                }]
            }
        }
    });

}

function draw_linechart_data(){

    var ctx = document.getElementById("Data_plot").getContext('2d');
    plot_Data = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data_labels,
            datasets: [{
                    label: 'data',
                    data: data_values,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    borderWidth: 3,
                    fill : false,

                },

                /*{
                    label: 'Device 2',
                    data: [3, 5, 7, 8, 9, 3,5,6,2,1],
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    borderWidth: 3,
                    fill:false,
                },
                {
                    label: 'Device 3',
                    data: [12, 19, 3, 5, 2, 5,14,21,9,10],
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    borderWidth: 3,
                    fill:false,
                },
                {
                    label: 'Device 4',
                    data: [25, 26, 7, 7, 8, 8,1,4,5,2],
                    backgroundColor: window.chartColors.yellow,
                    borderColor: window.chartColors.yellow,
                    borderWidth: 3,
                    fill:false,
                }*/

            ]
        },
        options: {
            scales: {
                xAxes: [{
                    time: {
                        unit: 'Readings'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: 'Readings'
                    }
                },],
                yAxes: [{
                    scaleLabel:{
                        display: true,
                        labelString: 'Value mg/L'
                    }
                }]
            }
        }
    });

}


function drawplots()
{
    drawlinechart_temp();
    draw_linechart_DO();
    draw_linechart_PH();
    draw_linechart_Sal();
}

function addDataAtEnd(chart, label, data) {

    for(var i = 0; i < chart.data.datasets.length; i++)
        if (chart.data.datasets[i].label == label)
           chart.data.datasets[i].data.push(data);

    chart.update();

}

function removeDatafromFront(chart,mylabel) {

    for(var i = 0; i < chart.data.datasets.length; i++)
        if (chart.data.datasets[i].label == mylabel)
           chart.data.datasets[i].data.splice(0,1);

     chart.update();
}

function Deviceskeypress (){
    document.getElementById("main_page").innerhtml = '';
    $('#main_page').load("Overview.html");
    setTimeout(function() {codeAddress();},300);

}

function plotkeypress()
{
    clearInterval(GaugeInterval_dev1);
    clearInterval(GaugeInterval_dev2);
    clearInterval(GaugeInterval_dev3);
    clearInterval(GaugeInterval_dev4);
    document.getElementById("main_page").innerhtml = '';
    $('#main_page').load("plots.html");

    setTimeout(function() {drawplots();},300);
    startWarningInterval();
    startIntervalsCharts();

}

function Device_3_keypress(){
    window.location.hash = "Device_3_data";
    window.reload();
}

function Files_keypress (){
    clearInterval(GaugeInterval_dev1);
    clearInterval(GaugeInterval_dev2);
    clearInterval(GaugeInterval_dev3);
    clearInterval(GaugeInterval_dev4);
    clearInterval(warning_interval);

    document.getElementById("main_page").innerHTML = '';
    $('#main_page').load("Data_plots.html");

    setTimeout(function() {draw_linechart_data();},300);


}

function Setting_keypress (){

    clearInterval(GaugeInterval_dev1);
    clearInterval(GaugeInterval_dev2);
    clearInterval(GaugeInterval_dev3);
    clearInterval(GaugeInterval_dev4);
    clearInterval(warning_interval);

    document.getElementById("main_page").innerHTML = '';
    $('#main_page').load("settings.html");

    GetDataInterval_1();
    GetDataInterval_2();
    GetDataInterval_3();
    GetDataInterval_4();


}
function Setinputperiod(){
    time = document.getElementById("inputPeriod").value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                alert("success");

        }
    };


    xmlhttp.open("GET", "write_file.php?q=" + "data_time"+"&"+"a="+time, true);
    xmlhttp.send();


}

function GetDataInterval_1()
{


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                Data_array = this.responseText.split("/");

                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occurred");
                }
                else if (Data_array[0] == "Data")
                {
                    //alert (this.responseText);

                     document.getElementById("send_time_1").innerHTML= Data_array[1];

                }
                else
                {}

        }
    };

    xmlhttp.open("GET", "gethint.php?q=" + "Send_Times"+"&"+"a=2", true);
    xmlhttp.send();
}

function GetDataInterval_2()
{


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                Data_array = this.responseText.split("/");

                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occurred");
                }
                else if (Data_array[0] == "Data")
                {
                    //alert (this.responseText);
                        document.getElementById("send_time_2").innerHTML= Data_array[1];

                }
                else
                {}

        }
    };

    xmlhttp.open("GET", "gethint.php?q=" + "Send_Times"+"&"+"a=3", true);
    xmlhttp.send();
}
function GetDataInterval_3()
{


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                Data_array = this.responseText.split("/");

                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occurred");
                }
                else if (Data_array[0] == "Data")
                {
                    //alert (this.responseText);
                    document.getElementById("send_time_3").innerHTML= Data_array[1];

                }
                else
                {}

        }
    };

    xmlhttp.open("GET", "gethint.php?q=" + "Send_Times"+"&"+"a=4", true);
    xmlhttp.send();
}
function GetDataInterval_4()
{


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                Data_array = this.responseText.split("/");

                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occurred");
                }
                else if (Data_array[0] == "Data")
                {
                    //alert (this.responseText);

                        document.getElementById("send_time_4").innerHTML= Data_array[1];

                }
                else
                {}

        }
    };

    xmlhttp.open("GET", "gethint.php?q=" + "Send_Times"+"&"+"a=5", true);
    xmlhttp.send();
}
function form_select()
{
    if(document.getElementById("inlineFormCustomSelectPref").options[document.getElementById("inlineFormCustomSelectPref").selectedIndex].value=="Choose...")
    {
        document.getElementById("data_button").disabled = true;

        document.getElementById("customRadioInline1").disabled = true;
        document.getElementById("customRadioInline1").checked = false;

        document.getElementById("customRadioInline2").disabled = true;
        document.getElementById("customRadioInline2").checked = false;

        document.getElementById("customRadioInline3").disabled = true;
        document.getElementById("customRadioInline3").checked = false;

        document.getElementById("customRadioInline4").disabled = true;
        document.getElementById("customRadioInline4").checked = false;

   }
   else if (document.getElementById("inlineFormCustomSelectPref").options[document.getElementById("inlineFormCustomSelectPref").selectedIndex].value=="2")
   {
        document.getElementById("data_button").disabled = true;

        document.getElementById("customRadioInline1").disabled = false;

        document.getElementById("customRadioInline2").disabled = false;

        document.getElementById("customRadioInline3").disabled = false;

        document.getElementById("customRadioInline4").disabled = false;
   }
   else
   {
        document.getElementById("data_button").disabled = true;

        document.getElementById("customRadioInline1").disabled = false;
        document.getElementById("customRadioInline2").checked = false;

        document.getElementById("customRadioInline2").disabled = true;
        document.getElementById("customRadioInline2").checked = false;


        document.getElementById("customRadioInline3").disabled = true;
        document.getElementById("customRadioInline3").checked = false;


        document.getElementById("customRadioInline4").disabled = true;
        document.getElementById("customRadioInline4").checked = false;


   }

}
function radio_select()
{
    document.getElementById("data_button").disabled = false;
}

function Get_plot_data()
{
    data_value =  $( "input:checked" ).val();
    id = document.getElementById("inlineFormCustomSelectPref").options[document.getElementById("inlineFormCustomSelectPref").selectedIndex].value;



   var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                Data_array = this.responseText.split("/");

                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occurred");
                }
                else if (Data_array[0] == "Data")
                {
                    //alert (this.responseText);
                    plot_Data.data.labels.splice(0,plot_Data.data.labels.length);
                    plot_Data.data.datasets[0].data.splice(0,plot_Data.data.datasets[0].data.length);

                    for (var j = 1; j < (Data_array.length - 1); j++){
                        plot_Data.data.labels.push(j);

                        for(var i = 0; i < plot_Data.data.datasets.length; i++)
                            if (plot_Data.data.datasets[i].label == "data")
                                plot_Data.data.datasets[i].data.push(Number(Data_array[j]));


                    }
                    plot_Data.update();
                }
                else
                {}

        }
    };

    xmlhttp.open("GET", "gethint.php?q=" + "fetch_data"+"&"+"id="+id+"&"+"a="+data_value, true);
    xmlhttp.send();


}

function Disp_keypress()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                Data_array = this.responseText.split("<br/>");

                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occurred");
                }
                else if (Data_array[0] == "Data")
                {
                    //alert (this.responseText);
                    document.getElementById("main_page").innerHTML = '';
                    document.getElementById("main_page").innerHTML = this.responseText;


                }
                else
                {}

        }
    };

    xmlhttp.open("GET", "gethint.php?q=" + "fetch_data_all", true);
    xmlhttp.send();
}
function Delete_all_data ()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                Data_array = this.responseText.split("<br/>");

                if (this.responseText == "no data")
                {
                    // do nothing if no data available
                }
                else if (this.responseText == "ERROR")
                {
                    // send an alter in case of error :: todo :: find another way to display error
                    alert("Error occurred");
                }
                else if (Data_array[0] == "Data")
                {


                }
                else
                {}

        }
    };

    xmlhttp.open("GET", "gethint.php?q=" + "delete_past_data", true);
    xmlhttp.send();
}
function Set_gauge_opts ()
{
     id = document.getElementById("NodeSelection").options[document.getElementById("NodeSelection").selectedIndex].value;

    data_value =  $( "input:checked" ).val();
    if (data_value == "kob")
    {
        if (id == "2")
        {
            TempGauge.setOptions(opts_temp_kob);
            PHGauge.setOptions(opts_ph_kob);
            SalGauge.setOptions(opts_sal_kob);
            DOGauge.setOptions(opts_do_kob);

        }
        else if ( id == "3")
            TempGauge_2.setOptions(opts_temp_kob);
        else if (id == "4")
            TempGauge_3.setOptions(opts_temp_kob);
        else if (id == "5")
            TempGauge_4.setOptions(opts_temp_kob);
        else {}
    }
    else
    {
         if (id == "2")
        {
            TempGauge.setOptions(opts_temp_tilapia);
            PHGauge.setOptions(opts_ph_tilapia);
            SalGauge.setOptions(opts_sal_tilapia);
            DOGauge.setOptions(opts_do_tilapia);

        }
        else if ( id == "3")
            TempGauge_2.setOptions(opts_temp_tilapia);
        else if (id == "4")
            TempGauge_3.setOptions(opts_temp_tilapia);
        else if (id == "5")
            TempGauge_4.setOptions(opts_temp_tilapia);
        else {}

    }


     var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
                 //alert("in the IF");
                Data_array = this.responseText.split("/");

                if (this.responseText == "done")
                {

                    // do nothing if no data available
                }

                else
                {}

        }
    };

    xmlhttp.open("GET", "gethint.php?q=" + "Update_Settings"+"&"+"id="+id+"&" + "a="+data_value, true);
    xmlhttp.send();


}