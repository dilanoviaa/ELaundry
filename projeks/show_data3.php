<?php
    include 'db_connect.php';  
    $user_id = $_GET['user_id'];
    $status = "completed";
    $sql=mysqli_query($connect,"SELECT * FROM transaksi WHERE user_id='$user_id' AND status='$status'");
    $result_set = array();
    while($result =mysqli_fetch_assoc($sql)){
        $result_set[]=$result;
    }        
    $data =array(
            'message' => "Update password berhasil",
            'data' => $result_set,
            'status' => "200"
    );
    echo json_encode($data);    
    //$connect->close();
?>