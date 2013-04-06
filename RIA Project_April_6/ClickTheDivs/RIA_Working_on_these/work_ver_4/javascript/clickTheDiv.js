//The total board
var totalNumberOfDivs = 100;
totalBoardTenPointers = 50;
totalBoardHunderdPointers = 10;
//No need to specify the total number of devils

//Play the Game
var score = 0;
var numberOfDivsShowing = 10;
var timeout = 3000;

var myButtonId;
var hideDivId;
var showDivId;
var snd;

var mySoundArray = ["fart-wav-4.wav","drum1.wav","fanfare.wav", "drum2.wav","drum3.wav","drum4.wav","drum5.wav",
"drum6.wav","drum7.wav","drum8.wav","drum9.wav","drum10.wav",
"drum11.wav","drum12.wav","drum13.wav","drum14.wav","drum15.wav",
"drum16.wav"];

var myImageArray =[
"bonnie50.jpg", "devil50.gif", "lotus50.gif"];

var myBonnieSoundChoice = mySoundArray[1];
var myDevilSoundChoice = mySoundArray[0];
var myBonusSoundChoice = mySoundArray[3];

var bonnie = "<img src =\"./images/" + myImageArray[0] + "\" alt = \"Cat\" />"
var theDevil = "<img src =\"./images/" + myImageArray[1] + "\" alt = \"theDevil\" />"
var theBonus = "<img src =\"./images/" + myImageArray[2] + "\" alt = \"Bonus100\" />"

var myDivArray =[];
var myRangeArray =[];
for(i=0; i< 100 ; i++) 
	{
	  myRangeArray.push(i)
	}

//Shuffle the array	
var randArray= myRangeArray.sort(function() { return 0.5 - Math.random();});	

//function divGenerate

function divGenerate (myId, mySrc) {
	var div = document.createElement("div");
	  div.setAttribute("id","d"+ myId);
	  div.style.visibility="visible";
	  //childNodes[0].nodeValue
       div.innerHTML =mySrc;
	   return div;
	
}
//Add the Bonnie divs to myDivArray
for (var i=0;i< totalBoardTenPointers;i++) 
	{
	 var  mydiv = divGenerate(i, bonnie);
	 myDivArray.push(mydiv);
	  
	  
	};
	
	// add bonus divs to myDivArray
	
	for (var i=totalBoardTenPointers; i< totalBoardTenPointers + totalBoardHunderdPointers;i++) 
	{
	 var  mydiv = divGenerate(i, theBonus);
	 myDivArray.push(mydiv);
	  
	  
	};


//Add the devil Divs to myDivArray

for (var i=totalBoardTenPointers + totalBoardHunderdPointers;i<(totalNumberOfDivs);i++) 
	{
	 var  mydiv = divGenerate(i, theDevil);

	 myDivArray.push(mydiv);
	};

//Generate the divs in DOM, randomly arranged
for (var i=0;i<totalNumberOfDivs;i++) {
	
	
	document.getElementById('game_board').appendChild(myDivArray[randArray[i]]);
	
	}
	

//generate an array of div ids
divIds = [];
	for(i=0; i< totalNumberOfDivs; i++) 
	{
	  divIds.push("d"+ i)
	}

//Functions

function playSound(mySource, vol) 
	{
	  snd = new Audio();
	  snd.src = "./sounds/" + mySource;
	  snd.volume = vol || 0.5;
	  snd.play();
	}

function hideDivs() 
	{
	  for (var i=0; i<divIds.length; i++)
	  document.getElementById(divIds[i]).style.visibility = 'hidden';
	}

function showDiv() 
	{
		hideDivs(); //hide them all before we show the next one;
		
		//Generate an array with unique random numbers
			  var arr = [];
			  while(arr.length < numberOfDivsShowing)
				{
					var randomnumber=(Math.ceil(Math.random()*divIds.length)-1)
					var found=false;
					  for(var i=0;i<arr.length;i++)
						  {
						  if(arr[i]==randomnumber){found=true;break}
						  }
				if(!found)arr[arr.length]=randomnumber;
				}
				
			for (var i=0; i< numberOfDivsShowing; i++) 
			{
			  document.getElementById(divIds[arr[i]]).style.visibility = 'visible';
			}
				
		 setTimeout(showDiv,timeout); //set a delay before showing the next div
	  }
			
		
function clickBonnie(myArg) 
	  {
		score = score + 10;
		document.getElementById(myArg).style.visibility = 'hidden';
		var points = document.getElementById('points');
		//points.innerHTML = ('Your score is: ' + score );
		points.childNodes[0].nodeValue	 = ('Your score is: ' + score );
		
		
	  }
	  
function clickTheDevil(myArg) 
	  {
		score = score - 10;
		document.getElementById(myArg).style.visibility = 'hidden';
		var points = document.getElementById('points');
		//points.innerHTML = ('Your score is: ' + score );
		points.childNodes[0].nodeValue	 = ('Your score is: ' + score );
		
		
	  }
	  

 function clickTheBonus(myArg) 
	  {
		score = score + 100;
		document.getElementById(myArg).style.visibility = 'hidden';
		var points = document.getElementById('points');
		//points.innerHTML = ('Your score is: ' + score );
		points.childNodes[0].nodeValue	 = ('Your score is: ' + score );
		
		
	  }
		 
// Attach Event Handlers

	
	//Event Hanldler for each clickable div.
	
for(var i=0;i<totalBoardTenPointers;i++)
   {
	myButtonId = document.getElementById(divIds[i]);
	myButtonId.onclick = function ()
	  {
		playSound(myBonnieSoundChoice, 0.5);
		return clickBonnie(this.id);
	  }
	}
	
for (var i=totalBoardTenPointers + totalBoardHunderdPointers;i<(totalNumberOfDivs);i++) 
   {
	myButtonId = document.getElementById(divIds[i]);
	myButtonId.onclick = function ()
	  {
		playSound(myDevilSoundChoice, 0.5);
		return clickTheDevil(this.id);
	  }
	}
	
for (var i=totalBoardTenPointers; i< totalBoardTenPointers + totalBoardHunderdPointers;i++) 
   {
	myButtonId = document.getElementById(divIds[i]);
	myButtonId.onclick = function ()
	  {
		playSound(myBonusSoundChoice, 0.5);
		return clickTheBonus(this.id);
	  }
	}
	
hideDivId = document.getElementById("hideTheDivs");
	hideDivId.onclick = function () 
	{
		return hideDivs();
	}

showDivId = document.getElementById("showTheDivs");
	showDivId.onclick = function () 
	{
		return showDiv();
	}



