var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  console.log(score)
  background(bg);
  clues();

  text("score: "+score,500,100)

  if(score === 3){
    clear()
    background(bg2)
    fill("black")
    textSize(40)
    text("Treasure Unlocked!",250,200)
  }
  security.refresh()
  drawSprites()
}