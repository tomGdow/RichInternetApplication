// JavaScript Document

$(document).ready(function(){
	
	// start on load
	a1(), a2(), a8(), a9(), a10();
 	countdown();
	ranappear();
	
	
	var progressToNextLevelScore = 400;
	
	// score 
	
	$('#points').html(score);

	// pig elements
	$('.a1, .a2').click(function(e) {      
	 	score = score + 10;
	 	$('#points').html(score);
		$(this).hide();
		$(this).show(600);
		pig_sound();
	 });
	 // sheep elements
	 $('.a3, .a4, .a5, .a6, .a7').click(function(e) {      
	 	score = score + 5;
	 	$('#points').html(score);
		$(this).hide();
		$(this).show(300);
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

// animate div red
function a1(){
    var newqa = makeNewPosition();
    $('.a1').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a1();        
    }); 
};
function a2(){
    var newqa = makeNewPosition();
    $('.a2').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a2();        
    }); 
};

function a8(){
    var newqa = makeNewPosition();
    $('.a8').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a8();        
    }); 
};
function a9(){
    var newqa = makeNewPosition();
    $('.a9').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a9();        
    }); 
};
function a10(){
    var newqa = makeNewPosition();
    $('.a10').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a10();        
    }); 
};


// countdown
	function countdown(){
	  var count = 15;
	  countdown = setInterval(function(){
		$("#counter").html(count);
		if (count == 0) {
		   popup_window();
		   clearInterval(countdown);  
		   clearInterval(abcd);  
		    $('.a1').stop(); 
			$('.a2').stop(); 
			$('.a8').stop(); 
			$('.a9').stop(); 
			$('.a10').stop();  
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
	var pop_score = document.getElementById('pass').innerHTML = "Sorry your score is " + score + " you have not passed to the next level!";
	var div_bg = document.getElementById('popup_window').style.backgroundImage = "url('images/popup_fail.jpg')";
	
	document.getElementById("nextLevel").style.visibility = 'hidden';
	};	
};	


// random appear yellow
function ranappear(){
	
	var newp3 = makeNewPosition();
	var newp4 = makeNewPosition();
	var newp5 = makeNewPosition();
	var newp6 = makeNewPosition();
	var newp7 = makeNewPosition();
	
	 $('.a3').css({top: newp3[0], left: newp3[1]}).fadeOut(2000).fadeIn(800);;
	 $('.a4').css({top: newp4[0], left: newp4[1]});
	 $('.a5').css({top: newp5[0], left: newp5[1]});
	 $('.a6').css({top: newp6[0], left: newp6[1]}).fadeOut(3000).fadeIn(500);;
	 $('.a7').css({top: newp7[0], left: newp7[1]});
	 
};

// links - pop up window
  $('#nextLevel').on('click', nextLevel);
  $('#startOver').on('click', startOver);
	
	function nextLevel(e) {
		e.preventDefault();
		//var page = $(this).attr('href');
		//alert(page);
		$('#wrapper').load('pages/level5.php');
	};
	
	function startOver(e) {
		e.preventDefault();
		//var page = $(this).attr('href');
		//alert(page);
		$('#wrapper').load('pages/level4.php');
	};




});



