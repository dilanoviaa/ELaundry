<?php
    include 'db_connect.php'; 
    $nama_pakaian = $_GET['nama_pakaian']; 
    $id_pelaundry    = $_GET['id_pelaundry']; 
    $sql = mysqli_query($connect,"SELECT * FROM jenis_pakaian WHERE id_pelaundry = '$id_pelaundry'");
    $request = mysqli_fetch_assoc($sql);
    if ($nama_pakaian == "pakaian_biasa"){   
        $harga_limajam = $request['harga_pakaian_biasa']*0.5;
        $harga_perhari = $request['harga_pakaian_biasa'];
        $harga_duahari = $request['harga_pakaian_biasa']*1.2;
        $harga_tigahari = $request['harga_pakaian_biasa']*1.3;
        $harga_empathari = $request['harga_pakaian_biasa']*1.4;
    }
    else
    if ($nama_pakaian == "kain_berat"){
        $harga_limajam = $request['harga_pakaian_berat']*0.5;
        $harga_perhari = $request['harga_pakaian_berat'];
        $harga_duahari = $request['harga_pakaian_berat']*1.2;
        $harga_tigahari = $request['harga_pakaian_berat']*1.3;
        $harga_empathari = $request['harga_pakaian_berat']*1.4;
    }
    else
    if ($nama_pakaian == "pakaian_dalam"){
        $harga_limajam = $request['harga_pakaian_dalam']*0.5;
        $harga_perhari = $request['harga_pakaian_dalam'];
        $harga_duahari = $request['harga_pakaian_dalam']*1.2;
        $harga_tigahari = $request['harga_pakaian_dalam']*1.3;
        $harga_empathari = $request['harga_pakaian_dalam']*1.4;
    }

    $data =array(
          'message' => "Data have been recorded",
          'limajam' => $harga_limajam,
          'perhari' => $harga_perhari,
          'duahari' => $harga_duahari,
          'tigahari' => $harga_tigahari,
          'empathari' => $harga_empathari,
          'status' => "200"
    );
    echo json_encode($data);
    $connect->close();
?>