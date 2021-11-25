const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground, wall1, wall2;

var particles = [];
var divisions =[];
var plinkos = [];

function setup() {
    createCanvas(800,700);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(350,695,1000,10)
    wall1 = new Ground(-3,350,10,1000)
    wall2 = new Ground(796,350,10,1000)
    
    for (var i = 0; i <=width; i = i + 80) {
        divisions.push(new Separator(i, 600, 10, 300));
    }
    
    var val = -15

    for (var j = 75; j <=width; j=j+50){     
        plinkos.push(new Plinko(j+val,50));
     }
 
    for (var j = 50; j <=width-10; j=j+50){     
        plinkos.push(new Plinko(j+val,100));
    }
 
    for (var j = 75; j <=width; j=j+50){     
        plinkos.push(new Plinko(j+val,150));
    }
 
    for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j+val,200));
    }

    for (var j = 75; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j+val,250));
    }

    for (var j = 50; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j+val,300));
    }

    for (var j = 75; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j+val,350));
    }    

    for (var j = 50; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j+val,400));
    }

    particles.push(new Particle(random(10,780), 10,0.5));
}

function draw() {
    background(0,0,0);

    for(var i=0; i<plinkos.length; i+=1){
        plinkos[i].display()
    }

    for (var i = 0; i < divisions.length; i++) {
        divisions[i].display();
    }
    
    for (var i = 0; i < particles.length; i++) {
            particles[i].display();
    }

    ground.display()

    wall1.display()
    wall2.display()
    
    fill("red")
    ellipse(mouseX,10,5,12);

    Engine.update(engine)
    drawSprites();
    textSize(30)
    fill("cyan")
    text("click and move your mouse!",230,30)
}

function mouseClicked(){
    for(var i=0; i<10; i++){
            particles.push(new Particle(random(random(mouseX-50,mouseX+50),mouseX), 10,random(5,12)));
    }
}