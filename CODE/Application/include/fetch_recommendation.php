<?php
					
	include 'db_info.php';
        
    $myquery = "SELECT c.rank, c.city,m.country_code, m.country_iso, l.lat, l.lng, a.rk as arrivals_rank, r.rk as receipts_rank, s_poi.*, c.country, c.station, ci.*

		FROM `cities` c
		join cities_sygic_mapping m on c.rank = m.city_id 
		join `city_indexes` ci on c.rank = ci.city_id
		join sygic_city_location l on m.sygic_id = l.cityid  
		join `arrivals_processed` a on c.rank = a.id 
		join `receipts_processed` r on c.rank = r.id 
		join 
		(select 
			cityid,
			sum(discovering) as discovering, 
			sum(doing_sports) as sports,
			sum(eating) as eating,
			sum(going_out) as nightlife,
			sum(hiking) as hiking,
			sum(relaxing) as relaxing,
			sum(shopping) as shopping,
			sum(sightseeing) as sightseeing,
			sum(playing) as family
		from `sygic_poi` 
		group by cityid) s_poi on s_poi.cityid = m.sygic_id
		order by c.rank";
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