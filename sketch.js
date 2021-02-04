const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var userEngine, userWorld;

var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;

var box1;
var box2;
var box3;

function preload() {
  helicopterIMG = loadImage("helicopter.png");
  packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(800, 700);

  userEngine = Engine.create();
  userWorld = userEngine.world;


  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageIMG);
  packageSprite.scale = 0.2;

  helicopterSprite = createSprite(width / 2, 200, 10, 10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6;

  box1 = new Box(200,100,30,90);

  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color(255);

  packageBody = Bodies.circle(width / 2, 200, 5, {
    restitution: 0.5,
    isStatic: true,
  });
  World.add(userWorld, packageBody);

  //Create a Ground
  ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
  World.add(userWorld, ground);

  box1 = new Box(400,600,150,20);
  box2 = new Box(475,600,20,150)
  box3 = new Box(325,600,20,150);

}

function draw() {
  background("black");


  Engine.update(userEngine);

  rectMode(CENTER);

  background(0);

  box1.display();
  box2.display();
  box3.display();



  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;



  drawSprites();
}

function keyPressed() {
  if (keyCode === 40) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody, false);
  }
}
