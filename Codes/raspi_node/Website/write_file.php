<?php



//$servername = "localhost";
$username = "kq";
$password = "test";
$dbname = "data";
$deviceDataTable= "Changes";


$q = $_REQUEST["q"];
$a = $_REQUEST["a"];


$line = $a;
if ($q == "data_time"){


    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO Changes (sendtime, read_flag) VALUES (".$a.",1)";


    $result = mysqli_query($conn, $sql);

    mysqli_close($conn);


}

if ($q == "SendNodeData")

{


    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM Last_ID LIMIT 1";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
           
           $id = $row["id"];

        }
        echo "This is id-".$id;

        $sql = "SELECT id FROM NodeData ORDER BY id DESC LIMIT 1";

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
                $maxID = $row["id"];
                
            }

        }
        echo "this is max id ".$maxID;


        if ($maxID >= $id)
        {


            $sql = "SELECT * FROM NodeData WHERE id = ".$id;

            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {

                // output data of each row
                while($row = mysqli_fetch_assoc($result)) {
                   
                            
                    $nodeid =  $row["nodeid"];
                    $ph =  $row["ph"];
                    $dissolvedoxygen =  $row["dissolvedoxygen"];
                    $salinity =  $row["salinity"];
                    $temprature =  $row["temprature"];
                    $send_time = $row["send_time"];
                    $time_stamp = $row["time"];

                }
                //extract data from the post
                //set POST variables
                $url = '134.102.188.100/write_file.php?q=NodeData';
                $fields = array(
                    'nodeid' => ($nodeid),
                    'ph' => ($ph),
                    'dissolvedoxygen' => ($dissolvedoxygen),
                    'salinity' => ($salinity),
                    'temprature' => ($temprature),
                    'send_time' => ($send_time),
                    'time_stamp' => ($time_stamp)
                    
                );

                //url-ify the data for the POST
                foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
                rtrim($fields_string, '&');
                echo $fields_string;

                //open connection
                $ch = curl_init();
                echo "connections opened";
                //set the url, number of POST vars, POST data
                curl_setopt($ch,CURLOPT_URL, $url);
                curl_setopt($ch,CURLOPT_POST, count($fields));
                curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

                //execute post
                $result_curl = curl_exec($ch);

                echo "this is result ----".$result_curl."--";

                if ($result_curl == "done")
                {
                    echo "in the if";
                    $sql = "SELECT id FROM NodeData ORDER BY id DESC LIMIT 1";

                    $result = mysqli_query($conn, $sql);

                    if (mysqli_num_rows($result) > 0) {
                        while($row = mysqli_fetch_assoc($result)) {
                            $maxID = $row["id"];
                            echo $maxID;
                            if ($maxID >= $id){

                                $sql = "UPDATE Last_ID SET id =".($id + 1);
                                mysqli_query($conn, $sql);


                            }
                        }
                    }


                }

                //close connection
                curl_close($ch);


            }
            else {
                $line = "no data";
                $sql = "SELECT id FROM NodeData ORDER BY id DESC LIMIT 1";

                $result = mysqli_query($conn, $sql);

                if (mysqli_num_rows($result) > 0) {
                    while($row = mysqli_fetch_assoc($result)) {
                        $maxID = $row["id"];
                        if ($maxID >= $id){

                            $sql = "UPDATE Last_ID SET id =".($id + 1);
                            mysqli_query($conn, $sql);


                        }
                    }
                }


            }
        }
        else
        {}
       

    }
    else {
    }
    mysqli_close($conn);
    

}

if ($q == "SendWarnings")

{
        $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM Last_Warning_ID LIMIT 1";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
           
           $id = $row["id"];

        }
        echo "This is id-".$id;

        $sql = "SELECT id FROM Warnings ORDER BY id DESC LIMIT 1";

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
                $maxID = $row["id"];

                
            }

        }
        echo "this is max id ".$maxID;


        if ($maxID >= $id)
        {

            echo "in the if";
            $sql = "SELECT * FROM Warnings WHERE id = ".$id;

            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {

                // output data of each row
                while($row = mysqli_fetch_assoc($result)) {
                   
                            
                    $nodeid =  $row["nodeid"];
                    $type =  $row["type"];
                    $time_stamp = $row["time"];
                    

                }
                //extract data from the post
                //set POST variables
                $url = '134.102.188.100/write_file.php?q=Warnings';
                $fields = array(
                    'nodeid' => ($nodeid),
                    'type' => ($type),
                    'time_stamp' =>($time_stamp)
        
                );

                //url-ify the data for the POST
                foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
                rtrim($fields_string, '&');
                echo $fields_string;

                //open connection
                $ch = curl_init();
                echo "connections opened";
                //set the url, number of POST vars, POST data
                curl_setopt($ch,CURLOPT_URL, $url);
                curl_setopt($ch,CURLOPT_POST, count($fields));
                curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

                //execute post
                $result_curl = curl_exec($ch);

                echo "this is result ----".$result_curl."--";

                if ($result_curl == "done")
                {
                    echo "in the if";
                           
                    if ($maxID >= $id){

                        $sql = "UPDATE Last_Warning_ID SET id =".($id + 1);
                        mysqli_query($conn, $sql);


                    }
                        
                    


                }

                //close connection
                curl_close($ch);


            }
            else {
                echo "in the else";


                if ($maxID >= $id){

                    $sql = "UPDATE Last_Warning_ID SET id =".($id + 1);
                    mysqli_query($conn, $sql);


                }
 

            }
        }
        else
        {}
       

    }
    else {
    }
    mysqli_close($conn);
    echo $line;


}
if ($q == "GetChanges")

{
    //extract data from the post
    //set POST variables
    $url = '134.102.188.100/write_file.php?q=Changes';
    $fields = array(
        'nodeid' => ("3"),
        
        
    );

    //url-ify the data for the POST
    foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
    rtrim($fields_string, '&');

    //open connection
    $ch = curl_init();

    //set the url, number of POST vars, POST data
    curl_setopt($ch,CURLOPT_URL, $url);
    curl_setopt($ch,CURLOPT_POST, count($fields));
    curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLINFO_HEADER_OUT, true);

    //execute post
    $result = curl_exec($ch);

    if (!curl_errno($ch)) {
      $info = curl_getinfo($ch);
      echo $info['url'];
    }

    //close connection
    curl_close($ch);

    if ($result == "no data")
    {
        
    }
    else
    {
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "INSERT INTO Changes (sendtime, read_flag) VALUES (".$result.",1)";
        echo $sql;

        $result = mysqli_query($conn, $sql);

        mysqli_close($conn);
    }


}
if($q == "NodeData")
{
    $nodeid = $_REQUEST["nodeid"];
    $ph = $_REQUEST["ph"];
    $dissolvedoxygen = $_REQUEST["dissolvedoxygen"];
    $salinity = $_REQUEST["salinity"];
    $temprature = $_REQUEST["temprature"];
    $send_time = $_REQUEST["send_time"];
    $local_time = $_REQUEST ["time_stamp"];

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO NodeData (nodeid, ph, dissolvedoxygen, salinity, temprature,local_timestamp, send_time,read_flag) VALUES (".$nodeid.",".$ph.",".$dissolvedoxygen.",".$salinity.",".$temprature.",'".$local_time."',".$send_time.",1)";

    //$f_temp = fopen('datafiles-old/changes_update.txt', 'a') or die (error_get_last());
    //$txt = $sql;
    
    //fwrite($f_temp,$txt);
     
    //fclose($f_temp);


    $result = mysqli_query($conn, $sql);

    mysqli_close($conn);

    echo "done";
}

if($q == "Warnings")
{
    $nodeid = $_REQUEST["nodeid"];
    $ph = $_REQUEST["type"];
    

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO Warnings (nodeid, type, read_flag) VALUES (".$nodeid.",".$type.",".",1)";

    //$f_temp = fopen('datafiles-old/changes_update.txt', 'a') or die (error_get_last());
    //$txt = $sql;
    
    //fwrite($f_temp,$txt);
     
    //fclose($f_temp);


    $result = mysqli_query($conn, $sql);

    mysqli_close($conn);

    echo "done";
}

if($q == "Changes")
{
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM Changes WHERE read_flag = 1 ORDER BY id ASC LIMIT 1";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
           $line = $row["sendtime"];
           $id = $row["id"];

           $sql = "UPDATE Changes SET read_flag = 0 WHERE id = ".$id;

           mysqli_query($conn, $sql);



        }
    }
    else {
        $line = "no data";
    }

    mysqli_close($conn);

    echo $line;
}

if ($q == "testing")
{
    echo " at start";
    $nodeid = "2";
    $ph = "5";
    $dissolvedoxygen = "4";
    $salinity = "35";
    $temprature = "22";
    $local_time = "2018-10-07 22:00:00";
    $send_time = "5";

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    echo "after conn";
    $sql = "INSERT INTO NodeData (nodeid, ph, dissolvedoxygen, salinity, temprature, local_timestamp,send_time,read_flag) VALUES (".$nodeid.",".$ph.",".$dissolvedoxygen.",".$salinity.",".$temprature.",'".$local_time."',".$send_time.",1)";

    //$f_temp = fopen('datafiles-old/changes_update.txt', 'a') or die (error_get_last());
    //$txt = $sql;

    //fwrite($f_temp,$txt);

    //fclose($f_temp);

    echo $sql;
    $result = mysqli_query($conn, $sql);

    echo $result;

    mysqli_close($conn);

    echo "done";
}


// Ouput text to user based on test


// Output "no suggestion" if no hint was found or output correct values

?>
