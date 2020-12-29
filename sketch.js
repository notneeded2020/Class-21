var fixedrect , movingrect
var pig
var bird
var box
var catpaul

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "blue";

  fixedrect = createSprite (200,200,50,50);
  fixedrect.shapeColor = "blue";

  pig = createSprite (300,250,40,40);
  pig.shapeColor = "green";

  bird = createSprite (200,100,20,20);
  bird.shapeColor = "red";

  box = createSprite (300,300,50,60);
  box.shapeColor = "brown";

  catpaul = createSprite (150,100,20,80);
  catpaul.shapeColor = "white";




}

function draw() {
  background(0);  

 pig.y = mouseY;
 pig.x = mouseX;

 if (isTouching (pig,bird)){
     
  pig.shapeColor = "pink";
  bird.shapeColor = "pink";

 }else {

  pig.shapeColor = "green";
  bird.shapeColor = "red";

 }

  drawSprites();
}










