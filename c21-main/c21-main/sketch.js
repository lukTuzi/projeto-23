const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var topWall;
var ball;
var btm1,btm2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
ground = new Ground(200,390,400,20);
right = new Ground(390,200,20,400);
left = new Ground(10,200,20,400);
topWall = new Ground(200,10,400,20);

btm1 = createImg("right.png");
btm1.position(310, 30);
btm1.size(60, 60);
btm1.mouseClicked(hForce);

btm2 = createImg("up.png");
btm2.position(40, 30);
btm2.size(60, 60);
btm2.mouseClicked(vForce);



var options={
  restitution: 0.5,
}

ball = Bodies.circle(200, 100, 20, options);
World.add(world,ball);



}

function draw() 
{
  background(0);
  Engine.update(engine);

  ground.display();
  right.display();
  left.display();
  topWall.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);
}

function vForce() {
 Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
}

function hForce() {
 Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
 }