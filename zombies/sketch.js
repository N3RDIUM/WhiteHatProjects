var helicopterImage, helicopter
var rescue,rescueImage;
var ground
var rescueBody
var helicopterSound,boxSound

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterImage=loadImage("helicopter.png")
	rescueImage=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	rescue=createSprite(width/2, 80, 10,10);
	rescue.addImage(rescueImage)
	rescue.scale=0.2
	rescue.visible = false

	helicopter=createSprite(-50, 200, 10,10);
	helicopter.addImage(helicopterImage)
	helicopter.scale=0.6
	helicopter.velocityX = 6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	rescueBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, rescueBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
     
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  rescue.x= rescueBody.position.x 
  rescue.y= rescueBody.position.y 
  if(frameCount%80===0){
	Matter.Body.setStatic(rescueBody,false);
	rescue.visible = true
  }
  drawSprites();
}

