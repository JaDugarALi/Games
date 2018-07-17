var eggX = 250;
var eggY = 350;

var shineX = 250;
var shineY = 350;
var shine = 90;
var shineSize = 20;

function setup() {
  createCanvas(900, 600);
  background(81); 
}

function draw() {


  stroke(0);
  strokeWeight(4);
  fill(255);
  textSize(50);
  text("You Found The Easter Egg", 150, 150);

  text("Because Winning Is'nt Everything", 80, 550)


  //Shine
  stroke(random(0, 255) ,random(0, 255) ,random(0, 255));
  strokeWeight(1);
  fill(random(0, 255) ,random(0, 255) ,random(0, 255) ,shine);
  ellipse(shineX+200, shineY, shineSize, shineSize);

  shine = shine - 1;
  shineSize = shineSize + 4;


  //Easter Egg
  strokeWeight(0);

  fill(250, 250, 80);
  ellipse(eggX+200, eggY, 120, 150);

  
  fill(250, 220, 0);
  ellipse(eggX+193, eggY, 110, 150);
 
  fill(255, 255, 0);
  ellipse(eggX+195, eggY-8, 115, 135);

  fill(255);
  ellipse(eggX+180, eggY-30, 30, 35);

  fill(0, 0, 0, 0);
  stroke(0);
  strokeWeight(3.5);
  ellipse(eggX+198, eggY, 125, 150); 




}
