<?php
$curl = curl_init();
$id=$_GET['empid'];
// echo $id;
curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://localhost:8000/deleteEmploye',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'DELETE',
  CURLOPT_POSTFIELDS =>'{
  "_id": "'.$id.'"
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