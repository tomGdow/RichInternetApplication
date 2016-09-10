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
  <aside>
  <h1>Top 15 results</h1>
    <table>
    <thead>
      <tr>
        <th><b>Position</b></th>
        <th><b>Name</b></th>
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
    <nav>
      <ul>
        <li class="instructions">Instructions</li>
        <li id="instructions">
          <section>
            <p>Purpose of this game is to collect as many points as possible by clicking on randomly apparing game objects.</p>
          </section>
        </li>
        <li class="game_objects">Game objects</li>
        <li id="game_objects">
          <section>
            <img src="images/pig.jpg"  alt="Pig" width="50" height="50"/>
            <img name="" src="images/sheep.jpg" width="50" height="50" alt="Aheep" />
            <img name="" src="images/dog.jpg" width="50" height="50" alt="Dog" />
            <h3>PIG = 10 points</h3>
            <h3>SHEEP = 5 points</h3>
            <h3>DOG = -20 points</h3>
          </section>
        </li>
        <li class="play"><a href="level1">PLAY!</a></li>
        
      </ul>
    </nav>
  </aside>
  

  <video width="700" height="520p" controls>
      <source src="video/movie.mp4" type="video/mp4">
      <source src="video/movie.ogv" type="video/ogg">
      Your browser does not support the video tag.
 </video>

  
  
  <footer>
    <p>Created by <a href="http://tomgdowling.netii.net">Thomas Dowling </a> &amp; <a href="http://www.josefzacek.com">Josef Zacek</a></p>
  </footer>
  
  <script src="javascript/index.js"></script>

