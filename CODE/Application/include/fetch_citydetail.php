<?php
    $c = strval($_GET['c']);
    $q = lcfirst(strval($_GET['q']));

	include 'db_info.php';

    $myquery = "SELECT poi.id as poiId,poi.categories as categories
                     ,poi.name as POIName
                     ,poi.cityid as cityId
                     ,poi.name_suffix as cityName
                     ,ROUND(poi.rating,2) as rating
                     ,poi.rating_local as localRating
                     ,poi.thumbnail_url
                     ,poi.url
                FROM `sygic_poi` poi
                WHERE poi.cityid ='".$q."' and poi.categories like '%".$c."%%'
                 and poi.thumbnail_url is not null order by poi.rating desc, poi.rating_local desc limit 15";

    $query = mysqli_query($connection, $myquery);
    
    if (!$query ) {
        echo mysqli_error();
        die;
    }

    $data = array();

    for ($x = 0; $x < mysqli_num_rows($query); $x++) {
        $data[] = mysqli_fetch_assoc($query);
    }
    mysqli_close($connection);
	echo json_encode($data);
?>