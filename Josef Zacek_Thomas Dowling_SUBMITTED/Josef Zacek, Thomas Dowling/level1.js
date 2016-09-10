// JavaScript Document

$(document).ready(function(){
	
	// start on load

 	countdown();
	ranappear();


	// pass - fail
	var progressToNextLevelScore = 100;
	
	// score 
	
	//$('#points').html(score);

	// pig elements
	$('.a1, .a2').click(function(e) {      
	 	score = score + 10;
	 	$('#points').html(score);
		$(this).hide();
		$(this).show(900);
		pig_sound();
	 });
	 // sheep elements
	 $('.a3, .a4, .a5, .a6, .a7').click(function(e) {      
	 	score = score +5;
	 	$('#points').html(score);
		$(this).hide();
		$(this).show(700);
		sheep_sound();
	 });
	 // dog elements
	 $('.a8, .a9, .a10').click(function(e) {      
	 	score = score - 20;
	 	$('#points').html(score);
		dog_sound();
	 });
	 
	// sounds 
	var pig = "sounds/pig.wav";
	var sheep = "sounds/sheep.wav";
	var dog = "sounds/dog.wav";
	// sound function
	function playSound(str, vol) {
	  var snd = new Audio();
	  snd.src = str;
	  snd.volume = vol;
	  snd.play();
	}
	/// sound functions
	function pig_sound() {
	  playSound(pig, 0.5);
	}
	function sheep_sound() {
	  playSound(sheep, 0.5);
	}
	function dog_sound() {
	  playSound(dog, 0.5); 
	}
	
	 
// random values for position
function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('#game_board').height() - 50;
    var w = $('#game_board').width() - 50;  
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];       
}


// countdown
	function countdown(){
	  var count = 15;
	  countdown = setInterval(function(){
		$("#counter").html(count);
		if (count == 0) {
		   popup_window();
		   clearInterval(countdown);  
		   clearInterval(abcd);   
		}
		count--;
	  }, 1000);
	  
	// random function timing  
	abcd = setInterval(function(){
    ranappear();
	},3000);
	};

	
// popup window

function popup_window(){
	var div = document.getElementById('popup_window').style.display = 'block';
	
	if (score > progressToNextLevelScore) {
	var pop_score = document.getElementById('pass').innerHTML = "Congratulation your score is " + score + " you have passed to the next level";
	var div_bg = document.getElementById('popup_window').style.backgroundImage = "url('images/popup_pass.jpg')";
	
	var myId = document.getElementById("startOver").style.visibility = 'hidden';
	
	}
	else
	{
	var pop_score = document.getElementById('pass').innerHTML = "Sorry your score is " + score + " you need 100 to pass to the next level!";
	var div_bg = document.getElementById('popup_window').style.backgroundImage = "url('images/popup_fail.jpg')";
	
	document.getElementById("nextLevel").style.visibility = 'hidden';
	};	
};	


// random appear yellow
function ranappear(){
	var newp1 = makeNewPosition();
	var newp2 = makeNewPosition();
	var newp3 = makeNewPosition();
	var newp4 = makeNewPosition();
	var newp5 = makeNewPosition();
	var newp6 = makeNewPosition();
	var newp7 = makeNewPosition();
	var newp8 = makeNewPosition();
	var newp9 = makeNewPosition();
    var newp10 = makeNewPosition();
	
	 $('.a1').css({top: newp1[0], left: newp1[1]});
	 $('.a2').css({top: newp2[0], left: newp2[1]});
	
	 $('.a3').css({top: newp3[0], left: newp3[1]});
	 $('.a4').css({top: newp4[0], left: newp4[1]});
	 $('.a5').css({top: newp5[0], left: newp5[1]});
	 $('.a6').css({top: newp6[0], left: newp6[1]});
	 $('.a7').css({top: newp7[0], left: newp7[1]});
	 
	 $('.a8').css({top: newp8[0], left: newp8[1]});
	 $('.a9').css({top: newp9[0], left: newp9[1]});
	 $('.a10').css({top: newp10[0], left: newp10[1]});
};


 // links - pop up window
  $('#nextLevel').on('click', nextLevel);
  $('#startOver').on('click', startOver);
  $('#go_again').on('click', go_again);
	
	function nextLevel(e) {
		e.preventDefault();
		//var page = $(this).attr('href');
		//alert(page);
		$('#wrapper').load('pages/level2.php');
	};
	
	function startOver(e) {
		e.preventDefault();
		//var page = $(this).attr('href');
		//alert(page);
		$('#wrapper').load('pages/level1.php');
	};
	
	function go_again(e) {
		e.preventDefault();
		//var page = $(this).attr('href');
		//alert(page);
		$('#wrapper').load('pages/level1.php');
	};


});



