// JavaScript Document


var drum1 = "sounds/drum1.mp3";
var drum2 = "sounds/drum2.mp3";
var drum3 = "sounds/drum3.mp3";
var drum4 = "sounds/drum4.mp3";
var drum5 = "sounds/drum5.mp3";
var drum6 = "sounds/drum6.mp3";
var drum7 = "sounds/drum7.mp3";
var drum8 = "sounds/drum8.mp3";
var drum9 = "sounds/drum9.mp3";
var drum10 = "sounds/drum10.mp3";
var drum11 = "sounds/drum11.mp3";
var drum12 = "sounds/drum12.mp3";
var drum13 = "sounds/drum13.mp3";
var drum14 = "sounds/drum14.mp3";
var drum15 = "sounds/drum15.mp3";
var drum16 = "sounds/drum16.mp3";

function playSound(str, vol) {
  var snd = new Audio();
  snd.src = str;
  snd.volume = vol;
  snd.play();
}
/* returning image position*/
function fade11() 
	{
	setInterval(function(){document.getElementById('drum11').style.backgroundColor='#666'},1000);	
	setInterval(function(){document.getElementById('drum11').style.height="150px"},1000);	
	}

function fade12() 
	{
	setInterval(function(){document.getElementById('drum12').style.backgroundColor='#666'},1000);	
	setInterval(function(){document.getElementById('drum12').style.height="150px"},1000);	
	}

function fade13() 
	{
	setInterval(function(){document.getElementById('drum13').style.backgroundColor='#666'},1000);	
	setInterval(function(){document.getElementById('drum13').style.height="150px"},1000);	
	}
	
function fade14() 
	{
	setInterval(function(){document.getElementById('drum14').style.backgroundColor='#666'},1000);	
	setInterval(function(){document.getElementById('drum14').style.height="150px"},1000);	
	}
	
function fade15() 
	{
	setInterval(function(){document.getElementById('drum15').style.backgroundColor='#666'},1000);	
	setInterval(function(){document.getElementById('drum15').style.height="150px"},1000);	
	}
	
function fade16() 
	{
	setInterval(function(){document.getElementById('drum16').style.backgroundColor='#666'},1000);	
	setInterval(function(){document.getElementById('drum16').style.height="150px"},1000);	
	}

/// single drum javascript
function drum_item1() {
  playSound(drum1, 0.5);
}
function drum_item2() {
  playSound(drum2, 0.5);
}
function drum_item3() {
  playSound(drum3, 0.5);
 
}
function drum_item4() {
  playSound(drum4, 0.5);

}
function drum_item5() {
  playSound(drum5, 0.5);

}
function drum_item6() {
  playSound(drum6, 0.5);
 
}
function drum_item7() {
  playSound(drum7, 0.5);

}
function drum_item8() {
  playSound(drum8, 0.5);
  
}
function drum_item9() {
  playSound(drum9, 0.5);
 
}
function drum_item10() {
  playSound(drum10, 0.5);
 
}
function drum_item11() {
  playSound(drum11, 0.5);
  document.getElementById('drum11').style.backgroundColor="#999";
  document.getElementById('drum11').style.height= "140px";
  fade11()
}
function drum_item12() {
  playSound(drum12, 0.5);
  document.getElementById('drum12').style.backgroundColor="#999";
  document.getElementById('drum12').style.height= "140px";
  fade12()
}
function drum_item13() {
  playSound(drum13, 0.5);
  document.getElementById('drum13').style.backgroundColor="#999";
  document.getElementById('drum13').style.height= "140px";
  fade13()
}
function drum_item14() {
  playSound(drum14, 0.5);
  document.getElementById('drum14').style.backgroundColor="#999";
  document.getElementById('drum14').style.height= "140px";
  fade14()
}
function drum_item15() {
  playSound(drum15, 0.5);
  document.getElementById('drum15').style.backgroundColor="#999";
  document.getElementById('drum15').style.height= "140px";
  fade15()
}
function drum_item16() {
  playSound(drum16, 0.5);
  document.getElementById('drum16').style.backgroundColor="#999";
  document.getElementById('drum16').style.height= "140px";
  fade16()
}

///////////// on key press

document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
	switch (key)
	{
	case 66:
  		drum_item1();
  	break;
	case 68:
  		drum_item2();
  	break;
	case 70:
  		drum_item3();
  	break;
	case 69:
  		drum_item4();
  	break;
	case 82:
  		drum_item5();
  	break;
	case 84:
  		drum_item6();
  	break;
	case 73:
  		drum_item7();
  	break;
	case 74:
  		drum_item8();
  	break;
	case 75:
  		drum_item9();
  	break;
	case 76:
  		drum_item10();
  	break;
	case 80:
  		drum_item11();
  	break;
	case 86:
  		drum_item12();
  	break;
	case 87:
  		drum_item13();
  	break;
	case 88:
  		drum_item14();
  	break;
	case 89:
  		drum_item15();
  	break;
	case 90:
  		drum_item16();
  	break;
	      
    }
}

























