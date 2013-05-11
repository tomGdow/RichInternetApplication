$(document).ready(function(){
	
	
$("#showTheDivs").click(function(){
	
	//Animate the Pigs

  for( i=50; i< 60; i++) {

	animateTheDiv(i, speedOfPigs)
  }
  
  //Animate the Sheep
  for( i=0; i< 50; i++) {

	animateTheDiv(i, speedOfSheep)
  }
  
  //Animate the Dogs
  for( i=60; i< 99; i++) {

	animateTheDiv(i, speedOfDogs)
  }
  
  
  });
});

function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('#game_board').height() -50;
    var w = $('#game_board').width() -50;  
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];       
};


function animateTheDiv (myId, myTime){
	var temp = '#d' + myId;
    var newqa = makeNewPosition();
    $(temp).animate({ top: newqa[0], left: newqa[1] }, myTime, function(){
     if (doChange!=false) { animateTheDiv(myId, myTime); };        
    }); 
};


