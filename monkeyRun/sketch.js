var bg, bgSprite, ground, fence
var monkey, monkey_running
var monkeylost
var banana, bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score, fenceImage, gState,x

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bg = loadImage("OIP.jpg")
  fenceImage = loadImage("OIP (1).jpg")
  monkey_lost = loadAnimation("sprite_1.png", "sprite_0.png")
}

function setup() {
  score = 0
  gState = "playing"
  createCanvas(600, 600)
  monkey = createSprite(100, 510, 100, 100)
  monkey.addAnimation("asfdasfa", monkey_running)
  bgSprite = createSprite(300, 450)
  bgSprite.addImage(bg)
  monkey.scale = 0.2
  bgSprite.scale = 4
  monkey.setCollider("circle", 0, 0, 300)
  //monkey.debug = true
  ground = createSprite(300, 580, 600, 20)
  fence = createSprite(300, 510)
  fence.addImage(fenceImage)
  fence.scale = 2
  fence.velocityX = -10
  foodGroup = new Group()
  obstaclesGroup = new Group()
  banana = createSprite(600, Math.round(random(300,500)), 100, 100)
  banana.addImage(bananaImage)
  banana.velocityX = -10
  banana.lifetime = 100
  banana.scale = 0.2
  //banana.debug = true
  banana.setCollider("circle", 0, 0, 250)
  foodGroup.add(banana)

}


function draw() {
  background("white")
  drawSprites();
  monkey.depth += 1
  if (fence.x < 125) {
    fence.x = fence.width / 2 
  }
  monkey.collide(ground)
  monkey.velocityY += 4
  textSize(30)
  text("score: " + score,300,30)
  if (obstaclesGroup.isTouching(monkey) && gState === "playing") {
    points = 0
    gState = "end"

  }
  if(gState === "playing"){
    if (keyDown("space") && monkey.y >= 500) {
    monkey.velocityY = -50
  }
  }
  if(score <0){
    score = 0
  }
  if (gState === "end") {
    fence.velocityX = 0
    points = 0
    obstaclesGroup.setVelocityXEach(0)
    foodGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
    foodGroup.setLifetimeEach(-1)
    if (keyDown("r")) {
      score = 0
     gState = "playing" 
    obstaclesGroup.destroyEach()
      foodGroup.destroyEach()
      banana = createSprite(600, Math.round(random(300,500)), 100,  100)
    banana.addImage(bananaImage)
    banana.velocityX = -10
    banana.lifetime = 100
    banana.scale = 0.2
    //banana.debug = true
    banana.setCollider("circle", 0, 0, 250)
    foodGroup.add(banana)
      fence.velocityX = -10
   }
  }
  if (gState === "end") {
    text("game over! press r to restart",100,60)
  }
  
  
  //console.log(gState)
  if(banana.x < 0 ){
      score -= 3
      banana.lifetime = 0 
    banana = createSprite(600, Math.round(random(300,500)), 100,  100)
    banana.addImage(bananaImage)
    banana.velocityX = -10
    banana.lifetime = 100
    banana.scale = 0.2
    //banana.debug = true
    banana.setCollider("circle", 0, 0, 250)
    foodGroup.add(banana)  
    }
  if(foodGroup.isTouching(monkey) ){
    score += 1
    banana.lifetime = 0
    banana = createSprite(600, Math.round(random(300,500)), 100,  100)
    banana.addImage(bananaImage)
    banana.velocityX = -10
    banana.lifetime = 100
    banana.scale = 0.2
    //banana.debug = true
    banana.setCollider("circle", 0, 0, 250)
    foodGroup.add(banana)
    } 
  stones();
}

function stones() {
  if (frameCount % Math.round(random(100, 80)) === 0 && gState === "playing") {
    var stone = createSprite(600, 530, 100, 100)
    stone.addImage(obstacleImage)
    stone.velocityX = -10
    stone.lifetime = 100
    stone.scale = 0.2
    //stone.debug = true
    stone.setCollider("circle", 0, 0, 100)
    obstaclesGroup.add(stone)
  }
}
