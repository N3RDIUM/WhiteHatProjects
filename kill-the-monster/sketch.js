const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var monster,slingshot;
var backgroundImg,ground;
var superhero, slingshot, monster;

function preload() {
backgroundImg = loadImage("Images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,450,1000,20);
  superhero = new Hero(200,350,250);
  monster = new Monster(850,350,250);
  slingshot = new SlingShot(superhero.body, {x: 150, y: 150});

  block1 = new Block(450,430,40,40);
  block2 = new Block(450,410,40,40);
  block3 = new Block(450,390,40,40);
  block4 = new Block(450,370,40,40);
  block5 = new Block(450,350,40,40);
  block6 = new Block(450,330,40,40);
  block7 = new Block(450,310,40,40);
  block8 = new Block(450,290,40,40);
  block9 = new Block(450,270,40,40);
  block10 = new Block(450,250,40,40);

  block11 = new Block(500,430,40,40);
  block12 = new Block(500,410,40,40);
  block13 = new Block(500,390,40,40);
  block14 = new Block(500,370,40,40);
  block15 = new Block(500,350,40,40);
  block16 = new Block(500,330,40,40);
  block17 = new Block(500,310,40,40);
  block18 = new Block(500,290,40,40);

  block19 = new Block(550,430,40,40);
  block20= new Block(550,410,40,40);
  block21 = new Block(550,390,40,40);
  block22 = new Block(550,370,40,40);
  block23 = new Block(550,350,40,40);
  block24 = new Block(550,330,40,40);

  block25= new Block(600,430,40,40);
  block26 = new Block(600,410,40,40);
  block27 = new Block(600,390,40,40);
  block28 = new Block(600,370,40,40);
  block29 = new Block(600,350,40,40);
  block30 = new Block(600,330,40,40);
  block31 = new Block(600,310,40,40);
  block32 = new Block(600,290,40,40);

  block33 = new Block(650,430,40,40);
  block34 = new Block(650,410,40,40);
  block35 = new Block(650,390,40,40);
  block36 = new Block(650,370,40,40);
  block37 = new Block(650,350,40,40);
  block38 = new Block(650,330,40,40);
  block39 = new Block(650,310,40,40);
  block40 = new Block(650,290,40,40);
  block41 = new Block(650,270,40,40);
  block42 = new Block(650,250,40,40);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  superhero.display();
  monster.display();
  ground.display();
  slingshot.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
}

function mouseDragged(){
    Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}

