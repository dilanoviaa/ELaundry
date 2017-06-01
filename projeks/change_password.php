<?php
    include 'db_connect.php';  
    $user_id = $_GET['user_id'];
    $postdata = file_get_contents("php://input");

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $encryptPasswordLama=hash('sha256',$request->old_password);
        $encryptPasswordBaru=hash('sha256',$request->password);
        $encryptPasswordBaru_Konfirmasi=hash('sha256',$request->password_confirm);
    }
    if ($encryptPasswordBaru!=$encryptPasswordBaru_Konfirmasi){
         $data =array(
                            'message' => "Update password gagal",
                            'status' => "404"
                         );
    }
    else{
   // $user_id= $_GET['user_id'];
    $sql=mysqli_query($connect,"SELECT * FROM users WHERE user_id='$user_id'");
    if ($sql) {
            $row=mysqli_fetch_assoc($sql);
            $pasw = $row['password'];
            if ($encryptPasswordBaru==$encryptPasswordBaru_Konfirmasi && $pasw==$encryptPasswordLama){
                if ($encryptPasswordBaru==$encryptPasswordLama){
                   // echo "Error1 " . $sql . ' ' . $connect->connect_error;
                    $data =array(
                        'message' => "Password sama , silahkan ketik kembali",
                        'status' => "404",
                    );
                }
                else{
                    $query = mysqli_query($connect,"UPDATE users SET password='$encryptPasswordBaru' WHERE user_id='$user_id'");
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
            $data = array(
                'message' => "Edit Failed",
                'status' => "404"
		    );
        }
    }
    echo json_encode($data);    
    //$connect->close();
?>