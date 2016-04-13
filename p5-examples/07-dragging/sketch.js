//define and set inial variable values
var x = 200;
var y = 200;
var r = 20;

/* we also need boolean variable to check if 
	mouse is dragging or not */
var isDragging = false; //start in 'false' state


function setup() {
	createCanvas(400, 400);
	fill(0); //we want a black circle, so fill black
}

function draw() {
	background(225);
	console.log(isDragging);
	ellipse(x, y, r, r);

	/* if isDragging is true, 
	set x and y to mouseX and mouseY */
	if(isDragging === true){
		x = mouseX;
		y = mouseY;
	}
}

/* when mouse is pressed, check if mouse is inside circle
	if it is, set dragging state to true */
function mousePressed(){
	//use distance function for this check
	if( dist(x, y, mouseX, mouseY) < r/2){
		isDragging = true;
	}
}

function mouseReleased(){
	isDragging = false;
}












