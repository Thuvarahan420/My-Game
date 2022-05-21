var shooter;
var bg, bgImg;
var zombie;


function preload(){

  shooter = loadImage("assets/shooter.png")
  
  bgImg = loadImage("assets/background.png")
  
}

function setup() {
 
createCanvas(windowWidth,windowHeight);

bg = createSprite(displayWidth/2-28,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

player = createSprite(displayWidth-1150, displayyHeight-300, 50, 50);
player.addImage(shooter)
player.scale = 0.3
player.debug = true
player.setCollider("rectangle",0,0,300,300)
}

function draw() {
  background(0);


  if(keyDown("UP_ARROW")||touches.legnth>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.legnth>0){
    player.y = player.y+30
  }
  drawSprites();
}








