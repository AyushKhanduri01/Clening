const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var paper1;
var box1;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	paper1 = new Paper(150,400,40);
	box1 = new Box(400,430,100,10);
	box2 = new Box(350,385,10,100);
	box3 = new Box(450,385,10,100);
    ground1 = new Ground(400,450,1000,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  ground1.display();
  drawSprites();
}



