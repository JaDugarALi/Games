var r = 1;

function setup() {
	createCanvas(900, 600);
}

function draw() {
	background(71);

//instruction
	stroke(0);
	strokeWeight(2);
	fill(r, mouseX, mouseY);
	textSize(35);
	text(' "Welcome To Road Crosser" ', 250, 40);
	textSize(20);
	text('1 - Use "A" and "D" to move Forward and Backward', 10, 120);
	text('2 - If you are using touch , touch anywhere to move Forward', 10, 220);
	text('3 - Use Ctrl + R to Restart the Game', 10, 320);
	text('4 - Start Playing before the Timer runs out !!', 10, 420);
	textSize(18);
	text('Anyone want to buy this Game ,Contact me here ghalibabdullah042@gmail.com', 10, 520);


r = r + 0.1;


} 