var nameSize = 61;
var nameX = 190;
var nameY = 280;
var nameFill = 255;


var gameNameFill = 71;
var gameNameX = 150;
var gameNameY = 120;
var gameNameStroke = 71;


var x = -10;
var y = 610; 

var x2 = -10;
var y2 = -10

var xspeed = 4;
var yspeed = 4.5;

var x2speed = 4;
var y2speed = -4.5;


var playButtonX = 450;
var playButtonY = 280;
var playButtonSize = 100;
var triX1 = 478;
var triX2 = 437;
var triX3 = 437;
var triY1 = 280;
var triY2 = 257;
var triY3 = 304;

var angle = 0.0;
var offset = 280;
var scalar = 5;
var speed = 0.07;

var startButton;
var startA;









function setup() {
  createCanvas(900, 600);
  setTimeout(startTheGame, 8000);
  background(71);
}



function startTheGame() {
  var startA = createA("loadingForLevel1.html", "🌕");
    startA.position(442, 269);
}






function draw() {
  


  var y1 = offset + sin(angle) * scalar;

   angle = angle + speed;









  stroke(71)
  strokeWeight(2);
  fill(nameFill);
  textSize(nameSize)
  text("By Abdullah Ghalib", nameX, nameY);



  


  
  

  if (nameSize > 60) {
  	nameSize = 61
  	setTimeout(fadeName, 3000);
  }



//game name

stroke(gameNameStroke);
strokeWeight(2);
fill(gameNameFill);
textSize(100);
text("Road Crosser", gameNameX, gameNameY);


fill(gameNameFill);
	strokeWeight(2);
	textSize(15);	
	text("by Abdullah Ghalib", 620, 150);




if (gameNameFill > 255) {
	//rainbows
	stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(0);
 //LOWER rainbow
 	fill(random(0, 255), random(0, 255), random(0, 255));
 	ellipse(x, y, 20, 20);
 	ellipse(x+15, y-15, 20, 20);
 	ellipse(x+25, y-25, 20, 20);
 	ellipse(x+35, y-35, 20, 20);
 	ellipse(x+45, y-45, 20, 20);
 	ellipse(x+55, y-55, 20, 20);
 	ellipse(x+65, y-65, 20, 20);





 	//Upper Rainbow

fill(random(0, 255), random(0, 255), random(0, 255));
 	ellipse(x2, y2, 20, 20);
 	ellipse(x2+15, y2-15, 20, 20);
 	ellipse(x2+25, y2-25, 20, 20);
 	ellipse(x2+35, y2-35, 20, 20);
 	ellipse(x2+45, y2-45, 20, 20);
 	ellipse(x2+55, y2-55, 20, 20);
 	ellipse(x2+68, y2-68, 20, 20);
 	strokeWeight(0);



    x2 = x2 + x2speed;
 	y2 = y2 - y2speed;


    x2speed = x2speed + 0.045;
 	y2speed = y2speed + 0.06;


 	x = x + xspeed;
 	y = y - yspeed;

 	xspeed = xspeed + 0.04;
 	yspeed = yspeed - 0.065;


	//start manipulation
  stroke(255);
  strokeWeight(5);
  fill(210, 0, 0);
  ellipse(playButtonX, y1, playButtonSize ,playButtonSize);
  stroke(71);
  fill(0,0,0,0)
  strokeWeight(6);
  ellipse(playButtonX, y1, playButtonSize+13 ,playButtonSize+13);


  stroke(0);
  strokeJoin(ROUND);
  strokeWeight(4);
  fill(255)
  triangle(triX1, triY1+y1-280, triX2, triY2+y1-280, triX3, triY3+y1-280);
  
  





}







}







function fadeName() {
	nameFill = nameFill - 2;

 if (nameFill < 71) {
 	nameFill = nameFill + 2;
 	gameNameFill++;
 	gameNameStroke--;

 }


}