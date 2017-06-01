<?php
	include 'db_connect.php';
    $user_id = $_GET['user_id'];
    $postdata = file_get_contents("php://input");

if (isset($postdata)) {
    $request = json_decode($postdata);
    $name = $request->name;
    $username = $request->username;
    $email = $request->email;
    $phone_number = $request->phone_number;
    $address = $request->address;
}


    //echo " $json_input_data['name']";
    $sql = mysqli_query($connect,"UPDATE users SET username='$username',email='$email',name='$name',address='$address', phone_number='$phone_number' WHERE user_id='$user_id'");
    if ($sql) {
        		//$row = mysqli_fetch_assoc($sql);
        $data =array(
			'message' => "Edit Success hehehe.... :))",
			'status' => "200"
		);
        } else {
           // echo "Error1 " . $sql . ' ' . $connect->connect_error;
            $data =array(
			'message' => "Edit Failed huhuhu.... :))",
			'status' => "404"
		);
        }
        echo json_encode($data);
    $connect->close();
?>