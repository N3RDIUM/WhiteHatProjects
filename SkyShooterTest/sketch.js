const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground1,ground2,ground3,slingshot,shot,var1,var2,bg,bgImage,bg,bg1,back;

function preload(){
    polygon_img=loadImage("images/polygon.png");
    polygon_img2=loadImage("images/polygon2.png");
    cloudImage = loadImage("images/cloud.jpg");
    bg = loadImage("images/bg.png")
    bg1 = loadImage("images/bg2.jpg")
}

function setup(){
    createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    ground1 = new Ground(700,500,500,10)
    ground2 = new Ground(1300,300,500,10)
    ground3 = new Ground(150,500,80,10)

    var options = {
        mass :60,
        weight :30000,
        friction :0.002,
        restitution :0.7
    }

    ball = Bodies.circle(150,300,20,options);
    World.add(world,ball);

    slingshot = new SlingShot(this.ball,{x:150,y:300});

    shot = false

    b11 = new Box(700,490,40,40,"turquoise")
    b12 = new Box(740,490,40,40,"turquoise")
    b13 = new Box(780,490,40,40,"turquoise")
    b14 = new Box(820,490,40,40,"turquoise")
    b15 = new Box(860,490,40,40,"turquoise")
    b16 = new Box(680,490,40,40,"turquoise")
    b17 = new Box(660,490,40,40,"turquoise")
    b18 = new Box(640,490,40,40,"turquoise")
    b19 = new Box(620,490,40,40,"turquoise")
    b10 = new Box(600,490,40,40,"turquoise")

    b21 = new Box(700-20,490-50,40,40,"green")
    b22 = new Box(740-20,490-50,40,40,"green")
    b23 = new Box(780-20,490-50,40,40,"green")
    b24 = new Box(820-20,490-50,40,40,"green")
    b25 = new Box(860-20,490-50,40,40,"green")
    b26 = new Box(680-20,490-50,40,40,"green")
    b27 = new Box(660-20,490-50,40,40,"green")
    b28 = new Box(640-20,490-50,40,40,"green")
    b29 = new Box(620-20,490-50,40,40,"green")

    b31 = new Box(700-10,490-100,40,40,"red")
    b32 = new Box(740-10,490-100,40,40,"red")
    b33 = new Box(780-10,490-100,40,40,"red")
    b34 = new Box(820-10,490-100,40,40,"red")
    b35 = new Box(860-10,490-100,40,40,"red")
    b36 = new Box(680-10,490-100,40,40,"red")
    b37 = new Box(660-10,490-100,40,40,"red")
    b38 = new Box(640-10,490-100,40,40,"red")

    b41 = new Box(700,490-150,40,40,"blue")
    b42 = new Box(740,490-150,40,40,"blue")
    b43 = new Box(780,490-150,40,40,"blue")
    b44 = new Box(820,490-150,40,40,"blue")
    b45 = new Box(860,490-150,40,40,"blue")
    b46 = new Box(680,490-150,40,40,"blue")

    b51 = new Box(700+10,490-200,40,40,"black")
    b52 = new Box(740+10,490-200,40,40,"black")

    b61 = new Box(700+20,490-250,40,40,"white")

    
    var1 = 600
    var2 = 230
    c11 = new Box(700+var1,490-var2,40,40,"turquoise")
    c12 = new Box(740+var1,490-var2,40,40,"turquoise")
    c13 = new Box(780+var1,490-var2,40,40,"turquoise")
    c14 = new Box(820+var1,490-var2,40,40,"turquoise")
    c15 = new Box(860+var1,490-var2,40,40,"turquoise")
    c16 = new Box(680+var1,490-var2,40,40,"turquoise")
    c17 = new Box(660+var1,490-var2,40,40,"turquoise")
    c18 = new Box(640+var1,490-var2,40,40,"turquoise")
    c19 = new Box(620+var1,490-var2,40,40,"turquoise")
    c10 = new Box(600+var1,490-var2,40,40,"turquoise")

    c21 = new Box(700-20+var1,490-50-var2,40,40,"green")
    c22 = new Box(740-20+var1,490-50-var2,40,40,"green")
    c23 = new Box(780-20+var1,490-50-var2,40,40,"green")
    c24 = new Box(820-20+var1,490-50-var2,40,40,"green")
    c25 = new Box(860-20+var1,490-50-var2,40,40,"green")
    c26 = new Box(680-20+var1,490-50-var2,40,40,"green")
    c27 = new Box(660-20+var1,490-50-var2,40,40,"green")
    c28 = new Box(640-20+var1,490-50-var2,40,40,"green")
    c29 = new Box(620-20+var1,490-50-var2,40,40,"green")

    c31 = new Box(700-10+var1,490-100-var2,40,40,"red")
    c32 = new Box(740-10+var1,490-100-var2,40,40,"red")
    c33 = new Box(780-10+var1,490-100-var2,40,40,"red")
    c34 = new Box(820-10+var1,490-100-var2,40,40,"red")
    c35 = new Box(860-10+var1,490-100-var2,40,40,"red")
    c36 = new Box(680-10+var1,490-100-var2,40,40,"red")
    c37 = new Box(660-10+var1,490-100-var2,40,40,"red")
    c38 = new Box(640-10+var1,490-100-var2,40,40,"red")

    c41 = new Box(700+var1,490-150-var2,40,40,"blue")
    c42 = new Box(740+var1,490-150-var2,40,40,"blue")
    c43 = new Box(780+var1,490-150-var2,40,40,"blue")
    c44 = new Box(820+var1,490-150-var2,40,40,"blue")
    c45 = new Box(860+var1,490-150-var2,40,40,"blue")
    c46 = new Box(680+var1,490-150-var2,40,40,"blue")

    c51 = new Box(700+10+var1,490-200-var2,40,40,"black")
    c52 = new Box(740+10+var1,490-200-var2,40,40,"black")

    c61 = new Box(700+20+var1,490-250-var2,40,40,"white")
    getTime();

}

function draw(){
    if(back===true){
        background(26,100,255)
        imageMode(CENTER)
        image(bg ,1500/2,700/2)
        image(polygon_img ,ball.position.x,ball.position.y,40,40);
        makeBgClouds();
        console.log("day")
    }

    else{
        background("darkBlue")
        imageMode(CENTER)
        image(polygon_img2 ,ball.position.x,ball.position.y,40,40);
        image(bg1 ,1500/2,700/2)
        //console.log("night")
    }
    
    ground1.display();
    ground2.display();
    ground3.display();
    drawSprites();
    
    //l1
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b10.display();

    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    b26.display();
    b27.display();
    b28.display();
    b29.display();

    b31.display();
    b32.display();
    b33.display();
    b34.display();
    b35.display();
    b36.display();
    b37.display();
    b38.display();

    b41.display();
    b42.display();
    b43.display();
    b44.display();
    b45.display();
    b46.display();

    b51.display();
    b52.display();

    b61.display();

    //l2
    c11.display();
    c12.display();
    c13.display();
    c14.display();
    c15.display();
    c16.display();
    c17.display();
    c18.display();
    c19.display();
    c10.display();

    c21.display();
    c22.display();
    c23.display();
    c24.display();
    c25.display();
    c26.display();
    c27.display();
    c28.display();
    c29.display();

    c31.display();
    c32.display();
    c33.display();
    c34.display();
    c35.display();
    c36.display();
    c37.display();
    c38.display();

    c41.display();
    c42.display();
    c43.display();
    c44.display();
    c45.display();
    c46.display();

    c51.display();
    c52.display();

    c61.display();

    if(shot == true){
        fill("red")
        textSize(30)
        text("press space to re-throw!",750,50)
    }

    slingshot.display();
    //console.log(mouseX)
    //console.log(mouseY)
}

function mouseDragged(){
    if(shot == false){
        Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
        Matter.Body.applyForce(this.ball,{x:-100,y:-100})
    }
}

function mouseReleased(){
    slingshot.fly();
    shot = true
}

function keyPressed(){
	if (keyCode === 32){
        Matter.Body.setPosition(this.ball,{x:150,y:400});
        slingshot = new SlingShot(this.ball,{x:150,y:300});
    }
    shot = false
}

function makeBgClouds(){
    if(frameCount%80 === 0){
        var cloud = createSprite(1500,random(600,700),10,10)
        cloud.velocityX = -4
        cloud.addImage(cloudImage)
        cloud.scale = random(1,0.5)
        cloud.depth = 1
        cloud.lifetime = 500
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var response_json = await response.json() 
    var D1 = response_json.datetime
    var hour = D1.slice(11,13)
    console.log(hour)
    if(hour >= 06 && hour<=15){
        back = false
    }
    else{
        back = true
    }
}