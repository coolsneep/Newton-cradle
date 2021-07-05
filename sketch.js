const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball,ball2,ball3,ball4,ball5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(375,100,230,20,roof_options);
    World.add(world,roof);
	
	var ball_options = {
		restitution: 0.8
	  }
	ball = Bodies.circle(300,300,16,ball_options);
	ball2 = Bodies.circle(332,300,16,ball_options);
	ball3 = Bodies.circle(364,300,16,ball_options);
	ball4 = Bodies.circle(398,300,16,ball_options);
	ball5 = Bodies.circle(440,300,16,ball_options);
	World.add(world,ball);
	World.add(world,ball2);
	World.add(world,ball3);
	World.add(world,ball4);
	World.add(world,ball5);
	con = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });
	con2 = Matter.Constraint.create({
		pointA:{x:340,y:100},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });
	con3 = Matter.Constraint.create({
		pointA:{x:380,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });
	con4 = Matter.Constraint.create({
		pointA:{x:420,y:100},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });
	con5 = Matter.Constraint.create({
		pointA:{x:460,y:100},
		bodyB:ball5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });
	World.add(world,con);
	World.add(world,con2);
	World.add(world,con3);
	World.add(world,con4);
	World.add(world,con5);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
  
  pop();
  
  //create ellipse shape for multiple bobs here
ellipse(ball3.position.x,ball3.position.y,16)
ellipse(ball.position.x,ball.position.y,16)
ellipse(ball2.position.x,ball2.position.y,16)
ellipse(ball4.position.x,ball4.position.y,16)
ellipse(ball5.position.x,ball5.position.y,16)


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode===LEFT_ARROW)
    {
      Matter.Body.applyForce(ball,ball.position,{x:-0.01,y:0});
    }
	if(keyCode===RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,ball.position,{x:0.01,y:0});
    }
}