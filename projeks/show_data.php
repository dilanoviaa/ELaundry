<?php
    include 'db_connect.php';  
    $sql=mysqli_query($connect,"SELECT * FROM datalaundry");
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