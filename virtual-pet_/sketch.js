var database,dog,dog1,dog2,foodstock,foodS,frame,hunger,dogImg,lives;

function preload(){
  dog1=loadImage("dogImg.png");
  dog2=loadImage("dogImg1.png");
}

function setup(){
  createCanvas(500,745);
  dogImg = dog1
  frame = 0
  hunger = 30
  dog=createSprite(250,600,30,30);
  dog.scale=0.7;
  dog.addImage(dogImg);
  database=firebase.database();
  foodS = database.ref('food');
  foodS.on("value",readstock);
  database.ref('/').update({food:10});
  lives=10
}

function draw(){  
  background("green")
  if(lives>0){
    if(keyWentDown(UP_ARROW)){
      writestock(foodS);
      dogImg = dog2
      frame = frameRate
      hunger+=10
    }
    if(frameRate===frame+500){dogImg = dog1}
    if(frameCount%100===0){foodS+=1; database.ref('/').update({food:foodS});}
    if(frameCount%30===0){if(hunger>0){hunger-=1}}
    fill("black")
    textSize(20)
    text("food remaining: "+foodS,30,30);
    text("lives remaining: "+lives,30,70);
    text("dog will be hungry in: "+hunger,30,110);
    if(hunger===0){
      if(frameCount%30===0){if(lives>0){lives-=1}}
      text("DOG IS HUNGRY!",30,150)
      dogImg=dog1
    }
    if(dogImg===dog1){
    dog.addImage(dog1);
    }
    else{
      dog.addImage(dog2);
    }
  }

  if(lives===0){
    text("GAME OVER",30,190)
  }
    //console.log(foodS)
    drawSprites();
}

  function readstock(data){
  foodS=data.val();
  }
  
  
function writestock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({food:x});
}