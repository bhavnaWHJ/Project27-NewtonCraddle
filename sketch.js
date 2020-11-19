
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 150;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 850);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,550);
	bob2 = new Bob(280,550);
	bob3 = new Bob(360,550);
	bob4 = new Bob(440,550);
	bob5 = new Bob(520,550);

	roof = new Roof(550,100,800,40);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body, -bobDiameter,0);
	rope3 = new Rope(bob3.body, roof.body, 0,0);
	rope4 = new Rope(bob4.body, roof.body,bobDiameter,0);
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*2,0)
	console.log(rope1)



	Engine.run(engine);
  
}


function draw() {
  background(0);
   
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //keyPressed();

  
  //drawSprites();
 
}
function keyPressed(){

	if(keyCode === UP_ARROW){

		Body.applyForce(bob1.body, bob1.body.position,{x:50,y:50});

	}

	if(keyCode === DOWN_ARROW){
		Body.applyForce(bob5.body,bob5.body.position,{x:-100,y:100});
	}

	
}



