var fixedRect , movingRect;
function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(400, 100, 50, 80);
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.debug = true;
  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;
}

function draw() {
    background(255,255,255);  

    bounceOff(fixedRect,movingRect) 

    console.log(isTouching(movingRect,fixedRect));
    
  
  
  
    drawSprites();
  }


 