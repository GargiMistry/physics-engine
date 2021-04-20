const Engine = Matter.Engine;
const World  = Matter.World ;
const Bodies = Matter.Bodies;

var myEngine,myWorld,box1;

function setup(){
    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld  = myEngine.world;
    
    box1 = Bodies.rectangle(200,50,100,50);
    World.add(myWorld,box1);


}

function draw(){
    background(0);

    Engine.update(myEngine);

    rect(box1.position.x,box1.position.y,100,50);
    console.log(box1.position.x,box1.position.y);

}