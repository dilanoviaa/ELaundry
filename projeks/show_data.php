<?php
    include 'db_connect.php';  
    $user_id = $_GET['user_id'];
    $sql=mysqli_query($connect,"SELECT * FROM datalaundry");
    if ($sql){
        $row = mysqli_fetch_assoc($sql);
        if (mysql_num_rows($row)){
            $data =array(
                    'message' => "Update password berhasil",
                    'status' => "200"
		    );
        }
        else{
            $data =array(
                    'message' => "Update password berhasil",
                    'status' => "200"
		    );
        }
    } 
    echo json_encode($data);    
    //$connect->close();
?>