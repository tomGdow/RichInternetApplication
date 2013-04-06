//The total board
var totalNumberOfDivs = 100;
totalBoardTenPointers = 50;
totalBoardHunderdPointers = 10;
//No need to specify the total number of devils

//At the Beginning of Game:
var score = 0;
var numberOfBonniesShowing = 5; //Cannot be greater than the totalBoardTenPointers 
var numberOfHundredPointersShowing = 2; //Cannot be greater than the total of BoardHundredPointers 
var numberOfDevilsShowing = 5;  //Cannot be greater than the number of devils on the board
var timeout = 3000;

var myButtonId;
var hideDivId;
var showDivId;
var snd;

var mySoundArray = ["fart-wav-4.wav","drum1.wav","fanfare.wav", "fanfare2.wav","drum2.wav","drum3.wav","drum4.wav","drum5.wav"];

var myImageArray =["bonnie50.jpg", "devil50.gif", "lotus50.gif"];

var myBonnieSoundChoice = mySoundArray[1];
var myDevilSoundChoice = mySoundArray[0];
var myBonusSoundChoice = mySoundArray[3];

var bonnie = "<img src =\"./images/" + myImageArray[0] + "\" alt = \"Cat\" />"
var theDevil = "<img src =\"./images/" + myImageArray[1] + "\" alt = \"theDevil\" />"
var theBonus = "<img src =\"./images/" + myImageArray[2] + "\" alt = \"Bonus100\" />"

var myDivArray =[];
var randArray =randomArraySimple(100,100);

//generate an array of div ids
var divIds = [];
	for(i=0; i< totalNumberOfDivs; i++) 
	{
	  divIds.push("d"+ i)
	}


//var myRangeArray =[];
//for(i=0; i < 100 ; i++) 
//	{
//	  myRangeArray.push(i)
//	}
//var randArray= myRangeArray.sort(function() { return 0.5 - Math.random();});	




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
function showAtStart() 
	{
		randArray =randomArraySimple(100,100);
		domGenerate();//Shuffle the DOM generate divs after each timeout
		hideDivs(); //hide them all before we show the next one;
		
			//Bonnie Images Showing at Start
			 var arr = randomArraySimple(numberOfBonniesShowing, totalBoardTenPointers); //divIds.length
				
			for (var i=0; i< numberOfBonniesShowing; i++) 
			{
			  document.getElementById(divIds[arr[i]]).style.visibility = 'visible';
			}
			//Hundred Pointers showing at the start
			 var arr2 = randomArrayAdvanced(totalBoardHunderdPointers, totalBoardTenPointers, totalBoardHunderdPointers + totalBoardTenPointers ) //divIds.length
				
			for (var i=0; i< numberOfHundredPointersShowing; i++) 
			{
			  document.getElementById(divIds[arr2[i]]).style.visibility = 'visible';
			}
			//Devils showing at the start
			var arr3 = randomArrayAdvanced(totalNumberOfDivs - totalBoardTenPointers -totalBoardHunderdPointers, totalBoardHunderdPointers+totalBoardTenPointers, totalNumberOfDivs ) //divIds.length
				
			for (var i=0; i< numberOfDevilsShowing; i++) 
			{
			  document.getElementById(divIds[arr3[i]]).style.visibility = 'visible';
			}
							
		 setTimeout(showAtStart,timeout); //set a delay before showing the next div
		 
	//if (numberOfDevilsShowing <  totalNumberOfDivs - totalBoardTenPointers - totalBoardHunderdPointers) {numberOfDevilsShowing +=5 
	//}
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
		 
// Attach Event Handlers

	
//Event Hanldler for each clickable div.
	
domGenerate();
	
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
		playSound(myBonusSoundChoice, 0.2);
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
		showAtStart();
	}

// countdown function
    var interval;
    var minutes = 0;
    var seconds = 8;
    window.onload = function() {
        countdown('countdown');
    }

    function countdown(element) {
        interval = setInterval(function() {
            var el = document.getElementById('counter');
            if(seconds == 0) {
                if(minutes == 0) {
                   popup_window(); // call function popup_window                   
                    clearInterval(interval);
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }
            if(minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }
            var second_text = seconds > 1 ? 'seconds' : 'second';
            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
            seconds--;
        }, 1000);
    }
	
	
// popup window

	function popup_window(){
		var div = document.getElementById('popup_window').style.display = 'block';
		
		if (score > 60) {
			var pop_score = document.getElementById('pass').innerHTML = "Congratulation your score is " + score + " you have passed to thenext level";
		}
		else
		{
			var pop_score = document.getElementById('pass').innerHTML = "Sorry your score is " + score + " you have not passed to the next level!";
		};	
	};	
// pass fail function 

		
	



