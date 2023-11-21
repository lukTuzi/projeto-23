
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var particle1, particle2, particle3, particle4, particle5;
var rotator1, rotator2, rotator3;
var block1, block2;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options = {
	  isStatic: true,
	}

	plane = Bodies.rectangle(600, height, 1200, 20, options);
	World.add(world,plane);

	block1 = Bodies.rectangle(100, 400, 150, 20, options);
	World.add(world,block1);
	block2 = Bodies.rectangle(400, 400, 150, 20, options);
	World.add(world,block2);

	rotator1 = Bodies.rectangle(250, 200, 150, 20, options);
	World.add(world,rotator1);
	rotator2 = Bodies.rectangle(250, 200, 150, 20, options);
	World.add(world,rotator2);
	rotator3 = Bodies.rectangle(250, 200, 150, 20, options);
	World.add(world,rotator3);


//so criar apartir da classe wiiii
  particle1 = new ball(100,100,20);
  particle2 = new ball(110,100,20);
  particle3 = new ball(120,100,20);
  particle4 = new ball(130,100,20);
  particle5 = new ball(140,100,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  particle1.show();
  particle2.show();
  particle3.show();
  particle4.show();
  particle5.show();



  rect(plane.position.x, plane.position.y, 1200, 20);
  rect(block1.position.x, block1.position.y, 150, 20);
  rect(block2.position.x, block2.position.y, 150, 20);

  Matter.Body.rotate(rotator1, angle1);
  push ();
  translate (rotator1.position.x, rotator1.position.y);
  rotate (angle1);
  rect (0, 0, 150, 20);
  pop ();
  angle1 += 0.2

  Matter.Body.rotate(rotator2, angle2);
  push ();
  translate (rotator2.position.x, rotator2.position.y);
  rotate (angle2);
  rect (0, 0, 150, 20);
  pop ();
  angle2 += 0.3

  Matter.Body.rotate(rotator3, angle3);
  push ();
  translate (rotator3.position.x, rotator3.position.y);
  rotate (angle3);
  rect (0, 0, 150, 20);
  pop ();
  angle2 += 0.4
 
  
  
  drawSprites();
 
}



