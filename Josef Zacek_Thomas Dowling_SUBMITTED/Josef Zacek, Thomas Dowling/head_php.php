<?php
//connection to database
$link = mysql_connect("localhost", "root", "");
mysql_select_db("ria_project", $link);

// displaying data from database
$result = mysql_query("SELECT * FROM `users` order by score DESC Limit 15", $link);

// getting number of entries
$num_rows = mysql_num_rows($result);
// row number
$num_rows = 1;


// displaying data from database
$number_entries = mysql_query("SELECT * FROM users", $link);

// getting number of entries
$num_entries = mysql_num_rows($number_entries);


// checking if name field is not empty
if (isset($_POST["name"]) && !empty($_POST["name"])) {
$name = $_POST['name'];
$score = $_POST['score']; 
   
//inserting data into database
	$order = "INSERT INTO users
			(name, score, time)
			VALUES
			('$name',
			'$score',
			now())";  

//declare in the order variable
$resuls = mysql_query($order);	//order executes
if($resuls){
	header("Location: index.php");  
	//$message = 'Data inserted inta database';
} else{
	echo("<br>Input data failed");
}
}else{  
    $message = 'Please input your name';
}

mysql_close($link);
?>