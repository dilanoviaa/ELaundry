
<?php

include 'db_connect.php';

$json_input_data=json_decode(file_get_contents('php://input'), true);
$name=$json_input_data["name"];	
$username=$json_input_data["username"];
$passw= $json_input_data["password"];
$email= $json_input_data["email"];
$tanggal_lahir= $json_input_data["tanggallahir"];
$password=hash('sha256', $passw);

	if ($username=='' || $passw=='') {
	    echo '{"status":"error"}';
	}
    $sql = "INSERT INTO users (id,username,name,email,password) VALUES ('','$username','$name','$email','$password')";
    if ($connect->query($sql) === true) {
        echo '{"status":"berhasil"}';
    } else {
        echo "Error " . $sql . ' ' . $connect->connect_error;
    }
$connect->close();

?>