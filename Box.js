class Box {

    constructor(x,y,width,height){

        var boun = {
            restitution : 1.3
        }

        this.body = Bodies.rectangle(x,y,width,height,boun);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body); 
    
    }

    display(){

        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}