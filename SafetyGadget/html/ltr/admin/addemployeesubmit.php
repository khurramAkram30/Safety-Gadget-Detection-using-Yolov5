<?php
if(isset($_POST["btn"]))
$name = $_POST['fname'];
$email = $_POST['email'];
$age = $_POST['Age'];
$dob = $_POST['dob'];
$phone = $_POST['phone'];

$url = "http://localhost:8000/addEmploye";
$data = array('name' => $name, 'email' => $email, 'age' => $age, 'dob' => $dob, 'phone' => $phone);
$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\n",
        'method'  => 'POST',
        'content' => json_encode($data)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) {
    /* Handle error */
}

$json_result = json_decode($result, true);

$test=var_dump($json_result);


echo "<script>
window.open('ViewEmployee.php', '_self');</script>";

?>




