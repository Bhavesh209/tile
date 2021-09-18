const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;


//function preload() {}

function setup() {

  createCanvas(1362, 610);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  mclaren = new Mclaren(450, 100, 200, 200)
  mclaren1 = new Mclaren(257, 100, 200, 200)
  ferrari = new Ferrari(548, 100, 200, 200)
  ferrari1 = new Ferrari(730, 100, 200, 200)
  bluebike = new Bluebike(500, 100, 205, 250)
  bluebike1 = new Bluebike(205, 100, 205, 240)
  redcar = new Redcar(352, 100, 200, 200)
  redcar1 = new Redcar(643, 100, 200, 200)
  apache = new Apache(400, 100, 200, 200)
  apache1 = new Apache(595, 100, 200, 200)
  blackcar = new Blackcar(154, 100, 200, 200)
  blackcar1 = new Blackcar(824,100,200,207)
  ninja = new Ninja(306, 100, 200, 200)
  ninja1 = new Ninja(689, 100, 200, 200)
  ktm = new Ktm(775,100,200,200)
  ktm1 = new Ktm(872,100,200,200)
  yellowcar = new Yellowcar(915,100,200,200)
  ammo = new Ammo(450,350,50,50)

  slingShot = new SlingShot(ammo.body,{x:450,y:350});
  

}

function draw() {

  background("green");

  mclaren.display();
  mclaren1.display();
  redcar.display();
  redcar1.display();
  apache.display();
  apache1.display();
  ferrari.display();
  ferrari1.display();
  bluebike.display();
  bluebike1.display();
  ninja.display();
  ninja1.display();
  ktm.display();
  ktm1.display();
  blackcar.display();
  blackcar1.display();
  ammo.display();

  slingShot.display();

}

function mouseDragged() {

  Matter.Body.setPosition(ammo.body, {x: mouseX , y: mouseY});

}

function mouseRealized() {
  
  slingshot.fly();

}