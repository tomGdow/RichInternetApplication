// JavaScript Document

divs = ['d1','d2','d3','d4','d5','d6','d7','d8','d9','d10',
		'd11','d12','d13','d14','d15','d16','d17','d18','d19','d20',
		'd21','d22','d23','d24','d25','d26','d27','d28','d29','d30',
		'd31','d32','d33','d34','d35','d36','d37','d38','d39','d40',
		'd41','d42','d43','d44','d45','d46','d47','d48','d49','d50',
		'd51','d52','d53','d54','d55','d56','d57','d58','d59','d60',
		'd61','d62','d63','d64','d65','d66','d67','d68','d69','d70',
		'd71','d72','d73','d74','d75','d76','d77','d78','d79','d80',
		'd81','d82','d83','d84','d85','d86','d87','d88','d89','d90',
		'd91','d92','d93','d94','d95','d96','d97','d98','d99','d100'];

function hideDivs() {
    for (var i=0; i<divs.length; i++)
    document.getElementById(divs[i]).style.visibility = 'hidden';
    //document.getElementById(divs[i]).style.backgroundColor = '#999';
}

function showDiv() {
    hideDivs(); //hide them all before we show the next one.
    var randomDiv = divs[Math.floor(Math.random()*divs.length)];
    var div = document.getElementById(randomDiv).style.visibility = 'visible';
    //var div = document.getElementById(randomDiv).style.backgroundColor = '#ccc';
setTimeout(showDiv,3000); //set a delay before showing the next div
}

var score = 0;
function countdown () {
	for (var i=0; i<divs.length; i++)
    document.getElementById(divs[i]).style.visibility = 'visible';
	result(score)	
}

// counting score

function clicked() {
	score += 10;
	var points = document.getElementById('points')
	points.innerHTML = ('Your score is: ' + score );
	
	if (score == 50) { 
		countdown();
		}
		
}

function result(score) {
	window.confirm('You scored ' + score + '\n' + 'Would you like to go to next level?');	
}