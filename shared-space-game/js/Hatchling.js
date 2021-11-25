//NOTE:add js files to index.html or else it will not work!
class Hatchling {
  constructor() {
    this.y = random(100, displayWidth - 100);
    var options = { isStatic: true, frictionAir: 0, restitution: 0 };
    //to make another alien, just make a new js file in the js folder, and paste this code in it. replace the image in loadImage.
    this.image = loadImage("images/Hatchling.png");
    this.body = Bodies.rectangle(1100, this.y, 30, 50, options);
    World.add(world, this.body);
    this.sprite = createSprite(1100, this.y, 30, 30);
    this.sprite.addImage(this.image);
    this.sprite.scale = 0.1;
    this.body.position.y = ship.body.position.y;
    this.canDamage = true;
  }
  display() {
    if (GameState == 1) {
      var pos = this.body.position;
      push();
      this.sprite.x = pos.x;
      this.sprite.y = pos.y;
      //make the alien move left
      pos.x -= 10;
      pop();
      //console.log(pos)
        for (var i in bullets) {
          if (this.sprite.isTouching(bullets[i].sprite) && bullets[i].damage) {
            this.sprite.visible = false;
            this.canDamage = false;
          }
        }
      if (this.sprite.x < outAfterLine && this.canDamage == true) {
        GameState = 2;
      }
    } else {
      this.sprite.visible = false;
    }
  }
}
