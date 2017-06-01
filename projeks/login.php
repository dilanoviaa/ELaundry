<?php
	include 'db_connect.php';
    $postdata = file_get_contents("php://input");

if (isset($postdata)) {
    $request = json_decode($postdata);
    $password = $request->password;
    $username = $request->username;
}
	//echo "$username";
	$encryptPassword = hash('sha256',$password);
	$queryLogin = mysqli_query($connect, "SELECT * FROM
		users WHERE username = '$username' AND password = '$encryptPassword' ");
	if (mysqli_num_rows($queryLogin)) {
		
		$row = mysqli_fetch_assoc($queryLogin);
		$data =array(
			'message' => "Login Success",
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