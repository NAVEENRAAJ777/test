class box{
    constructor(x,y,width,angle){
        var options={
            'restitution':2.0,
            'friction':1.0,
            'density':2.0
            }
            this.body=bodies.rectangle(x,y,width,angle)
            this.width=width
            Matter.body.setAngle()
            World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWidth(4);
        stroke("white")
        fill("black");
        rect(0,0,this.width,angle)
        pop();

    }
}