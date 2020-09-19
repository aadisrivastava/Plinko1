const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Plinko = [];
var Particle=[];
var divisions=[]
var divisionHeight=300;
 
 
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = Engine.world;
  
 // createSprite(400, 200, 50, 50);
 
    ground=new Ground();
    
   
   
    
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,h-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j<=width;j=j+50){
    Plinko.push(new Plinkos(j,75))
    }
    for(var j=15;j<=width-10;j=j+50){
      Plinko.push(new Plinkos(j,175))
      }
      for(var j=40;j<=width-20;j=j+50){
        Plinko.push(new Plinkos(j,275))
        }
        for(var i=0;i<Particles.length;i++){
          Particles[i].display();
        }
        for(var k=0;k<Particles.length;k++){
          divisions[k].display();
        }
        for(var j=0;j<Plinko.length;j++){
          Plinko[j].display();
        }
     
  ground.display();
  drawSprites();
  
}
