//The total board
var totalNumberOfDivs = 100;
//Used to be totalBoardTenPointers
totalBoardScoreDivs = 50;

//used to be totalBoardHunderdPointers 
totalBoardScoreBonusDivs = 10;
//No need to specify the total number of scoreNegative divs 

//At the Beginning of Game:
var score = 0;
//used to be numberOfBonniesShowing 
var numberOfScoreDivsShowing = 20; //Cannot be greater than the totalBoardScoreDivs 
//Used to be numberOfHundredPointersShowing
var numberOfBonusDivsShowing = 2; //Cannot be greater than the total of BoardHundredPointers 
//Used to be numberOfScoreNegativeDivsShowing
var numberOfScoreNegativeDivsShowing = 5;  //Cannot be greater than the number of devils on the board
var timeout = 3000;

var myButtonId;
var hideDivId;
var showDivId;
var snd;
var doChange = true; // Used to stop the game (if false)

//Countfunction
var interval;
//Used to be minutes 
var counterMinutes = 0;
var counterSeconds = 8;
	
//used to be mySoundArray
var soundArray = ["fart-wav-4.wav","drum1.wav","fanfare.wav", "fanfare2.wav","sheepBaa.wav", "drum2.wav","drum3.wav"];

//used to be myImageArray
var imageArray =["bonnie50.jpg", "devil50.gif", "lotus50.gif","mySheep50.jpg","ram50.jpg"];

//Used to be myBonnieSoundChoice
var scoreSoundChoice = soundArray[1];
//Used to be myDevilSoundChoice
var scoreMinusSoundChoice = soundArray[0];
//Used to be myBonusSoundChoice
var scoreBonusSoundChoice = soundArray[4];

//Used to be bonnie
var scoreImage = "<img src =\"./images/" + imageArray[0] + "\" alt = \"Cat\" />"

//Used to be theDevil
var scoreMinusImage = "<img src =\"./images/" + imageArray[4] + "\" alt = \"scoreMinusImage\" />"

//Used to be theBonus
var scoreBonusImge = "<img src =\"./images/" + imageArray[3] + "\" alt = \"Bonus100\" />"

var myDivArray =[];
var randArray =randomArraySimple(100,100);

//generate an array of div ids
var divIds = [];
	for(i=0; i< totalNumberOfDivs; i++) 
	{
	  divIds.push("d"+ i)
	}


//Add the score  divs to myDivArray
for (var i=0;i< totalBoardScoreDivs;i++) 
	{
	 var  mydiv = divGenerate(i, scoreImage);
	 myDivArray.push(mydiv);
	  	};
	
// add scoreBonus divs to myDivArray
	
	for (var i=totalBoardScoreDivs; i< totalBoardScoreDivs + totalBoardScoreBonusDivs;i++) 
	{
	 var  mydiv = divGenerate(i, scoreBonusImge);
	 myDivArray.push(mydiv);
	  	};

//Add the scoreMinus Divs to myDivArray

for (var i=totalBoardScoreDivs + totalBoardScoreBonusDivs;i<(totalNumberOfDivs);i++) 
	{
	 var  mydiv = divGenerate(i, scoreMinusImage);
	 myDivArray.push(mydiv);
	};

//Functions
function divGenerate (myId, mySrc) 
		{
	var div = document.createElement("div");
	  div.setAttribute("id","d"+ myId);
	  div.style.visibility="visible";
	  //childNodes[0].nodeValue
       div.innerHTML =mySrc;
	   return div;
		}

//Generate the divs in DOM
function domGenerate ()
	{
	for (var i=0;i<totalNumberOfDivs;i++)
	 {
		 document.getElementById('game_board').appendChild(myDivArray[randArray[i]]);
	
		}
	}

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
//At start of game ... 
//Used to be called showDiv
//Used to be called showAtStart
function startTheGame() 

	{
		 if (doChange!=false) {

		randArray =randomArraySimple(100,100);
		domGenerate();//Shuffle the DOM generate divs after each timeout
		hideDivs(); //hide them all before we show the next one;
		
			//scoreImages Showing at Start
			 var arr = randomArraySimple(numberOfScoreDivsShowing, totalBoardScoreDivs); //divIds.length
				
			for (var i=0; i< numberOfScoreDivsShowing; i++) 
			{
			  document.getElementById(divIds[arr[i]]).style.visibility = 'visible';
			}
			//Bonus divs showing at the start
			 var arr2 = randomArrayAdvanced(totalBoardScoreBonusDivs, totalBoardScoreDivs, totalBoardScoreBonusDivs + totalBoardScoreDivs ) //divIds.length
				
			for (var i=0; i< numberOfBonusDivsShowing; i++) 
			{
			  document.getElementById(divIds[arr2[i]]).style.visibility = 'visible';
			}
			//scoreNegative divs showing at the start
			var arr3 = randomArrayAdvanced(totalNumberOfDivs - totalBoardScoreDivs -totalBoardScoreBonusDivs, totalBoardScoreBonusDivs+totalBoardScoreDivs, totalNumberOfDivs ) //divIds.length
				
			for (var i=0; i< numberOfScoreNegativeDivsShowing; i++) 
			{
			  document.getElementById(divIds[arr3[i]]).style.visibility = 'visible';
			}
							
		 setTimeout(startTheGame,timeout); //set a delay before showing the next div
		 
		 countdown('countdown'); 
		 		
		 }
	}
		
//Used to be called clickBonnie  	
	
function clickToScore(myArg) 
	  {
		score = score + 10;
		document.getElementById(myArg).style.visibility = 'hidden';
		var points = document.getElementById('points');
		//points.innerHTML = ('Your score is: ' + score );
		points.childNodes[0].nodeValue	 = ('Your score is: ' + score );
			  }

//Used to be called clickTheDevil  
function clickToScoreMinus(myArg) 
	  {
		score = score - 10;
		document.getElementById(myArg).style.visibility = 'hidden';
		var points = document.getElementById('points');
		//points.innerHTML = ('Your score is: ' + score );
		points.childNodes[0].nodeValue	 = ('Your score is: ' + score );
			  }
	  
//Used to be called clickTheBonus
 function clickToScoreBonus(myArg) 
	  {
		score = score + 20;
		document.getElementById(myArg).style.visibility = 'hidden';
		var points = document.getElementById('points');
		//points.innerHTML = ('Your score is: ' + score );
		points.childNodes[0].nodeValue	 = ('Your score is: ' + score );
			  }
	  
	  
function randomArraySimple(pick, arrLen) {
	
	//randomArraySimple(5, 10) returns an array of 5 unique random integers between 0 -9
	//randomArraySimple(10, 10) returns an array of 10 unique random integers betweeen 0-9 
	//Used to be called tgd AND tgd_random_no_generator_1.js
	
				  var arr = [];
			  while(arr.length < pick)
				{
					var randomnumber=(Math.ceil(Math.random()*arrLen)-1) 
					var found=false;
					  for(var i=0;i<arr.length;i++)
						  {
						  if(arr[i]==randomnumber){found=true;break}
						  }
				if(!found)arr[arr.length]=randomnumber;
				}
				return arr}
				
function randomArrayAdvanced(pick, mylower, myUpper) {
	
	//randomArrayAdvanced(5, 5, 10) returns an array of 5 unique random integers between 5 and 9 (!NoTT 10)
	//randomArrayAdvanced(99,1,100) returns an array of 99 unique random integers betweeen 1 and 99 (!NoTT 100)
	//Used to be called tgd_random_array_generator_2.js
	
				  var arr = [];
				  var arrLen =  myUpper - mylower;
			  while(arr.length < pick)
				{
					var randomnumber=(Math.ceil(Math.random()*arrLen)-1) + mylower
					var found=false;
					  for(var i=0;i<arr.length;i++)
						  {
						  if(arr[i]==randomnumber){found=true;break}
						  }
				if(!found)arr[arr.length]=randomnumber;
				}
				return arr}
		 
// countdown function

    function countdown(element) {
        interval = setInterval(function() {
            var el = document.getElementById('counter');
            if(counterSeconds == 0) {
                if(counterMinutes == 0) {
                   popup_window(); // call function popup_window                   
                    clearInterval(interval);
					 stopTheGame();
                    return;
                } else {
                    counterMinutes--;
                    counterSeconds = 60;
                }
            }
            if(counterMinutes > 0) {
                var minute_text = counterMinutes + (counterMinutes > 1 ? ' counterMinutes' : ' minute');
            } else {
                var minute_text = '';
            }
            var second_text = counterSeconds > 1 ? 'counterSeconds' : 'second';
            el.innerHTML = minute_text + ' ' + counterSeconds + ' ' + second_text + ' remaining';
            counterSeconds--;
        }, 1000);
	
 }
	
	
// popup window

function popup_window(){
		var div = document.getElementById('popup_window').style.display = 'block';
		
		if (score > 60) {
			var pop_score = document.getElementById('pass').innerHTML = "Congratulation your score is " + score + " you have passed to the next level";
			
			document.getElementById("startOver").style.visibility = 'hidden';
		}
		else
		{
			var pop_score = document.getElementById('pass').innerHTML = "Sorry your score is " + score + " you have not passed to the next level!";
			
			document.getElementById("nextLevel").style.visibility = 'hidden';
		};	
	};	
	

//Used to stop the game 
function stopTheGame() {
  doChange = false;
}
	
//Event Hanldler for each clickable div.
	
domGenerate();
	
for(var i=0;i<totalBoardScoreDivs;i++)
   {
	myButtonId = document.getElementById(divIds[i]);
	myButtonId.onclick = function ()
	  {
		playSound(scoreSoundChoice, 0.5);
		return clickToScore(this.id);
	  }
	}
	
for (var i=totalBoardScoreDivs + totalBoardScoreBonusDivs;i<(totalNumberOfDivs);i++) 
   {
	myButtonId = document.getElementById(divIds[i]);
	myButtonId.onclick = function ()
	  {
		playSound(scoreMinusSoundChoice, 0.5);
		return clickToScoreMinus(this.id);
	  }
	}
	
for (var i=totalBoardScoreDivs; i< totalBoardScoreDivs + totalBoardScoreBonusDivs;i++) 
   {
	myButtonId = document.getElementById(divIds[i]);
	myButtonId.onclick = function ()
	  {
		playSound(scoreBonusSoundChoice, 0.2);
		return clickToScoreBonus(this.id);
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
		startTheGame();
		//return   countdown('countdown');
	}


// pass fail function 

		
	



