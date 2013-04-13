var score = 0;
var numberOfDivsShowing = 5;
var totalNumberOfDivs = 100;
var timeout =3000;
var myButtonId;
var hideDivId;
var showDivId;
var snd;

var mySoundArray = ["drum1.wav","drum2.wav","drum3.wav","drum4.wav","drum5.wav",
"drum6.wav","drum7.wav","drum8.wav","drum9.wav","drum10.wav",
"drum11.wav","drum12.wav","drum13.wav","drum14.wav","drum15.wav",
"drum16.wav"];

var mySoundChoice= mySoundArray[1];

//Generate the divs
for (var i=1;i<totalNumberOfDivs +1 ;i++) 
	{
	  var div = document.createElement("div");
	  div.setAttribute("id","d"+ i);
	  div.style.visibility="hidden";
	  //childNodes[0].nodeValue
	  div.innerHTML = "<img src =\"./images/bonnie50.jpg\" alt = \"picture of cat\"/>";
	  document.getElementById('game_board').appendChild(div);
	}

//Generate an Array of div ids
divIds = []
	for(i=1; i< totalNumberOfDivs +1; i++) 
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
			
		
function clicked(myArg) 
	  {
		score = score + 10;
		document.getElementById(myArg).style.visibility = 'hidden';
		var points = document.getElementById('points');
		//points.innerHTML = ('Your score is: ' + score );
		points.childNodes[0].nodeValue	 = ('Your score is: ' + score );
		
	  }
		 
// Attach Event Handlers

	//Event Hanldler for each clickable div.
for(var i=0;i<totalNumberOfDivs;i++)
   {
	myButtonId = document.getElementById(divIds[i]);
	myButtonId.onclick = function ()
	  {
		playSound(mySoundChoice, 0.5);
		return clicked(this.id);
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



