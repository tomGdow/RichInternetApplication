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
	header("Location: ../index.php");  
	//$message = 'Data inserted inta database';
} else{
	echo("<br>Input data failed");
}
}else{  
    $message = 'Please input your name';
}

mysql_close($link);
?>


  <div class="sandbox fixed">
      <div id="animateTest" class="animated">
          <img src="images/score_logo.png" width="500" height="70" >
      </div>
  </div>

<section id="input_form">

<h1>Your score is</h1>
  
  <div id="score_div">
  	<h1 id="points"><span id ="scoreBox">0</span></h1>
  </div>

 
    
  <form  action="pages/score.php" method="post">
     <p><?php echo $message; ?></p>
    <input type="text" name="name" required autofocus />
    <input type="hidden" name="score" id="score_field" />
   <br/>
   <br/>
    <input type="submit" value="Submit your result" onClick="SubmitScore()"/>
  </form>
</section>

<section id="results_table">
 <h1>Top 15 results</h1>
    <table>
    <thead>
      <tr>
        <td><b>Position</b></td>
        <td><b>Name</b></td>
        <th>Score</th>
      </tr>
     </thead>
      <?php
	
while($row = mysql_fetch_array($result))
	  {
	  echo "<tr>";
	  echo "<td><b>" . $num_rows . "</b></td>";
	  echo "<td><b>" . $row['name'] . "</b></td>";
	  echo "<th>" . $row['score'] . "</th>";
	  echo "</tr>";
	 
  $num_rows++;
}

?>
    </table>
    <p>Total number of records in database is  <?php echo $num_entries ?></p>
</section>

<footer>
    <p>Created by <a href="http://tomgdowling.netii.net">Thomas Dowling</a> &amp; <a href="http://www.josefzacek.com">Josef Zacek</a></p>
</footer>

<script src="javascript/index.js" type="text/javascript"></script>


<script type="text/javascript">

	$('#points').html(score);


	// submit score 
	function SubmitScore(){
		// insert value into hidden field
		var field = document.getElementById("score_field").value = score;
	}; 
	
</script>

</body>
</html>
