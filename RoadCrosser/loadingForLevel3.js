//central cirle variables
var x = 450;
var y = 300;
var d = 100;

//expanding circle variables
var x1 = x;
var y1 = y;
var d1 = d;

var r1 = 160;
var g1 = 160;
var b1 = 250;
var t1 = 255;

var r2 = 30;
var g2 = 30;
var b2 = 120;
var t2 = 255;

function setup() {
  createCanvas(900, 600);
 
}



function draw() {
  background(71);



//Cirles expanding
  fill(r1, g1, b1, t1);
  ellipse(x1, y1, d1, d1);
  fill(r2, g2, b2, t2);
  ellipse(x1, y1, d1-170, d1-170);

//with time i want u to
  d1 = d1 + 2.1;
  r1 = r1 + 1;
  g1 = g1 + 1;
  b1 = b1 + 1;
  t1 = t1 - 2.5;

  r2 = r2 + 1;
  g2 = g2 + 1;
  b2 = b2 + 1;
  t2 = t2 - 1.5;

//stop when 
  if (r1 > 200) {
  	r1 = 200
  }

  if (g1 > 200) {
  	g1 = 200
  }
	
  if (b1 > 210) {
  	b1 = 210
  }

  if (t1 < 0) {
  	t1 = 0;
  }


//cirle2
    if (r2 > 200) {
  	r2 = 200
  }

  if (g2 > 200) {
  	g2 = 200
  }
	
  if (b2 > 210) {
  	b2 = 210
  }

  if (t2 < 0) {
  	t2 = 0;
  }


//central Circle
  
  noStroke();
  fill(160, 160, 250);
  stroke(0);
  strokeWeight(0.2);
  ellipse(x, y, d, d);
  noStroke();

// text loading
noStroke();
stroke(0);
strokeWeight(1.8);
fill(0);
textSize(19);
text("LOADING", x-42, y+7);
noStroke();


}