function preload(){
player=loadImage("abcdef.jpg");
backgroundImg=loadImage("cartoon-spring-japan-landscape-as-game-background-vector-19842003.jpg");
}

function setup() {
createCanvas(windowWidth,windowHeight);
bg=createSprite(windowWidth/2,windowHeight/2);
bg.loadImage("backgroundImg");
bg.velocityX=-2;
}

function draw() {
    
   
drawSprite();
}