function setup() {
	//we need to connect p5 to the myP5 div in html
	var myCanvas = createCanvas(600, 400);
	/* set the parent element of myCanvas
	   so that the canvas knows where it lives*/
	myCanvas.parent('myP5');
}

function draw() {
	background(205); //gray background

	noStroke(); //gets rid of stroke
	fill('#9B90C8');
	ellipse(width/2, height/2, 100, 100);
}