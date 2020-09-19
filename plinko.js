class Plinkos{
    constructor(x,y,r) {
        var options = {
            isStatic: true
        }
        this.r=10;
        this.body=Bodies.circle(x,y,this.r,options)
    }
    display(){

        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}