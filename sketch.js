
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var land


function setup() {
	createCanvas(800, 700);
	land=createSprite(400,650,800,20)
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

box1=new box(200,500,25,-PI/2)
 
	Engine.update(engine);
  
}


function draw() {
  
 background("black")
 
  
 
 box1.display();
 drawSprites();
 
}



