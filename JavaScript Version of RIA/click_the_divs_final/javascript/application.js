var hideDivId;
var showDivId;
var snd;
var doChange = true; // Used to stop the game (if false)
var interval;

var scoreForSheepClick = 10;
var scoreForDogClick = -20;
var scoreForPigClick = 50;

var soundArray = ["fart-wav-4.wav", "drum1.wav", "sheepBaa.wav","fanfare.wav","fanfare2.wav"];
var imageArray = ["sheep.jpg", "pig.jpg", "dog.jpg"];

var scoreSoundChoice = soundArray[2];
var scoreMinusSoundChoice = soundArray[0];
var scoreBonusSoundChoice = soundArray[4];

var scoreImage = "<img src =\"./images/" + imageArray[0] + "\" alt = \"Sheep image\" />"
var scoreMinusImage = "<img src =\"./images/" + imageArray[2] + "\" alt = \"Pig image\" />"
var scoreBonusImge = "<img src =\"./images/" + imageArray[1] + "\" alt = \"Dog image\" />"

var myDivArray = [];
var randArray = randomArraySimple(100, 100);

//generate an array of div ids
var divIds = [];
  for (i = 0; i < totalNumberOfDivs; i++) {
      divIds.push("d" + i)
  }

//Generate a two-dimensional array of absolute values  (one for each div) 
divsAbsoluteValuesArray = [];
  for (var i = 0; i <= 450; i += 50) {

      for (var j = 0; j <= 450; j += 50) {

          divsAbsoluteValuesArray.push([i, j]);
      }
  }
 
//Generate an an array of (unique) shuffled random numbers
var shuffleArrayOfNumbers = randomArraySimple(100, 100);

//Generate an array of shuffled absolute values (for positioning divs randomly)
var shuffledArrayAbsoluteValues = [];

  for (i = 0; i < 100; i++) {

      shuffledArrayAbsoluteValues.push(divsAbsoluteValuesArray[shuffleArrayOfNumbers[i]]);

  }

//Add the Sheep to myDivArray
for (var i = 0; i < totalNumberOfSheep; i++) {
      var mydiv = divGenerate(i, scoreImage, shuffledArrayAbsoluteValues[i]);
      myDivArray.push(mydiv);
  };

   //add  scoreBonus divs (pig divs)  to myDivArray

for (var i = totalNumberOfSheep; i < totalNumberOfSheep + totalNumberofPigs; i++) {
      var mydiv = divGenerate(i, scoreBonusImge, shuffledArrayAbsoluteValues[i]);
      myDivArray.push(mydiv);
  };

   //Add the scoreMinus Divs (Dog divs)  to myDivArray

for (var i = totalNumberOfSheep + totalNumberofPigs; i < (totalNumberOfDivs); i++) {
      var mydiv = divGenerate(i, scoreMinusImage, shuffledArrayAbsoluteValues[i]);
      myDivArray.push(mydiv);
  };
  var myArr = [];
   //Functions

      function divGenerate(myId, mySrc, myArr) {
          var div = document.createElement("div");
          div.setAttribute("id", "d" + myId);
          div.style.position = 'absolute';
          div.style.left = myArr[1] + 'px';
          div.style.top = myArr[0] + 'px';
          div.style.visibility = "visible";
          //childNodes[0].nodeValue
          div.innerHTML = mySrc;
          return div;
      }

  //Generate the divs in DOM

      function domGenerate() {
          for (var i = 0; i < totalNumberOfDivs; i++) {
              document.getElementById('game_board').appendChild(myDivArray[i]);

          }
      }

      function playSound(mySource, vol) {
          snd = new Audio();
          snd.src = "./sounds/" + mySource;
          snd.volume = vol || 0.5;
          snd.play();
      }

      function hideDivs() {
          for (var i = 0; i < divIds.length; i++)
              document.getElementById(divIds[i]).style.visibility = 'hidden';
      }
  
 function startTheGame()

      {
          if (doChange != false) {

              randArray = randomArraySimple(100, 100);
              domGenerate(); //Shuffle the DOM generate divs after each timeout
              hideDivs(); //hide them all before we show the next one;

              //scoreImages Showing at Start
              var arr = randomArraySimple(numberOfSheepShowing, totalNumberOfSheep); //divIds.length

              for (var i = 0; i < numberOfSheepShowing; i++) {
                  document.getElementById(divIds[arr[i]]).style.visibility = 'visible';
              }
              //Bonus divs showing at the start
              var arr2 = randomArrayAdvanced(totalNumberofPigs, totalNumberOfSheep, totalNumberofPigs + totalNumberOfSheep) //divIds.length

              for (var i = 0; i < numberOfPigsShowing; i++) {
                  document.getElementById(divIds[arr2[i]]).style.visibility = 'visible';
              }
              //scoreNegative divs showing at the start
              var arr3 = randomArrayAdvanced(totalNumberOfDivs - totalNumberOfSheep - totalNumberofPigs, totalNumberofPigs + totalNumberOfSheep, totalNumberOfDivs) //divIds.length

              for (var i = 0; i < numberOfDogsShowing; i++) {
                  document.getElementById(divIds[arr3[i]]).style.visibility = 'visible';
              }
          }
		  	  
      }

  
      function clickToScore(myArg) {
          score = score + scoreForSheepClick;
          document.getElementById(myArg).style.visibility = 'hidden';
          var scoreBox = document.getElementById('scoreBox');
          //points.innerHTML = ('Your score is: ' + score );
          scoreBox.childNodes[0].nodeValue = (score);
		  
		  $('#current_item').css({'background-color':'aqua'}).animate({'background-color':'#F5DEB3'}, 2000);

      }

     
      function clickToScoreMinus(myArg) {
          score = score + scoreForDogClick;
          document.getElementById(myArg).style.visibility = 'hidden';
          var scoreBox = document.getElementById('scoreBox');
          //points.innerHTML = ('Your score is: ' + score );
          scoreBox.childNodes[0].nodeValue = (score);
      }

      
      function clickToScoreBonus(myArg) {
          score = score + scoreForPigClick;
          document.getElementById(myArg).style.visibility = 'hidden';
          var scoreBox = document.getElementById('scoreBox');
          //points.innerHTML = ('Your score is: ' + score );
          scoreBox.childNodes[0].nodeValue = (score);
      }


      function randomArraySimple(pick, arrLen) {
		  
			 //randomArraySimple(5, 10) returns an array of 5 unique random integers between 0 -9
         	 //randomArraySimple(10, 10) returns an array of 10 unique random integers betweeen 0-9
          	//Used to be called tgd AND tgd_random_no_generator_1.js

          var arr = [];
          while (arr.length < pick) {
              var randomnumber = (Math.ceil(Math.random() * arrLen) - 1)
              var found = false;
              for (var i = 0; i < arr.length; i++) {
                  if (arr[i] == randomnumber) {
                      found = true;
                      break
                  }
              }
              if (!found) arr[arr.length] = randomnumber;
          }
          return arr
      }

      function randomArrayAdvanced(pick, mylower, myUpper) {

          //randomArrayAdvanced(5, 5, 10) returns an array of 5 unique random integers between 5 and 9 (!NoTT 10)
          //randomArrayAdvanced(99,1,100) returns an array of 99 unique random integers betweeen 1 and 99 (!NoTT 100)
          //Used to be called tgd_random_array_generator_2.js

          var arr = [];
          var arrLen = myUpper - mylower;
          while (arr.length < pick) {
              var randomnumber = (Math.ceil(Math.random() * arrLen) - 1) + mylower
              var found = false;
              for (var i = 0; i < arr.length; i++) {
                  if (arr[i] == randomnumber) {
                      found = true;
                      break
                  }
              }
              if (!found) arr[arr.length] = randomnumber;
          }
          return arr
      }

// countdown function

  function countdown(element) {
      interval = setInterval(function () {
          var el = document.getElementById('counter');
          if (counterSeconds == 0) {
              if (counterMinutes == 0) {
                  popup_window(); // call function popup_window
                  clearInterval(interval);
                  stopTheGame();
				   hideDivs();
				 
                  return;
              } else {
                  counterMinutes--;
                  counterSeconds = 60;
              }
          }
          if (counterMinutes > 0) {
              var minute_text = counterMinutes + (counterMinutes > 1 ? ' counterMinutes' : ' minute');
          } else {
              var minute_text = '';
          }
          var second_text = counterSeconds > 1 ? 'seconds' : 'second';
          el.innerHTML = "<h2>" + minute_text + ' '  + counterSeconds + ' ' + second_text + ' remaining' + "</h2>";
          counterSeconds--;
      }, 1000);

  }


   // popup window

  function popup_window() {
      var div = document.getElementById('popup_window').style.display = 'block';
	  
	  if (lastLevel) {
		  var pop_score = document.getElementById('pass').innerHTML = "Game Over! <br /> <br />Your Final Score is " + score + "";
		   document.getElementById("nextLevel").style.visibility = 'hidden';
		   
		   stopTheGame();
				   hideDivs();
		  }

     else  if (score > progressToNextLevelScore) {
          var pop_score = document.getElementById('pass').innerHTML = "Congratulations your score is " + score + " <br /><br /> You May Proceed to the Next Level";

          var myId = document.getElementById("startOver").style.visibility = 'hidden';

          var holdScore;
          sessvars.holdScore = score;
      }
	   else {
          var pop_score = document.getElementById('pass').innerHTML = "Sorry your score of " + score + " is not sufficient to progress <br /> <br /> Game Over!";

          document.getElementById("nextLevel").style.visibility = 'hidden';
      };
  };


   //Used to stop the game

  function stopTheGame() {
      doChange = false;
  }

domGenerate();
  
   //Event Hanldler for each clickable div.

  for (var i = 0; i < totalNumberOfSheep; i++) {
      myButtonId = document.getElementById(divIds[i]);
      myButtonId.onclick = function () {
          playSound(scoreSoundChoice, 0.5);
          return clickToScore(this.id);
      }
  }

  for (var i = totalNumberOfSheep + totalNumberofPigs; i < (totalNumberOfDivs); i++) {
      myButtonId = document.getElementById(divIds[i]);
      myButtonId.onclick = function () {
          playSound(scoreMinusSoundChoice, 0.5);
          return clickToScoreMinus(this.id);
      }
  }

  for (var i = totalNumberOfSheep; i < totalNumberOfSheep + totalNumberofPigs; i++) {
      myButtonId = document.getElementById(divIds[i]);
      myButtonId.onclick = function () {
          playSound(scoreBonusSoundChoice, 0.2);
          return clickToScoreBonus(this.id);
      }
  }

  hideDivId = document.getElementById("hideTheDivs");
  hideDivId.onclick = function () {
      return hideDivs();
  }

  showDivId = document.getElementById("showTheDivs");
  showDivId.onclick = function () {
      startTheGame();
	   countdown();
	   setInterval(startTheGame, timeout);

     
  }
  
hideDivs()