<?php

$localhost = "localhost";
$username = "root";
$password = "";
$dbname = "form";

	// buat koneksi
	$connect = new mysqli($localhost,$username,$password,$dbname);

	// cek koneksi
	if(!$connect)
	{
		die("connection failed : " . mysqli_connect_error());
	}
	else
	{
		echo "Sucsessfully Connected";
	}

?>
