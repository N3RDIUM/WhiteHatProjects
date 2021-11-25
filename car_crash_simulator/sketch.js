var deformation
var speed,weight
var car,wall
var collided

function setup() {
  createCanvas(800,400);
  speed = random(25,78)
  weight = random(1000,4000)
  console.log(speed+":"+weight)
  car = createSprite(-450,200,20,20)
  car.velocityX = speed
  car.shapeColor = "white"

  wall = createSprite(700,200,40,300)
  wall.shapeColor = "gray"

  collided = false
}

function draw() {
  background(0,0,0);  
  text("CAR CRASH TEST SIMULATOR 1.0",10,300)
  text("made by Me",10,350)
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2) {
      collided = true
}
  text("speed: "+Math.round(speed)+"  "+"weight:"+Math.round(weight),400,50)
if(collided===true){
  car.velocityX = random(-1,-2)
  deformation = (0.5*weight*speed*speed)/22500
  if(deformation>180){
    car.shapeColor = "red"
    text("deformation: "+Math.round(deformation)+" :LETHAL",400,70)
  }
  if(deformation<180&&deformation>80){
    car.shapeColor = "yellow"
    text("deformation: "+Math.round(deformation)+" :AVERAGE",400,70)
  }
  if(deformation<80){
    car.shapeColor = "green"
    text("deformation: "+Math.round(deformation)+" :NORMAL",400,70)
  }
}
  drawSprites();
}
