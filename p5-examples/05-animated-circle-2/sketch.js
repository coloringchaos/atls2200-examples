var radius = 0; //declare my radius variable

//use boolean to check between true or false
//booleans can only have 2 states: true or false
var isGrowing = true; //our circle starts in grow state
/* 'isGrowing' will allow us to decide which 
	function to call using an if statement */

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	ellipse(width/2, height/2, radius, radius)

	//console.log(radius);

	//SET STATES
	//set isGrowing state based on radius size
	//THIS ALLOWS US TO FLIP FLOP BETWEEN STATES

	/*	if radius is greater than or equal to 200,
		set isGrowing to false */
	if(radius >= 200){
		isGrowing = false;
	}
	/*	if radius is less than or equal to 0,
		set isGrowing to true */
	if(radius <= 0){
		isGrowing = true;
	}

	//CALL FUNCTIONS BASED ON STATE

	//if isGrowing is true, call the function grow()
	if(isGrowing === true){
		grow();
	}
	//if isGrowing is false, call shrink()
	if(isGrowing === false){
		shrink();
	}
}

function grow(){
	/* whenever this function is called, 
	we want the radius to be increasing */
	
	//radius++ is shorthand for radius = radius + 1;
	radius++; 
}

function shrink(){
	/* this function decreases the radius */
	radius--;
}




