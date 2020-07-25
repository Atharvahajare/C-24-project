class  paper{
    constructor(x,y,width,height){
        var options = {
            'isstatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
   World.add(world,this.body)
    }
    display(){
        var p = this.body.position
        var angle = this.body.angle
        push();
        fill("red")
        rectMode(CENTER)
        translate(p.x,p.y)
        rect(0,0,this.width,this.height)
        pop()
    }
}