var bgR; //variable for background - random every time
var bgG;
var bgB;

function setup() {
	createCanvas(windowWidth, windowHeight);

	// generate a random color for bgR / bgG and bgB
	/* we define these variables in setup so they 
		remain the same througout our code until it is
		refreshed */
	bgR = random(255);
	bgG = random(255);
	bgB = random(255);	
}

function draw() {
	/* use the random numbers we created in 'setup'
		to draw the background */
	background(bgR, bgG, bgB);

	// background(random(255), random(255), random(255));
}






