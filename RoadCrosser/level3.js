//Variables

//Disappering Arrown and Text for Instructions Variables
var strokeOfName = 255;

//Next level variables
var button;
var nextpage;


//Player Variables
var xp = 70, touchX;
var yp = 300, touchY;
var rp = 32;

//Finsish variables
var xf = 865;
var yf = 300;

//Enemy Variables
//..........."we" means Width of enemy
//..........."he" means Height of enemy  
//Enemy no.1
var xe1 = 140;
var ye1 = 50;
var we1 = 35;
var he1 = 55;
var espeed1 = 17;

//Enemy no.2
var xe2 = 230;
var ye2 = 50;
var we2 = 35;
var he2 = 55;
var espeed2 = 20;

//Enemy no.3
var xe3 = 320;
var ye3 = 50;
var we3 = 35;
var he3 = 55;
var espeed3 = 22;

//Enemy no.4
var xe4 = 410;
var ye4 = 50;
var we4 = 35;
var he4 = 55;
var espeed4 = 16;

//Enemy no.5
var xe5 = 500;
var ye5 = 50;
var we5 = 35;
var he5 = 55;
var espeed5 = 19.5;

//Enemy no.6
var xe6 = 590;
var ye6 = 50;
var we6 = 35;
var he6 = 55;
var espeed6 = 17;

//Enemy no.7
var xe7 = 680;
var ye7 = 50;
var we7 = 35;
var he7 = 55;
var espeed7 = 21;

//Enemy no.8
var xe8 = 770;
var ye8 = 50;
var we8 = 35;
var he8 = 55;
var espeed8 = 25;

//Enemy no.9
var xe9 = 50;
var ye9 = 50;
var we9 = 35;
var he9 = 55;
var xespeed9 = 11;
var yespeed9 = 12;


var level = 50;
var timer = level;
var intervaloftimer;

function setup() {
	alert("LEVEL 3      Go Hard or Go Home!!,                                                           Now You Can Move  Up  and  Down  by using   W   and   S");
  createCanvas(900, 600);
}




function timeIt() {
	timer--;
}

intervaloftimer = setInterval(timeIt, 1000);


function draw() {
  
  background(71);

//Level Name
  
  fill(strokeOfName);
  textSize(20);
  text("Now you Can Move Up and Down", 350, 40);
  textSize(230);
  text("Level 3", 100, 350);

  strokeOfName = strokeOfName - 1;

  if (strokeOfName < 71) {
    strokeOfName = strokeOfName + 1;
  }

  strokeWeight(1);
  noStroke();




  //Level Number
  stroke(0);
  fill(255);
  textSize(30);
  text("Level 3", width-105, height-10);

  
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

//Enemy no.8  
  fill(80, 180, 50);
  rect(xe8-18, ye8-28, we8, he8);

//Enemy no.9  
  fill(180, 180, 250);
  rect(xe9-18, ye9-28, we9, he9);

//Player limits and movements

//Movements
//Right movement
  if (key === "d" || mouseIsPressed) {
	xp = xp + 3;
  }

//Left movement
  if (key === "a") {
  	xp = xp - 3;
  }

//Up movement
  if (key === "w") {
  	yp = yp - 4;
  }

//Down movement
  if (key === "s") {
  	yp = yp + 4;
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

//0 height limit
  if (yp > height-20) {
  	yp = yp - 4;
  }

//height limit
  if (yp < 20) {
  	yp = yp + 4;
  }



//Enemy movements and limits
//Movements

//movement of Enemy no.1
  ye1 = ye1 + espeed1;

  if (ye1 > height-35 || ye1 < 0) {
 	espeed1 = espeed1 * -1;
  }

  //movement of Enemy no.2
  ye2 = ye2 + espeed2;

  if (ye2 > height-35 || ye2 < 0) {
 	espeed2 = espeed2 * -1;
  }

  //movement of Enemy no.3
  ye3 = ye3 + espeed3;

  if (ye3 > height-35 || ye3 < 0) {
 	espeed3 = espeed3 * -1;
  }

  //movement of Enemy no.4
  ye4 = ye4 + espeed4;

  if (ye4 > height-35 || ye4 < 0) {
 	espeed4 = espeed4 * -1;
  }

  //movement of Enemy no.5
  ye5 = ye5 + espeed5;

  if (ye5 > height-35 || ye5 < 0) {
 	espeed5 = espeed5 * -1;
  }

  //movement of Enemy no.6
  ye6 = ye6 + espeed6;

  if (ye6 > height-35 || ye6 < 0) {
 	espeed6 = espeed6 * -1;
  }

  //movement of Enemy no.7
  ye7 = ye7 + espeed7;

  if (ye7 > height-35 || ye7 < 0) {
 	espeed7 = espeed7 * -1;
  }

  //movement of Enemy no.8
  ye8 = ye8 + espeed8;

  if (ye8 > height-35 || ye8 < 0) {
  espeed8 = espeed8 * -1;
  }

  //movement of Enemy no.9
  xe9 = xe9 + xespeed9;
  ye9 = ye9 + yespeed9;

  if (xe9 > width || xe9 < 0) {
  xespeed9 = xespeed9 * -1;
  }

  if (ye9 > height-35 || ye9 < 0) {
  yespeed9 = yespeed9 * -1;
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


 //hit 8
var h8 = dist(xe8, ye8, xp, yp);
 if (h8 < 30) {
  stroke(0);
  strokeWeight(3);
  fill(255);
  textSize(150);
  text("Game Over", 60, 350);
  setIntrval("sdas", 50);
 }


 //hit 9
var h9 = dist(xe9, ye9, xp, yp);
 if (h9 < 30) {
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
 if (d1 < 9) {
 	stroke(0);
 	strokeWeight(3);
 	fill(255);
 	textSize(150);
 	text("You Win", 180, 350);
 	alert("OOh!! You DiD it , I never thought you could make it , N00B");
  //button = createButton("          ", width-105, height-10);
  //button.position(width-105, height-45);
  //button.size(100, 40);
  //nextpage = createA("level3.html", "Next Level");
  //nextpage.position(width-88, height-32);

  createP("More Levels will be Added Soon, Stay Tuned!!");
  createP("If you want to buy this game , See the Instructions on the Main Menu");
  createP("GoodBye!  KhudaHafiz!   Gracias!");

 	setIntrval(akdhkja);
  }



//Egg Manipulation

if (xp > 870 && yp > 570) {

strokeWeight(2);
 textSize(10);
 text("Press  Space", 835, 555);

}



if (key === " ") {



  


    stroke(255);
	strokeWeight(3);
	fill(255)
  	line(mouseX, mouseY-15, mouseX-4, mouseY-15);
  	line(mouseX, mouseY-11, mouseX-3, mouseY-11);
  	line(mouseX, mouseY-17, mouseX, mouseY);
  	strokeWeight(1)
  	ellipse(mouseX, mouseY, 10, 10);

 nextpage = createA("egg.html", "❤");
 nextpage.position(10, 570);

  		
  

}






  stroke(0);
  strokeWeight(0);
}

