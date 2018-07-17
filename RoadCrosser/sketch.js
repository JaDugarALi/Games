//Variables

//Disappering Arrown and Text for Instructions Variables
var strokeOfArrow = 255;
var strokeOfName = 255;


//Next level variables
var button;
var nextpage;

//Player Variables
var xp = 70;
var yp = 300;
var rp = 32;

//Finish variables
var xf = 865;
var yf = 300;

//Enemy Variables
//..........."we" means Width of enemy
//..........."he" means Height of enemy  
//Enemy no.1
var xe1 = 150;
var ye1 = 50;
var we1 = 35;
var he1 = 55;
var espeed1 = 13;

//Enemy no.2
var xe2 = 250;
var ye2 = 50;
var we2 = 35;
var he2 = 55;
var espeed2 = 14;

//Enemy no.3
var xe3 = 350;
var ye3 = 50;
var we3 = 35;
var he3 = 55;
var espeed3 = 18;

//Enemy no.4
var xe4 = 450;
var ye4 = 50;
var we4 = 35;
var he4 = 55;
var espeed4 = 10;

//Enemy no.5
var xe5 = 550;
var ye5 = 50;
var we5 = 35;
var he5 = 55;
var espeed5 = 14.5;

//Enemy no.6
var xe6 = 650;
var ye6 = 50;
var we6 = 35;
var he6 = 55;
var espeed6 = 11;

//Enemy no.7
var xe7 = 750;
var ye7 = 50;
var we7 = 35;
var he7 = 55;
var espeed7 = 17;

var level = 59;
var timer = level;
var intervaloftimer;

function setup() {
  alert("LEVEL 1   Take it Easy and you can Do it!!                                                  Tip : Use  A  and  D  to move Forward and Backward.");
  createCanvas(900, 600);
}




function timeIt() {
	timer--;
}

intervaloftimer = setInterval(timeIt, 1000);


function draw() {
  
  background(71);


 //Disappering Arrown and Text for Instructions
 
//Timer Arrow
  stroke(strokeOfArrow);
  strokeWeight(3);
  line(860, 60, 830, 90);
  line(860, 60, 860, 70);
  line(860, 60, 850, 60);
  noStroke();
  fill(strokeOfArrow)
  textSize(23);
  text("Timer", 800, 115);

//Finish Point Arrow

  stroke(strokeOfArrow);
  strokeWeight(3);
  line(840, 340, 810, 370);
  line(840, 340, 840, 350);
  line(840, 340, 830, 340);
  noStroke();
  fill(strokeOfArrow)
  textSize(23);
  text("Finish Point", 770, 400);

//Level Arrow

  stroke(strokeOfArrow);
  strokeWeight(3);
  line(820, 520, 850, 550);
  line(850, 550, 850, 540);
  line(850, 550, 840, 550);
  noStroke();
  fill(strokeOfArrow)
  textSize(23);
  text("Level :", 775, 510);

//Level Name
  
  fill(strokeOfName);
  textSize(230);
  text("Level 1", 100, 350);


  strokeOfName = strokeOfName - 1.5;

  strokeOfArrow = strokeOfArrow - 0.2;

  if (strokeOfName < 71) {
    strokeOfName = strokeOfName + 1.5;
  }


  if (strokeOfArrow < 71) {
    strokeOfArrow = strokeOfArrow + 0.2;
  }

  strokeWeight(1);
  noStroke();  


  //Level Number
  stroke(0);
  fill(255);
  textSize(30);
  text("Level 1", width-105, height-10);

  
  //Credits  
  noStroke();
  fill(255);
  textSize(12);
  text("By Abdullah Ghalib", 10, 20);


 //Timer

  if (timer < 10) {
  stroke(0);
  fill(255);
  textSize(28);
  text("00:0"+timer, width-80, 40);
 
 } else {
  stroke(0);
  fill(255);
  textSize(28);
  text("00:"+timer, width-80, 40);
 }


  if (timer < 1) {
  	timer++;
  	stroke(0);
 	strokeWeight(3);
 	fill(255);
 	textSize(150);
 	text("Game Over", 60, 350);
 	setIntrval("sdas", 50);

  }


  noStroke();

//Apearence
//Game Name "Road Crosser"
  textSize(100)
  fill(255, 255, 255, 2);
  text("Road Crosser", 130, 330);
  noStroke();

//Player appearence
  fill(200, 220, 150);
  ellipse(xp, yp, rp, rp);

//Enemy appearence
//Enemy no.1  
  fill(50, 200, 100);
  rect(xe1-18, ye1-28, we1, he1);

//Enemy no.2  
  fill(150, 50, 200);
  rect(xe2-18, ye2-28, we2, he2);

//Enemy no.3 
  fill(200, 50, 50);
  rect(xe3-18, ye3-28, we3, he3);

//Enemy no.4  
  fill(50, 150, 150);
  rect(xe4-18, ye4-28, we4, he4);

//Enemy no.5  
  fill(150, 180, 160);
  rect(xe5-18, ye5-28, we5, he5);

//Enemy no.6  
  fill(250, 80, 0);
  rect(xe6-18, ye6-28, we6, he6);

//Enemy no.7  
  fill(180, 100, 250);
  rect(xe7-18, ye7-28, we7, he7);

//Player limits and movements

//Movements
//Right movement
  if (key === "d" || mouseIsPressed ) {
	xp = xp + 3;
 console.log("RIGHT");
  } else {
  	xp = xp ;
  }


//Left movement
 if (key === "a" ) {
  	xp = xp - 3;
	console.log("LEFT");
  }


//Limits
//width limit
  if (xp > width-20) {
  	xp = xp - 3;
  }

//0 width limit
  if (xp < 20) {
  	xp = xp + 3;
  }



//Enemy movements and limits
//Movements

//movement of Enemy no.1
  ye1 = ye1 + espeed1;

  if (ye1 > height-55 || ye1 < 0) {
 	espeed1 = espeed1 * -1;
  }

  //movement of Enemy no.2
  ye2 = ye2 + espeed2;

  if (ye2 > height-55 || ye2 < 0) {
 	espeed2 = espeed2 * -1;
  }

  //movement of Enemy no.3
  ye3 = ye3 + espeed3;

  if (ye3 > height-55 || ye3 < 0) {
 	espeed3 = espeed3 * -1;
  }

  //movement of Enemy no.4
  ye4 = ye4 + espeed4;

  if (ye4 > height-55 || ye4 < 0) {
 	espeed4 = espeed4 * -1;
  }

  //movement of Enemy no.5
  ye5 = ye5 + espeed5;

  if (ye5 > height-55 || ye5 < 0) {
 	espeed5 = espeed5 * -1;
  }

  //movement of Enemy no.6
  ye6 = ye6 + espeed6;

  if (ye6 > height-55 || ye6 < 0) {
 	espeed6 = espeed6 * -1;
  }

  //movement of Enemy no.7
  ye7 = ye7 + espeed7;

  if (ye7 > height-55 || ye7 < 0) {
 	espeed7 = espeed7 * -1;
  }



//Hit manipulation
//hit 1
var h1 = dist(xe1, ye1, xp, yp);
 if (h1 < 30) {
 	stroke(0);
 	strokeWeight(3);
 	fill(255);
 	textSize(150);
 	text("Game Over", 60, 350);
 	setIntrval("sdas", 50);
 }


 //hit 2
var h2 = dist(xe2, ye2, xp, yp);
 if (h2 < 30) {
 	stroke(0);
 	strokeWeight(3);
 	fill(255);
 	textSize(150);
 	text("Game Over", 60, 350);
 	setIntrval("sdas", 50);
 }


 //hit 3
var h3 = dist(xe3, ye3, xp, yp);
 if (h3 < 30) {
 	stroke(0);
 	strokeWeight(3);
 	fill(255);
 	textSize(150);
 	text("Game Over", 60, 350);
 	setIntrval("sdas", 50);
 }


 //hit 4
var h4 = dist(xe4, ye4, xp, yp);
 if (h4 < 30) {
 	stroke(0);
 	strokeWeight(3);
 	fill(255);
 	textSize(150);
 	text("Game Over", 60, 350);
 	setIntrval("sdas", 50);
 }


 //hit 5
var h5 = dist(xe5, ye5, xp, yp);
 if (h5 < 30) {
 	stroke(0);
 	strokeWeight(3);
 	fill(255);
 	textSize(150);
 	text("Game Over", 60, 350);
 	setIntrval("sdas", 50);
 }


 //hit 6
var h6 = dist(xe6, ye6, xp, yp);
 if (h6 < 30) {
 	stroke(0);
 	strokeWeight(3);
 	fill(255);
 	textSize(150);
 	text("Game Over", 60, 350);
 	setIntrval("sdas", 50);
 }


 //hit 7
var h7 = dist(xe7, ye7, xp, yp);
 if (h7 < 30) {
 	stroke(0);
 	strokeWeight(3);
 	fill(255);
 	textSize(150);
 	text("Game Over", 60, 350);
 	setIntrval("sdas", 50);
 }










//Finish Point
stroke(0);
fill(200, 220, 150);
ellipse(xf, yf, 60, 60);
textSize(20);
noStroke();
fill(0);
text("Goal", 843, 306);

//Finish manipulation
var d1 = dist(xp, yp, xf, yf);
 if (d1 < 5 || xp > xf) {
 	stroke(0);
 	strokeWeight(3);
 	fill(255);
 	textSize(150);
 	text("You Win", 180, 350);
  alert("OKay!!!!! Now Let's Move on");
 	button = createButton("          ", width-105, height-10);
 	button.position(width-105, height-45);
 	button.size(100, 40);
 	nextpage = createA("loadingForLevel2.html", "Next Level");
 	nextpage.position(width-88, height-32);

 	


 	setIntrval(akdhkja);
  }

}




