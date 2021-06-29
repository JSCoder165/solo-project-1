var goal, goalIMG
var player, playerIMG
var gameState = 1
var Play = 2
var End = 3
var Ball, BallIMG
var score = 0

function setup() {
  createCanvas(800,400);
  Ball = createSprite(250, 100, 10, 10);
  player = createSprite(190, 100, 20, 20);
  goal = createSprite(600, 100, 100, 100);
}

function draw() {
  background("blue")
//  if(gameState = 1)
//  clear();
//  text("Press spacebar to play")
 if(keyCode === 32){
   gameState = 2;
 }
if(keyWentDown("S")){
  player.velocityY = -1
}
if(keyWentUp("S")){
  player.velocityY = 0
}
if(keyWentDown("W")){
  player.velocityY = 1
}
if(keyWentUp("W"))
player.velocityY = 0;

 /*if(Ball.isTouching("goal")){
   Ball.x = 100;
   Ball.y = 200;
   Ball.velocityX = 0;
   Ball.velocityY = 0;
   score =+ 1;
 } 
if(player.touches("Ball")){
Ball.velocityX = 1;
Ball.velocityY = 0;
goal.velocityY =+ 1;
goal.velocityX = 0;
}
if(score > 50){
  gameState = 3
}
if(gameState === 3){
  clear();
  text("welp guess you beat my game, press space to restart")
  if(keyCode = 32){
    gameState = 2
  }*/
drawSprites()
}
