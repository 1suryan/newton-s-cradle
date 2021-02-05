var roof
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
     

	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  d=40
	bob1 = new Bob(width/2-2*d, height/4+500,d)	
	bob2 = new Bob(width/2-d, height/4+500,d)	
	bob3 = new Bob(width/2, height/4+500,d)	
	bob4 = new Bob(width/2+d, height/4+500,d)	
	bob5 = new Bob(width/2+2*d, height/4+500,d)	

	roof = new Roof(width/2,height/4,width/7,20)

chain1 = new Chain (bob1.body,roof.body,-2*d)
chain2 = new Chain (bob2.body,roof.body,-d)
chain3 = new Chain (bob3.body,roof.body,0)
chain4 = new Chain (bob4.body,roof.body,d)
chain5 = new Chain (bob5.body,roof.body,2*d)
}


function draw() {
	background(255);
	
	rectMode(CENTER);
roof.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()

chain1.display()
chain2.display()
chain3.display()
chain4.display()
chain5.display()


  drawSprites();
 
}

function keyPressed() {

	if(keyCode == UP_ARROW) {

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50, y:-45})
		
	}


}

