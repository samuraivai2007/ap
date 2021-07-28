var bg1,bg2;
var sleep,sleeping,brush,brushing,gym,gyming,eat,eating,drink,drinking,move,moving;
var astronaut


function preload(){
  bg1=loadImage("/images/iss.png");
  sleep=loadAnimation("/images/sleep.png")
  brush=loadAnimation("/images/brush.png");
  gym=loadAnimation("/images/gym1.png","/images/gym2.png","/images/gym11.png","/images/gym12.png");
  eat=loadAnimation("/images/eat1.png","/images/eat2.png");
  drink=loadAnimation("/images/drink1.png","/images/drink2.png");
  move=loadAnimation("/images/move.png","/images/move1.png");
}
function setup() {
  createCanvas(800,600);
  createSprite(400, 200, 50, 50);
  
  bg2=createSprite(200,200)
  bg2.addImage("bg2",bg1);
  
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(255,255,255);
  
  
  if(keyDown("up_arrow")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("down_arrow")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("left_arrow")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("right_arrow")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("space")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  drawSprites();
}