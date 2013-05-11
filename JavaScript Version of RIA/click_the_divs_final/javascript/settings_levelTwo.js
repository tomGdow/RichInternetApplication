//The total board
var totalNumberOfDivs = 100;
totalNumberOfSheep = 50;
totalNumberofPigs = 10;
//No need to specify the total number of scoreNegative divs 

//At the Beginning of Game:
var numberOfSheepShowing = 3; //Cannot be greater than totalNumberOfSheep 
var numberOfPigsShowing = 2; //Cannot be greater than totalNumberofPigs
var numberOfDogsShowing = 2;  //Cannot be greater than the number of dogs on the board 
var timeout = 2000;
var counterMinutes = 0;
var counterSeconds = 15;
var progressToNextLevelScore = 100;

var newScore =  sessvars.holdScore;

var score = newScore;
 
var scoreBox = document.getElementById('scoreBox');
	scoreBox.childNodes[0].nodeValue	 = score;
	
var speedOfSheep = 5000; // Speed in milliseconds
var speedOfDogs = 4000; // Speed in milliseconds
speedOfPigs = 3000; //Speed in milliseconds 


var lastLevel = false;