const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg
var snowman
var boy
var ground
var score

let snow = [];


function preload(){
backgroundImg=loadImage("snow1.jpg")

boy=loadImage("boy.png")



}

function setup() {
  createCanvas(1365,625);
  snow.push(new Snowflake());
  engine = Engine.create();
    world = engine.world;
    
score=0
   
    ground=new Ground(670,620,1400,30)
    snowman=new Snowman(1200,260,200,280)

}

function draw() {
  background(backgroundImg)  

for(flake of snow){
  flake.update();
  flake.render();
}

  Engine.update(engine);
 
  image(boy ,360,260,200,280);

  noStroke();
        textSize(35)
        fill("black")
        text("Score  " + score, width-300, 50)
 

  ground.display()
  snowman.display()
 
  
  
  
  drawSprites();
}




  