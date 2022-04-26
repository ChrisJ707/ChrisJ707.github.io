//Catch the Ball

var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img1, img2;

function preload() {
  
  img1 = loadImage('https://chrisj707.github.io/game/images/space.png');
  img2 = loadImage('https://chrisj707.github.io/gameimages/invader1.png');
}

function setup() {
  createCanvas (600, 600);
  textAlign(CENTER);
  textSize(20);
}// end of setup

function draw() {
  background(img1);
  if (gameState == "L1"){
    levelOne();
  }
  if (gameState == "L2"){
    levelTwo();
  }
    if (gameState == "L3"){
    levelThree();
  }
  
  text(("Score: " + score),width/2,40);
}// end of draw

function levelOne(){
  text ("level 1", width/2, height-20);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score>=5){
    gameState = "L2";
  }
  
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
}
//end of level 1  =========================================

function levelTwo(){
  text ("level 2!", width/2, height-20);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score>=10){
    gameState = "L3";
  }
  ellipse(ballx, bally, ballSize, ballSize);
  
}
//end of level 2  =========================================

function levelThree(){
  text ("level 3!", width/2, height-20);
  var distoBall = dist(ballx, bally, mouseX, mouseY);
  if (distoBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize -5;
  }
  if (score>=15){
    background(random(25)); 
  }
  ellipse(ballx, bally, ballSize, ballSize);
  
}
//end of level 3  =========================================
