<?php

$username="admin";
$pass="admin";
if(isset($_POST["btnsubmit"])){
    $name=$_POST["name"];
    $password=$_POST["password"];
if($name == $username && $password == $pass){
    echo "<script>
    alert('login successful');
    window.open('dashboard.php', '_self');</script>";
}
else{
    echo "<script>
    alert('incorrect credientials');
    window.open('index.php','_self')</script>";

}
    
}


?>