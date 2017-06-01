<?php
    include 'db_connect.php';  
    $id_barang=$_GET['id_barang'];
    $sql = mysqli_query($connect,"SELECT * FROM datalaundry WHERE id_barang = '$id_barang'");
    $request = mysqli_fetch_assoc($sql);
    $data =array(
          'message' => "Data have been recorded",
          'data' => $request,
          'status' => "200"
    );
    echo json_encode($data);
    $connect->close();
?>