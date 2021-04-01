const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render=Matter.Render;

var wall1,wall2,wall3;
var earth,paper;
function setup(){
    var canvas = createCanvas(1360,657);
    engine = Engine.create();
    world = engine.world;

    paper=new ball(180,50,50);
		earth=new ground(680,580,width,20);
    wall1=new box(1165,560,280,20);
		wall2=new box(1030,495,20,150);
		wall3=new box(1300,495,20,150);

    /*var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width:1200,
        height: 700,
        wireframe: false
      }

    });*/

    Engine.run(engine);
}  
function draw(){
    background(0);
    Engine.update(engine);

	earth.display();
	wall1.display();
	wall2.display();
	wall3.display();
  paper.display();
}
function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:135,y:-135});
}
}
