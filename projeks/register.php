<?php
    include 'db_connect.php';
      $postdata = file_get_contents("php://input");
      $username="";
      $password="";
      $email="";
      $name="";
      $email="";
      $tanggallahir="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $username = $request->username;
          $password = $request->password;
          $name= $request->name;
          $email=$request->email;
          $tanggallahir=$request->tanggallahir;
          $phone_number=$request->phone_number;
          $address=$request->address;
      }
      $encrypt_password = hash('sha256',$password);
      $sql = mysqli_query($connect,"INSERT INTO users ( username, password, email, name, tanggallahir,phone_number,address)
      VALUES ('$username','$encrypt_password', '$email','$name','$tanggallahir','$phone_number','$address')");
  if($sql){
      $data =array(
          'message' => "Data have been recorded",
          'data' => $request,
          'status' => "200"
      );}
 else {
    echo "Error" .$sql.' '.$connect->connect_error;
    $data =array(
        'message' => "ERROR",
        'status' => "404"
    );
  }
  echo json_encode($data);
?>