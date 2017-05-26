<?php
    include 'db_connect.php';  
    $json_input_data = json_decode(file_get_contents('php://input'), true);
    $user_id= $_GET['user_id'];
    $passw = $json_input_data['passwordLama'];
    $encryptPasswordLama=hash('sha256',$passw);
    $passw = $json_input_data['passwordBaru'];
    $encryptPasswordBaru=hash('sha256',$passw);
    $passw = $json_input_data['passwordBaru_Konfirmasi'];
    $encryptPasswordBaru_Konfirmasi=hash('sha256',$passw);
    $sql=mysqli_query($connect,"SELECT * FROM users WHERE user_id='$user_id'");
    if ($sql) {
            $row=mysqli_fetch_assoc($sql);
            if (!strcmp($encryptPasswordBaru,$encryptPasswordBaru_Konfirmasi) && !strcmp($row['password'],$encryptPasswordLama)){
                if ($encryptPasswordBaru == $encryptPasswordLama){
                   // echo "Error1 " . $sql . ' ' . $connect->connect_error;
                    $data =array(
                        'message' => "Password sama , silahkan ketik kembali",
                        'status' => "404"
                    );
                }
                else{
                    $query = mysqli_query($connect,"UPDATE users SET password='$encryptPasswordBaru' WHERE id='$id'");
                    if ($query){
                        $data =array(
                            'message' => "Update password berhasil",
                            'status' => "200"
		                );
                    }
                    else{
                        $data =array(
                            'message' => "Update password gagal",
                            'status' => "404"
                         );
                    }
                }
            }
        } else {
           // echo "Error1 " . $sql . ' ' . $connect->connect_error;
            $data =array(
                'message' => "Edit Failed huhuhu.... :))",
                'status' => "404"
		    );
        }
        echo json_encode($data);
    //$connect->close();
?>