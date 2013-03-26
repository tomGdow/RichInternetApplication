//global variables

document.write("hello");

var obj, x, y, dx, dy;
//set up draggable elements
function Setup() {
	//exit if the browser dosen't support the DOM
	if (!document.getElementsByTagName) return;
	divs = document.getElementsByTagName("div");
	for (i = 0; i <divs.length; i++) {
		if (divs[i].className != "drag") continue;
		//set event handler for each div with class ="drag"
		divs[i].onmousedown =Drag;
		
}
	}
	
	function Drag(e){
		//Start dragging an object
		if (!e) var e = window.event;
		//which object was clicked?
		obj = (e.target) ? e.target: e.srcElement;
		obj.style.borderColor ="red";
		//calculate object offsets from mouse position
		dx = x - obj.offsetLeft;
		dy = y - obj.offsetTop;
		
	}
	function Move(e) {
		//track mouse movements
		if (!e) var e = window.event;
		if (e.pageX) {
			x = e.pageX;
			y = e.pageY;
			}
			else if (e.clientX) {
				x=e.clientX;
				y=e.clientY;
} else return;
if (obj) {
	obj.style.left = x - dx;
	obj.style.top = y - dy;
	
}
		
	}
	function Drop () {
		//let go!
		if (!obj) return;
		obj.style.borderColor ="black";
		obj = false;
		
		
	}
	//Detect mouse movement
	document.onmousemove = Move;
	//drop current object on mouse up
	document.onmouseup =Drop;
	//Set up when the page loads
	window.onload = Setup;