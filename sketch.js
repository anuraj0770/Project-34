const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof();

  bobDiameter = 40;
  var posx = width/2;
  var posy = height/2 + 150;

  bob1 = new Bob(posx-bobDiameter*2, posy, bobDiameter);
	bob2 = new Bob(posx-bobDiameter, posy, bobDiameter);
	bob3 = new Bob(posx, posy, bobDiameter);
	bob4 = new Bob(posx+bobDiameter, posy, bobDiameter);
	bob5 = new Bob(posx+bobDiameter*2, posy, bobDiameter);

  rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
  rope2 = new Rope(bob2.body, roof.body, -bobDiameter*1, 0);
  rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter*1, 0);
  rope5 = new Rope(bob5.body, roof.body, bobDiameter*2, 0);

  createElement("h1", "Drag the left bob and release it.");

  Engine.run(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY});
}

function draw() {
  background(0);
  Engine.update(engine);

  fill(255);
  textSize(30);
  text("NEWTON'S CRADLE", width/2-140, height-60);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}
