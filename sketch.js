const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,380,400,20);

    box=new Box(200,200,50,50);

    box1=new Box(200,150,50,80)
}

function draw(){
    background(0);
    Engine.update(engine);
   ground.display();
   box.display();
   box1.display();
}
