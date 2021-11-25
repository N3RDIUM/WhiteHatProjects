class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB
        this.Slingshot = Constraint.create(options)
        World.add(world,this.Slingshot)
    }

    fly(){
        this.Slingshot.bodyA = null
    }

    display(){
        if(this.Slingshot.bodyA != null){
            //console.log("hi!")
            var pta,ptb;
            pta = this.Slingshot.bodyA.position
            ptb = this.pointB
            strokeWeight(5)
            line(pta.x,pta.y,ptb.x,ptb.y)
        }
    }
}