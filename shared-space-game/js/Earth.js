class Earth {
  constructor(x, y, width, height) {
    var options = { isStatic: true, frictionAir: 0, restitution: 0 };
    this.earth1 = loadImage("images/Earth1.png");
    this.earth2 = loadImage("images/Earth2.png");
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.earth1, 0, 0, this.width, this.height);
    pop();
  }
}
