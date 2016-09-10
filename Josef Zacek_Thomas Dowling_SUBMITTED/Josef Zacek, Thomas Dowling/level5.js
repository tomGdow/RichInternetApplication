// JavaScript Document

$(document).ready(function(){
	
	// start on load
	a1(), a2(), a3(), a4(), a5(), a6(), a7(), a8(), a9(), a10();
 	countdown();
	fadeoutin();
	
	
	var progressToNextLevelScore = 500;
	
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
function a3(){
    var newqa = makeNewPosition();
    $('.a3').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a3();        
    }); 
};
function a4(){
    var newqa = makeNewPosition();
    $('.a4').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a4();        
    }); 
};
function a5(){
    var newqa = makeNewPosition();
    $('.a5').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a5();        
    }); 
};
function a6(){
    var newqa = makeNewPosition();
    $('.a6').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a6();        
    }); 
};function a6(){
    var newqa = makeNewPosition();
    $('.a6').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a6();        
    }); 
};
function a7(){
    var newqa = makeNewPosition();
    $('.a7').animate({ top: newqa[0], left: newqa[1] }, 3000, function(){
      a7();        
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
			$('.a3').stop();
			$('.a4').stop();
			$('.a5').stop();
			$('.a6').stop();
			$('.a7').stop(); 
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
	var pop_score = document.getElementById('pass').innerHTML = "Congratulation your score is " + score + " you have passed this level";
	var div_bg = document.getElementById('popup_window').style.backgroundImage = "url('images/popup_pass.jpg')";
	
	var myId = document.getElementById("startOver").style.visibility = 'hidden';
	
	}
	else
	{
	var pop_score = document.getElementById('pass').innerHTML = "Sorry your score is " + score + " you have not passed this level!";
	var div_bg = document.getElementById('popup_window').style.backgroundImage = "url('images/popup_fail.jpg')";
	
	document.getElementById("nextLevel").style.visibility = 'hidden';
	};	
};	


// random appear yellow
function fadeoutin(){
	
	 $('.a1').fadeOut(2000).fadeIn(800);
	 $('.a2').fadeOut(1000).fadeIn(4000);
	 $('.a3').fadeOut(1500).fadeIn(1300);
	 $('.a4').fadeOut(4000).fadeIn(1400);
	 $('.a5').fadeOut(3500).fadeIn(1200);
	 $('.a6').fadeOut(2000).fadeIn(1500);
	 $('.a7').fadeOut(4500).fadeIn(2600);
};


// links - pop up window
  $('#nextLevel').on('click', nextLevel);
  $('#startOver').on('click', startOver);
	
	function nextLevel(e) {
		e.preventDefault();
		//var page = $(this).attr('href');
		//alert(page);
		$('#wrapper').load('pages/score.php');
	};
	
	function startOver(e) {
		e.preventDefault();
		//var page = $(this).attr('href');
		//alert(page);
		$('#wrapper').load('pages/level5.php');
	};

});



