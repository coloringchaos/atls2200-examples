//step 1: define variables
var x;
var y;
var r = 70;

function setup() {
	createCanvas(600, 400);

	//step 2: declare variable values
	/*	you cannot use 'width' and 'height' until 
	 	AFTER you have created a canvas */
	x = width/2;
	y = height/2;
}

function draw() {
	background('#ddd');
	//draw ellipse based on variables I made up
	ellipse(x, y, r, r);

	/* 	each time draw runs, add a random 
		value between -2 and 2 to my x and y values */
	x = x + random(-2, 2);
	y = y + random(-2, 2);
}






