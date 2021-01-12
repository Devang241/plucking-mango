const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1400,650);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1100,550,700,10)

    mango = new Mango(1000,50,50,20)
    mango1 = new Mango(1100,50,50,20)
    mango2 = new Mango(850,200,50,20)
    mango3 = new Mango(1300,200,50,20)
    mango4 = new Mango(1050,150,50,20)
    mango5 = new Mango(1200,150,50,20)
    mango6 = new Mango(1150,100,50,20)
    mango7 = new Mango(1150,150,50,20)
    mango8 = new Mango(940,130,50,20)
    mango9 = new Mango(1000,200,50,20)
    mango10 = new Mango(920,230,50,20)
    mango11 = new Mango(1150,240,50,20)
    mango12 = new Mango(1070,230,50,20)
    mango13 = new Mango(1250,120,50,20)
    tree = new Tree(800,10)
    boy = new Boy(200,450)
    stone = new Stone(240,550,10,10)
    slingShot = new SlingShot(stone.body,{x:240, y:500});
}

function draw(){
    background(255);
    Engine.update(engine);

   
    detectollision(stone,mango);
    detectollision(stone,mango1);
    detectollision(stone,mango2);
    detectollision(stone,mango3);
    detectollision(stone,mango4);
    detectollision(stone,mango5);
    detectollision(stone,mango6);
    detectollision(stone,mango7);
    detectollision(stone,mango8);
    detectollision(stone,mango9);
    detectollision(stone,mango10);
    detectollision(stone,mango11);
    detectollision(stone,mango12);
    detectollision(stone,mango13);

//stone TOUCH Mango felldown

    ground.display();

    tree.display();
    mango.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();
    mango12.display();
    mango13.display();
    boy.display();
    stone.display();
    slingShot.display();
     fill(0);
     textSize(20)
    text("press space bar for second chance",200,100);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.height+lstone.height||distance<=lmango.width+lstone.width)
    {
    
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:240, y:550}) 
	  slingShot.attach(stone.body);
	}
  }

