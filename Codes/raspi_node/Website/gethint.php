<?php

$servername = "localhost";
$username = "kq";
$password = "test";
$dbname = "data";
$deviceDataTable= "NodeData";

// get the q parameter from URL
$q = $_REQUEST["q"];
$a = $_REQUEST["a"];
$id = $_REQUEST["id"];


// lookup all hints from array if $q is different from ""


if ($q == "WARNING") {

        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        $line = "Connection opened";

        $sql = "SELECT * FROM Warnings WHERE read_flag = 1 ORDER BY id ASC LIMIT 1";

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
               $line = "Data/".$row["nodeid"]."/" . $row["type"]."/".$row[time];
               $id = $row["id"];


               $sql = "UPDATE Warnings SET read_flag = 0 WHERE id = ".$id;

               mysqli_query($conn, $sql);

            }
        }
        else {
            $line = "no data";
        }

        mysqli_close($conn);

}

if ($q == "Device1") {


    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM NodeData WHERE read_flag = 1 and nodeid = 2 ORDER BY id ASC LIMIT 1";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
           $line = "Data/".$row["nodeid"]."/" . $row["ph"]."/".$row["dissolvedoxygen"]."/".$row["salinity"]."/".$row["temprature"]."/".$row["time"]."/".$row["local_timestamp"];
           $id = $row["id"];

           $sql = "UPDATE NodeData SET read_flag = 0 WHERE id = ".$id;

           mysqli_query($conn, $sql);



        }
    }
    else {
        $sql = "SELECT * FROM NodeData WHERE nodeid = 2 ORDER BY id DESC LIMIT 1";

        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
               $line = "Data/".$row["nodeid"]."/" . $row["ph"]."/".$row["dissolvedoxygen"]."/".$row["salinity"]."/".$row["temprature"]."/".$row["time"]."/".$row["local_timestamp"];
            }
        }
        else
            $line = "no data";
    }

    mysqli_close($conn);

}
if ($q == "Device2") {


        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "SELECT * FROM NodeData WHERE read_flag = 1 and nodeid = 3 ORDER BY id ASC LIMIT 1";

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
               $line = "Data/".$row["nodeid"]."/" . $row["ph"]."/".$row["dissolvedoxygen"]."/".$row["salinity"]."/".$row["temprature"]."/".$row["time"]."/".$row["local_timestamp"];
               $id = $row["id"];

               $sql = "UPDATE NodeData SET read_flag = 0 WHERE id = ".$id;

               mysqli_query($conn, $sql);



            }
        }
        else {
            $sql = "SELECT * FROM NodeData WHERE nodeid = 3 ORDER BY id DESC LIMIT 1";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) > 0) {
                // output data of each row
                while($row = mysqli_fetch_assoc($result)) {
                   $line = "Data/".$row["nodeid"]."/" . $row["ph"]."/".$row["dissolvedoxygen"]."/".$row["salinity"]."/".$row["temprature"]."/".$row["time"]."/".$row["local_timestamp"];
                }
            }
            else
                $line = "no data";
        }

        mysqli_close($conn);

}
if ($q == "Device3") {

        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "SELECT * FROM NodeData WHERE read_flag = 1 and nodeid = 4 ORDER BY id ASC LIMIT 1";

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
               $line = "Data/".$row["nodeid"]."/" . $row["ph"]."/".$row["dissolvedoxygen"]."/".$row["salinity"]."/".$row["temprature"]."/".$row["time"]."/".$row["local_timestamp"];
               $id = $row["id"];

               $sql = "UPDATE NodeData SET read_flag = 0 WHERE id = ".$id;

               mysqli_query($conn, $sql);



            }
        }
        else {
             $sql = "SELECT * FROM NodeData WHERE nodeid = 4 ORDER BY id DESC LIMIT 1";

             $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {
                // output data of each row
                while($row = mysqli_fetch_assoc($result)) {
                   $line = "Data/".$row["nodeid"]."/" . $row["ph"]."/".$row["dissolvedoxygen"]."/".$row["salinity"]."/".$row["temprature"]."/".$row["time"]."/".$row["local_timestamp"];
                }
            }
            else
                $line = "no data";
        }

        mysqli_close($conn);



}
if ($q == "Device4") {

        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "SELECT * FROM NodeData WHERE read_flag = 1 and nodeid = 5 ORDER BY id ASC LIMIT 1";

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
               $line = "Data/".$row["nodeid"]."/" . $row["ph"]."/".$row["dissolvedoxygen"]."/".$row["salinity"]."/".$row["temprature"]."/".$row["time"]."/".$row["local_timestamp"];
               $id = $row["id"];

               $sql = "UPDATE NodeData SET read_flag = 0 WHERE id = ".$id;

               mysqli_query($conn, $sql);

            }
        }
        else {
            $sql = "SELECT * FROM NodeData WHERE nodeid = 5 ORDER BY id DESC LIMIT 1";

            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {
                // output data of each row
                while($row = mysqli_fetch_assoc($result)) {
                   $line = "Data/".$row["nodeid"]."/" . $row["ph"]."/".$row["dissolvedoxygen"]."/".$row["salinity"]."/".$row["temprature"]."/".$row["time"]."/".$row["local_timestamp"];
                }
            }
            else
                $line = "no data";
        }

        mysqli_close($conn);



}

if ($q == "Send_Times")
{
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "SELECT * FROM NodeData WHERE nodeid = ".$a." ORDER BY id DESC LIMIT 1";

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
             while($row = mysqli_fetch_assoc($result)) {
               $line = "Data/".$row["send_time"];

            }
        }
        else {
            $line = "no data";
        }

        mysqli_close($conn);


}

if ($q == "fetch_data")
{
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "SELECT ".$a." FROM NodeData WHERE nodeid =".$id;
        $line = "Data/";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
           while($row = mysqli_fetch_assoc($result)) {
               $line = $line.$row[$a]."/";

            }
        }
        else {
            $line = "no data";
        }

        mysqli_close($conn);


}

if ($q == "fetch_data_all")
{
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "SELECT * FROM NodeData";
        $line = "Data<br/> nodeid,ph,dissolvedoxygen,salinity,temprature,send_interval <br/>";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
           while($row = mysqli_fetch_assoc($result)) {
               $line = $line.$row["nodeid"]."," . $row["ph"].",".$row["dissolvedoxygen"].",".$row["salinity"].",".$row["temprature"].",".$row["time"].",".$row["send_time"]."<br/> ";
               

            }
        }
        else {
            $line = "no data";
        }

        mysqli_close($conn);

}

if ($q == "delete_past_data")
{
    $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "DELETE  FROM NodeData";
        $result = mysqli_query($conn, $sql);
        mysqli_close($conn);

}

if ($q == "GetSettings")
{
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "SELECT * FROM PageSettings";


        $result = mysqli_query($conn, $sql);
        $line = "Settings/";
        if (mysqli_num_rows($result) > 0) {
           while($row = mysqli_fetch_assoc($result)) {
               $line = $line.$row["nodeid"]."/" . $row["settings"]."/";


            }
        }
        else {
            $line = "no data";
        }

        mysqli_close($conn);

}

if ($q == "Update_Settings")
{
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        if ($a == "Kob")
           $sql = "UPDATE PageSettings SET settings = 2 WHERE nodeid = ".$id;
        else
           $sql = "UPDATE PageSettings SET settings = 1 WHERE nodeid = ".$id;


        echo $sql;
        $result = mysqli_query($conn, $sql);

        mysqli_close($conn);

}

echo $line;


?>
