//The total board
var totalNumberOfDivs = 100;
totalNumberOfSheep = 50;
totalNumberofPigs = 10;
//No need to specify the total number of scoreNegative (Dogs) divs 

//At the Beginning of Game:
var score = 0;
var numberOfSheepShowing = 3; //Cannot be greater than totalNumberOfSheep 
var numberOfPigsShowing = 1; //Cannot be greater than totalNumberofPigs
var numberOfDogsShowing = 3;  //Cannot be greater than the number of dogs on the board 
var timeout = 2000;
var counterMinutes = 0;
var counterSeconds = 15;
var progressToNextLevelScore = 50;

var speedOfSheep = 5000; // Speed in milliseconds
var speedOfDogs = 3000; // Speed in milliseconds
var speedOfPigs = 2000; //Speed in milliseconds 

var lastLevel = false;