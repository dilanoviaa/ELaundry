<?php
    include 'db_connect.php';  
    //update_profil.php?id=
    $user_id = $_GET['user_id'];
    $id_pelaundry = $_GET['id_pelaundry'];
    $json_input_data=json_decode(file_get_contents('php://input'), true);
    $opsi=$json_input_data['opsi'];
    $tes = mysqli_query($connect,"SELECT * FROM transaksi WHERE id_pelaundry='$id_pelaundry'");
    if (!$tes){
      $query = mysqli_query($connect,"SELECT * FROM datalaundry WHERE id_pelaundry='$id_pelaundry'");
      $row = mysqli_fetch_assoc($query);
      if ($opsi == 1){
        $jenis_layanan = "Waktu 5 jam dengan harga " . (string)$row['harga_limajam'] . "/kg";
      }
      else
      if ($opsi == 2){
        $jenis_layanan = "Waktu 1 hari dengan harga " . (string)$row['harga_satuhari'] . "/kg";
      }
      else
      if ($opsi == 3){
        $jenis_layanan = "Waktu 2 hari dengan harga " . (string)$row['harga_duahari'] . "/kg";
      }
      else
      if ($opsi == 4){
        $jenis_layanan = "Waktu 3 hari dengan harga " . (string)$row['harga_tigahari'] . "/kg";
      }
      else
      if ($opsi == 5){
        $jenis_layanan = "Waktu 4 hari dengan harga " . (string)$row['harga_empathari'] . "/kg";
      }
      $namatoko = $row['NamaToko'];
      $sql = mysqli_query($connect,"INSERT INTO transaksi (NamaToko,id_transaksi,user_id,id_pelaundry,berat,status,jenis_layanan,harga_final) VALUES ('$namatoko','','$user_id','$id_pelaundry','','inprogress','$jenis_layanan','')");
      if ($sql){
        $data =array(
              'message' => "Data have been recorded",
              'status' => "200"
        );
      }
    }
    else{
      $data =array(
              'message' => "Add item failed",
              'status' => "404"
        );
    }
    echo json_encode($data);
    $connect->close();
?>