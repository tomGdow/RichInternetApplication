

var myArray = ["drum1.wav","drum2.wav","drum3.wav","drum4.wav","drum5.wav",
"drum6.wav","drum7.wav","drum8.wav","drum9.wav","drum10.wav",
"drum11.wav","drum12.wav","drum13.wav","drum14.wav","drum15.wav",
"drum16.wav"];

myArray2=["drum1.mp3","drum2.mp3","drum3.mp3","drum4.mp3","drum5.mp3",
"drum6.mp3","drum7.mp3","drum8.mp3","drum9.mp3","drum10.mp3",
"drum11.mp3","drum12.mp3","drum13.mp3","drum14.mp3","drum15.mp3",
"drum16.mp3"];

myArray3= ["drum1.ogg","drum2.wav"];
myArray4 =["drum1.wma","drum2.wav"]

var snd;


	function playSound(mySource, vol) 
	  {
	  snd = new Audio();
	  snd.src = "./sounds/" + mySource;
	  snd.volume = vol || 0.5;
	  snd.play();
	  }


//Attach Event Handler Function (Mouse click only) 
	function shoot(id, arrIndex, vol)
	
	  {
		var getTheId = document.getElementById(id);
		
		getTheId.onclick = function () 
		
		  {
			return playSound(myArray[arrIndex], vol||0.5);
		  }
	
	  }
	
	
	
	  
//Press keys to play note script 

document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
	switch (key)
	{
	case 66:
	playSound(myArray[0]);
  		  	break;
	case 68:
  		playSound(myArray[1]);
  	break;
	case 70:
  		playSound(myArray[2]);
  	break;
	case 69:
  		playSound(myArray[3]);
  	break;
	case 82:
  		playSound(myArray[4]);
  	break;
	case 84:
  		playSound(myArray[5]);
  	break;
	case 73:
  		playSound(myArray[6]);
  	break;
	case 74:
  		playSound(myArray[7]);
  	break;
	case 75:
  		playSound(myArray[8]);
  	break;
	case 76:
  		playSound(myArray[9]);
  	break;
	case 80:
  		playSound(myArray[10]);
  	break;
	case 86:
  		playSound(myArray[11]);
  	break;
	case 87:
  		playSound(myArray[12]);
  	break;
	case 88:
  		playSound(myArray[13]);
  	break;
	case 89:
  		playSound(myArray[14]);
  	break;
	case 90:
  		playSound(myArray[15]);
  	break;
	      
    }
}


shoot("drumId1",0);
shoot("drumId2",1);
shoot("drumId3",2);
shoot("drumId4",3);
shoot("drumId5",4);
shoot("drumId6",5);
shoot("drumId7",6);
shoot("drumId8",7);

shoot("drumId9",8);
shoot("drumId10",9);
shoot("drumId11",10);
shoot("drumId12",11);

shoot("drumId13",12);
shoot("drumId14",13);
shoot("drumId15",14);
shoot("drumId16",15);















