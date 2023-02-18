<?php
if(isset($_POST["btn"]))    
$name = $_POST['fname'];
$email = $_POST['email'];
$age = $_POST['Age'];
$dob = $_POST['dob'];
$id=$_POST["employeid"];

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://localhost:8000/updateEmploye',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',
  CURLOPT_POSTFIELDS =>'{
  "_id": "'.$id.'",
  "updateOption": {
    "name": "'.$name.'",
    "email": "'.$email.'",
    "age": '.$age.',
    "dob": "'.$dob.'"
  }
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;


echo "<script>
window.open('ViewEmployee.php', '_self');</script>";

?>
