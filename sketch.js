var ship,shiping1;


function preload(){

seaImg=loadImage("sea.png");
shipi=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);

ship=createSsprite(50,160,20,50);
ship.addAnimation("shiping",shiping1);

}

function draw() {
  background("blue");
 
  drawSprite();
}