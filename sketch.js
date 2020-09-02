var fixedRect , movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  
  gameObject1.shapeColor = "green";
  
}
if(isTouching(movingRect,gameObject2)){
  movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  
  
  gameObject2.shapeColor = "green";
  
}
if(isTouching(movingRect,gameObject3)){
  movingRect.shapeColor = "red";
  gameObject3.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  
  gameObject3.shapeColor = "green";
  
}
if(isTouching(movingRect,gameObject4)){
  movingRect.shapeColor = "red";
  gameObject4.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  
  gameObject4.shapeColor = "green";
}

 var touched = isTouching(gameObject3,movingRect);
 console.log(touched);
  drawSprites();
}

