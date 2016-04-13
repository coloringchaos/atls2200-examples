var radius = 0;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0); //black background
	// frameRate(10);

	//animate circle based on mouseX position
	//set radius to the mouseX value divided by 2
	// radius = mouseX/2;

	ellipse(width/2, height/2, radius, radius);

	if(radius < 200){
		//increment radius value by 1
		radius++; //this is the same as radius=radius+1;
	}

	console.log(radius);

	//if it gets to 200, go back to zero
	if(radius == 200){
		radius = 0;
	}


}







