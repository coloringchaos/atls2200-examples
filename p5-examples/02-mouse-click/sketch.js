function setup() {
	createCanvas(600, 340);

}

function draw() {
	background(205); //light gray background
	strokeWeight(30); //set stroke width

	stroke(102); //dark gray stroke
	line(140, 0, 170, height);

	//check if mouse is pressed
	if(mouseIsPressed){
		//if mouseIsPressed is TRUE, 
		//set stroke to black
		stroke(0);
	} else{
		//if mouseIsPressed is FALSE,
		//set stroke to white
		stroke(255); //white
	}
	
	line(0, 170, width, 150);
}




