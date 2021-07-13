var sea,seaImg;
var ship,shipImg;

function preload(){

seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");



sea=createSprite(400,200);
sea.addImage("sea",seaImg);
//sea.x=sea.width/2;
sea.velocityX=-4;
sea.scale=0.3;
//sea.visible=false;

ship=createSprite(130,200,30,30);
ship.addAnimation("ship",shipImg);


ship.scale=0.25;

}

function draw() {
sea.velocityX=-3;
 // ship.collide(sea);


  if(sea.x < 0){
  sea.x=sea.width/8;  
  }
  drawSprites();
  
}

  
    
ship.velocityY=ship.velocityY + 0.8;
if(keyDown("space")){
  ship.velocityY=6;
}