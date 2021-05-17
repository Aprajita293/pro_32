const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var backgroundImg;

function preload(){
  polygon_img=loadImage("Polygon.png")

  getBackgroundImage();
}

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  polygon=Bodies.circle(50,200,20)
  World.add(world,polygon)

  slingshot=new Sling(this.polygon,{x:100,y:200})



ground1=new Ground(500,500,1000,30)
ground2=new Ground(390,400,250,20)
ground3=new Ground(715,240,180,13)

//ground2.box
box1=new Box(300,380,30,40)
box2=new Box(330,380,30,40)
box3=new Box(360,380,30,40)
box4=new Box(390,380,30,40)
box5=new Box(420,380,30,40)
box6=new Box(450,380,30,40)
box7=new Box(480,380,30,40)

box8=new Box(330,350,30,40)
box9=new Box(360,350,30,40)
box10=new Box(390,350,30,40)
box11=new Box(420,350,30,40)
box12=new Box(450,350,30,40)

box13=new Box(360,280,30,40)
box14=new Box(390,280,30,40)
box15=new Box(420,280,30,40)

box16=new Box(390,320,30,40)

//ground3.box

box17=new Box(650,200,30,40)
box18=new Box(680,200,30,40)
box19=new Box(710,200,30,40)
box20=new Box(740,200,30,40)
box21=new Box(770,200,30,40)

box22=new Box(680,180,30,40)
box23=new Box(710,180,30,40)
box24=new Box(740,180,30,40)

box25=new Box(710,150,30,40)



}


function draw() {
if(backgroundImg)
  backgroundImg(backgroundImg);

Engine.update(engine);

ground1.display();
ground2.display();
ground3.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();


textSize(20)
fill ("lightyellow");
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40)
slingshot.display();

drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}


function mouseReleased(){
  slingshot.fly()
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon,{x:100,y:200})
    slingshot.attach(polygon)
  }
}

async function getBackgroundImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON=await response.json();

  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13)

  if(hour >= 06 && hour <=18) {
      bg="light.jpg"

  } else {
      bg="dark.jpg"
  }

  backgroundImg=loadImage(bg);
  console.log(backgroundImg)
}




