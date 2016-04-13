function setup() {
	createCanvas(480, 270);
	noStroke();
}

function draw() {
	background(0); //black background

	//print mouse x and mouse y to console
	console.log("x: " + mouseX + ", y:" + mouseY);

	//blue box
	//set color using fill
	fill(0, 0, 255); //fill is rgb value
	rect(0, 0, 240, 200);

	//1st red stripe = 100% opacity
	//no fourth argument for fill means 100%
	fill(255, 0, 0); //red 
	rect(0, 0, 480, 40);

	//2nd red stripe = 75% opacity
	fill(255, 0, 0, 191);
	rect(0, 50, 480, 40);

	//3rd red stripe = 50% opacity
	fill(255, 0, 0, 127);
	rect(0, 100, 480, 40);

	//4th red stripe = 25% opacity
	fill(255, 0, 0, 63);
	rect(0, 150, 480, 40);

}





