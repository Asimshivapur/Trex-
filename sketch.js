
var trex ,trex_running;
var ground , ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground1=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,10,10)
 trex.addAnimation("animation",trex_running)
 trex.scale=0.5
ground=createSprite(140,180,900,20)
ground.addImage(ground1)
ground.velocityX=-4
invisibleground=createSprite(50,190,600,20)
invisibleground.visible=false

}


function draw(){

  background("cyan")
  if(ground.x<0){
    ground.x=ground.width/2;

  }
  if(keyDown("space")){
    trex.velocityY=-10 
  }
  trex.velocityY+=0.5
  trex.collide(invisibleground)
  drawSprites()

}
