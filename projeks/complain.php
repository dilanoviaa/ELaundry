<?php
    include 'db_connect.php';  
    $id_pelaundry = $_GET['id_pelaundry'];
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $komplain = $request->komplain;
        $sql=mysqli_query($connect,"UPDATE transaksi SET status='komplain',komplain = '$komplain' WHERE id_pelaundry='$id_pelaundry'");
        if ($sql){
            $data =array(
                    'message' => "Update password berhasil",
                    'status' => "200"
            );
        }
        else {
            $data =array(
                    'message' => "kompalin gagal",
                    'status' => "404"
            );
        }
    }
    else{
        $data =array(
                'message' => "kompalin gagal",
                'status' => "404"
        );
    }
    echo json_encode($data);    
    //$connect->close();
?>