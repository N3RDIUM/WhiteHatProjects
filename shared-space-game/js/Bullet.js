class Bullet {
  constructor() {
    var options = { isStatic: true, frictionAir: 0, restitution: 0 };
    this.image = loadImage("images/SpaceShipBullet.png");
    this.body = Bodies.rectangle(300, 200, 30, 50, options);
    World.add(world, this.body);
    this.sprite = createSprite(300, 200, 30, 30);
    this.sprite.addImage(this.image);
    this.sprite.scale = 0.2;
    this.body.position.y = ship.body.position.y;
    this.startFrame = frameCount;
    this.damage = true;
    this.used = false; //to check whether bullet has hit an enemy
  }
  display() {
    var pos = this.body.position;
    push();
    //move our sprite to the body's position, so we can see it
    this.sprite.x = pos.x;
    this.sprite.y = pos.y;
    //move the bullet by 10 pixels every frame
    pos.x += 10;
    pop();
    for (var i in enemies) {
      if (
        frameCount > this.startFrame + 100 ||
        this.sprite.isTouching(enemies[i].sprite || this.used)
      ) {
        var newFrame = frameCount;
        //wait some time before disappear or it will not damage the enemy
        if (frameCount == newFrame + 20) {
          this.damage = false;
          this.sprite.visible = false;
        }
        this.used = true;
      }
    }
    //console.log(pos)
  }
}
