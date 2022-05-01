//Catch the Ball

var ballx = 400;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "begin";
var beginImg, img1, img2, img3, img4, img5, img6, img7, img8, 
     img9, img10, img11, img12, img13, img14, img15, img16,
     img17, img18, img19, img20, img21, img22, img23, img24;

function preload() {
   beginImg= loadImage('start1.gif');
   img1= loadImage('space1.gif');
   img2= loadImage('glitch-bg1.gif');
   img3= loadImage('sky.png');
   img4= loadImage('glitch-spaz1.gif');
   img5= loadImage('space.png');
   img6= loadImage('glitch-bg6.gif');
   img7= loadImage('hyperspace.gif');
   img8= loadImage('space3.gif');
   img9= loadImage('desktop-glitch.gif');
   img10= loadImage('wave2.gif');
   img11= loadImage('level1.png');
   img12= loadImage('level2.png');
   img13= loadImage('level3.png');
   img14= loadImage('level4.png');
   img15= loadImage('level5.png');
   img16= loadImage('level6.png');
   img17= loadImage('level7.png');
   img18= loadImage('level8.png');
   img19= loadImage('level9.png');
   img20= loadImage('level10.png');
   img21= loadImage('invader1.png');
   img22= loadImage('invader2.png');
   img23= loadImage('error.png');
   img24= loadImage('win2.gif');
}

function setup() {
  createCanvas (600, 600);
  textAlign(CENTER);
  textSize(20);
}// end of setup

function draw() {
  cursor(img4);
  
  if(gameState =="begin"){
  background(beginImg);
  beginGame();
}
    if (gameState == "L1"){
     background(img1); 
      //tint(255, 56);
       //image(img1, 0, 0, 600, 600);
    levelOne();
  }
    if (gameState == "L2"){
     background(img2); 
    levelTwo();
  }
    if (gameState == "L3"){
      background(img3);
    levelThree();
  }
    if (gameState == "L4"){
      background(img4);
    levelFour();
  }
    if (gameState == "L5"){
      background(img5);
    levelFive();
  }
    if (gameState == "L6"){
      background(img6); 
    levelSix();
  }
    if (gameState == "L7"){
      background(img7); 
    levelSeven();
  }
    if (gameState == "L8"){
      background(img8); 
    levelEight();
  }
    if (gameState == "L9"){
      background(img9); 
    levelNine();
  }
    if (gameState == "L10"){
      background(img10); 
    levelTen();
  }
    if(gameState =="Win"){
      background(50);
    win();
  }
  text(("Score: " + score),width/2,40);
}// end of draw

function beginGame(){
 if (mouseIsPressed === true) {
  gameState="L1";  
 } // end of if mousIsPressed
} // end of beginGame

function levelOne(){
  image (img11, 270, 550, 65, 50);
  fill (255);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score>=5){
    gameState = "L2";
  }
  if (score>=5){
    background(img2); 
  }

  stroke(255);
  line(ballx+20, bally+20, mouseX, mouseY);
  image (img21, ballx, bally, ballSize , ballSize);
  
}
//end of level 1  =========================================

function levelTwo(){
  image (img12, 270, 550, 75, 60);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score>=10){
    gameState = "L3";
  }
  if (score>=10){
    background(img3);
  }
  stroke(255);
  line(ballx+20, bally+20, mouseX, mouseY);
  image (img22, ballx, bally, ballSize , ballSize);
}
//end of level 2  =========================================

function levelThree(){
  image (img13, 270, 550, 85, 70);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
    if (score>=15){
    gameState = "L4";
  }
  if (score>=15){
    background(img4); 
  }
  stroke(255);
  line(ballx+20, bally+20, mouseX, mouseY);
  image (img21, ballx, bally, ballSize , ballSize);
}
//end of level 3  =========================================

function levelFour(){
  image (img14, 270, 530, 95, 80);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score>=20){
    gameState = "L5";
  }
  if (score>=20){
    background(img5); 
  }
  stroke(255);
  line(ballx+20, bally+20, mouseX, mouseY);
  image (img23, ballx, bally, 130, 90);
}
//end of level 4  =========================================

function levelFive(){
  image (img15, 270, 530, 95, 80);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score>=25){
    gameState = "L6";
  }
  if (score>=25){
    background(img6); 
  }
  stroke(255);
  line(ballx+20, bally+20, mouseX, mouseY);
  image (img21, ballx, bally, ballSize , ballSize);
}
//end of level 5  =========================================

function levelSix(){
  image (img16, 270, 530, 95, 80);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score>=30){
    gameState = "L7";
  }
  if (score>=30){
    background(img7); 
  }
  stroke(255);
  line(ballx+20, bally+20, mouseX, mouseY);
  image (img23, ballx, bally, 150, 110);
}
//end of level 6  =========================================

function levelSeven(){
  image (img17, 270, 510, 105, 90);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score>=35){
    gameState = "L8";
  }
  if (score>=35){
    background(img8); 
  }
  stroke(255);
  line(ballx+20, bally+20, mouseX, mouseY);
  image (img22, ballx, bally, ballSize , ballSize);
}
//end of level 7  =========================================

function levelEight(){
  image (img18, 270, 510, 105, 90);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score>=40){
    gameState = "L9";
  }
  if (score>=40){
    background(img9); 
  }
  stroke(255);
  line(ballx+20, bally+20, mouseX, mouseY);
  image (img21, ballx, bally, ballSize , ballSize);
}
//end of level 8  =========================================

function levelNine(){
  image (img19, 270, 510, 105, 90);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  } 
  if (score>=45){
    gameState = "L10";
  }
  if (score>=45){
    background(img10); 
  }
  stroke(255);
  line(ballx+20, bally+20, mouseX, mouseY);
  image (img23, ballx, bally, 140, 100);
}
//end of level 9  =========================================

function levelTen(){
  image (img20, 270, 510, 105, 90);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score>=50){
    gameState = "Win";
  }
  if (score>=50){
    background(img1); 
  }
  stroke(255);
  line(ballx+20, bally+20, mouseX, mouseY);
  image (img21, ballx, bally, ballSize , ballSize);
}
//end of level 10  =========================================

function win(){
  background(img24);
} // end win
