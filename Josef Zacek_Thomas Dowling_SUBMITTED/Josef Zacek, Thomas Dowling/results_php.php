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