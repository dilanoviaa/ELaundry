<?php
	include 'db_connect.php';
	$json_input_data=json_decode(file_get_contents('php://input'), true);
	$username = $json_input_data['username'];
	$password = $json_input_data['password'];
	$encryptPassword = hash('sha256',$password);
	$queryLogin = mysqli_query($connect, "SELECT * FROM
		users WHERE username = '$username' AND password = '$encryptPassword' ");
	if (mysqli_num_rows($queryLogin)) {
		
		$row = mysqli_fetch_assoc($queryLogin);

		$data = array(
			'message' => "Login Succeess",
			'data' => $row,
			'status' => "200"
			);
	} else {
		$data = array(
			'message' => "Login Failed",
			'status' => "404"
		);
	}
	echo json_encode($data);
?>