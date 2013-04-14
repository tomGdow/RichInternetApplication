//The total board
var totalNumberOfDivs = 100;
totalBoardScoreDivs = 50;
totalBoardScoreBonusDivs = 10;
//No need to specify the total number of scoreNegative divs 

//At the Beginning of Game:
var score = 0;
var numberOfScoreDivsShowing = 5; //Cannot be greater than the totalBoardScoreDivs 
var numberOfBonusDivsShowing = 2; //Cannot be greater than the total of BoardHundredPointers 
var numberOfScoreNegativeDivsShowing = 5;  //Cannot be greater than the number of devils on the board
var timeout = 3000;
var counterMinutes = 0;
var counterSeconds = 8;// JavaScript Document
var progressToNextLevelScore = 30