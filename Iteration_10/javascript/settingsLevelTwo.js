//The total board
var totalNumberOfDivs = 100;
totalBoardScoreDivs = 50;
totalBoardScoreBonusDivs = 10;
//No need to specify the total number of scoreNegative divs 

//At the Beginning of Game:
var numberOfScoreDivsShowing = 10; //Cannot be greater than the totalBoardScoreDivs 
var numberOfBonusDivsShowing = 3; //Cannot be greater than the total of BoardHundredPointers 
var numberOfScoreNegativeDivsShowing = 5;  //Cannot be greater than the number of devils on the board
var timeout = 2000;
var counterMinutes = 0;
var counterSeconds = 12;// JavaScript Document
var progressToNextLevelScore = 100;

var newScore =  sessvars.holdScore;

var score = newScore;
 
var scoreBox = document.getElementById('scoreBox');
	scoreBox.childNodes[0].nodeValue	 = score;