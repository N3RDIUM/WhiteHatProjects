const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var GameState = 0;
//reference all enemies to make bullet disappear on contact
enemies = [];
//to add another alien, make another array here:
var hatchlings = [];

var bullets = [];
var ship;
var earth;
var outAfterLine;
var overSoundPlayed = false; //make sure the game over sound does not loop
function preload() {
  bgImage = loadImage("images/background.png");
  overSound = loadSound("sounds/GameLost.wav");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;
  earth = new Earth(
    displayWidth / 2 - 700,
    displayHeight / 2 - 70,
    displayWidth / 2 - 500,
    displayHeight / 2 - 100
  );
  outAfterLine = displayHeight / 2 - 70;
  ship = new SpaceShip(
    displayWidth / 2 - 500,
    displayHeight / 2,
    displayWidth / 7 - 70,
    displayHeight / 7
  );
  enemyShip1 = new AlienSpaceShip(
    displayWidth - 200,
    displayHeight - 750,
    displayWidth / 4,
    displayHeight / 4
  );
  enemyShip2 = new AlienSpaceShip(
    displayWidth - 200,
    displayHeight / 2 - 100,
    displayWidth / 4,
    displayHeight / 4
  );
  enemyShip3 = new AlienSpaceShip(
    displayWidth - 200,
    displayHeight - 300,
    displayWidth / 4,
    displayHeight / 4
  );
}

function draw() {
  background(bgImage);
  Engine.update(engine);
  ship.display();
  ship.move();
  enemyShip1.display();
  enemyShip2.display();
  enemyShip3.display();
  earth.display();
  if (GameState === 0) {
    textSize(20);
    stroke("white");
    text(
      "Save the planet from the invasion of outerspace aliens",
      displayWidth / 2 - 400,
      displayHeight / 2 - 300
    );
    text(
      "Use arrow keys to move and hold space key to shoot",
      displayWidth / 2 - 400,
      displayHeight / 2 - 250
    );
    text(
      "To start the game press R",
      displayWidth / 2 - 400,
      displayHeight / 2 - 200
    );
    if (keyDown("R")) {
      GameState = 1;
    }
  }
  if (GameState === 2) {
    textSize(20);
    stroke("white");
    text("Game Over!", displayWidth / 2 - 400, displayHeight / 2 - 300);
    if (keyDown("R")) {
      GameState = 1;
    }
    bullets.pop();
    hatchlings.pop();
    if (!overSoundPlayed) {
      overSound.play();
      overSoundPlayed = true;
    }
  }
  //every time you add another character, display it here, replace hatchling with your character group
  for (var i in hatchlings) {
    hatchlings[i].display();
  }
  for (var i in bullets) {
    bullets[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
