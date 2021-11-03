class SlingShot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.1
    }
    this.rope=Constraint.create(options)
    World.add(world,this.rope);
    this.A=bodyA;
    this.B=pointB;
}
display(){
    strokeWeight(4);
    line(this.A.position.x,this.A.position.y,this.B.x,this.B.y);
}
fly(){
    this.rope.bodyA=null;
}
}