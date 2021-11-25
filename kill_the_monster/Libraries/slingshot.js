class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA) {
        var bodyA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(0);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }

    fly() {
        this.sling.bodyA = null;
    }
    
}