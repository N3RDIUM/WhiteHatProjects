var row,database,dog,dog1,dog2,foodstock,foodS,frame,hunger,dogImg,lives,rows,l,l2;

function preload(){
  dog1=loadImage("dogImg.png");
  dog2=loadImage("dogImg1.png");
  milk = loadImage("Milk.png")
}

function setup(){
  createCanvas(1590,745);
  row=30
  l=0
  l2=0
  dogImg = dog1
  frame = 0
  hunger = 30
  dog=createSprite(1590/2,745/2,30,30);
  dog.scale=0.7;
  dog.addImage(dogImg);
  database=firebase.database();
  foodS = database.ref('food');
  foodS.on("value",readstock);
  database.ref('/').update({food:10});
  lives=10
  feed = createButton("FEED THE DOG")
  feed.position(500,15)
  feed.mousePressed(FeedDog)
  add = createButton("ADD FOOD")
  add.position(400,15)
  add.mousePressed(AddFood)
}

function draw(){  
  background("green")
  if(lives>0){
    /*if(keyWentDown(UP_ARROW)){
      writestock(foodS);
      dogImg = dog2
      frame = frameRate
      hunger+=10
    }*/
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
  l=foodS
  for(var i=0;i<10;i++){
  for(l;l>0;l--){
    image(milk,row,(l*60)+80)
  }

}
  drawSprites();
}

function readstock(data){
foodS=data.val();
}
  
  
function writestock(x){
  if(x<=0){
    x=0;
  }
  else if(x==1){
    x=x+1;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({food:x});
}

function AddFood(){
  foodS+=1; database.ref('/').update({food:foodS});
}

function FeedDog(){
  dogImg = dog2
  frame = frameRate
  if(foodS>0){
  hunger+=10
  }
  if(foodS>1){
  writestock(foodS)
  }
  else{
    database.ref('/').update({food:foodS-1});
  }
}
