//The total board
var totalNumberOfDivs = 100;
totalNumberOfSheep = 50;
totalNumberofPigs = 10;
//No need to specify the total number of scoreNegative divs 

//At the Beginning of Game:

var numberOfSheepShowing = 1; //Cannot be greater than totalNumberOfSheep 
var numberOfPigsShowing = 4; //Cannot be greater than totalNumberofPigs
var numberOfDogsShowing = 3;  //Cannot be greater than the number of dogs on the board 
var timeout = 2500;
var counterMinutes = 0;
var counterSeconds = 15;
var progressToNextLevelScore = 150;

var newScore =  sessvars.holdScore;
var score = newScore;
var scoreBox = document.getElementById('scoreBox');
		//points.innerHTML = ('Your score is: ' + score );
		scoreBox.childNodes[0].nodeValue = (score);
		
var speedOfSheep = 5000; // Speed in milliseconds
var speedOfDogs = 4000; // Speed in milliseconds
var speedOfPigs = 4000; //Speed in milliseconds 

var lastLevel = false;