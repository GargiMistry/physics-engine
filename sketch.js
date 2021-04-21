const Engine = Matter.Engine;
const World  = Matter.World ;
const Bodies = Matter.Bodies;

var myEngine,myWorld,box1,box2,ground;

function setup(){
    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld  = myEngine.world;

    var abc = {
        isStatic : true
    }

    ground = Bodies.rectangle(600,590,1200,12,abc);
    World.add(myWorld,ground);

    box1=new Box(50,200,90,80);
    box2=new Box(225,300,60,50);
    box3=new Box(325,400,160,50);
    box4=new Box(425,500,60,250);


}

function draw(){ 

    background(0);

    Engine.update(myEngine);

    rectMode(CENTER);
    fill("grey");
    rect(ground.position.x,ground.position.y,1200,12);
    fill("yellow");
    box1.display();
    fill("crimson");
    box2.display();
    fill("green");
    box3.display();
    fill("deeppink");
    box4.display();


}