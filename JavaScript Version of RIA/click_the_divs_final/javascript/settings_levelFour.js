
//The total board
var totalNumberOfDivs = 100;
totalNumberOfSheep = 50;
totalNumberofPigs = 10;
//No need to specify the total number of scoreNegative divs 

//At the Beginning of Game:

var numberOfSheepShowing = 3; //Cannot be greater than totalNumberOfSheep 
var numberOfPigsShowing = 3; //Cannot be greater than totalNumberofPigs
var numberOfDogsShowing = 5;  //Cannot be greater than the number of dogs on the board 
var timeout = 3000;
var counterMinutes = 0;
var counterSeconds = 15;// JavaScript Document
var progressToNextLevelScore = 200;

var newScore =  sessvars.holdScore;

var score = newScore;
 
var scoreBox = document.getElementById('scoreBox');
		//points.innerHTML = ('Your score is: ' + score );
		scoreBox.childNodes[0].nodeValue	 = (score);
		
var speedOfSheep = 3000; // Speed in milliseconds
var speedOfDogs = 3000; // Speed in milliseconds
var speedOfPigs = 3000; //Speed in milliseconds 

var lastLevel = false;
		
		
var lastLevel = true;