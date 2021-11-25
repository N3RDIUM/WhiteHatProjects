
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject,thrown;	
var world;

function setup() {
	createCanvas(1500, 800);
	rectMode(CENTER);
        thrown=0
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,560);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2-5,670,width,20);
	//Create a Ground
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paperObject.display();
  dustbinObj.display();
  groundObject.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW&&throwwn===0) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:69,y:-120});
		thrown=1
  	}
}





