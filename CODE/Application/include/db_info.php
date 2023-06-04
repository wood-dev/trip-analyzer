<?php				
    $username = "tutorial_user"; 
    $password = "12341234";   
    $host = "mytestdb.cen3rhkl2zlv.us-east-1.rds.amazonaws.com";
    $database="trip.analyzer";    	
	$connection = mysqli_connect($host, $username, $password, $database);    
?>