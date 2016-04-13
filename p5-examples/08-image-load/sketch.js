//declare variable to hold my image
var img;

function setup() {
	createCanvas(900, 700);
	//to use an image, you must load it first
	img = loadImage("assets/space01.jpg");
}

function draw() {
	//display image at it's actual size
	//dispay at position 0, 0
	image(img, 0, 0);

	//display at 0, 0 but at half the image's size
	image(img, 0, 0, img.width/2, img.height/2);
}