const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
	world = engine.world;
  ground = Bodies.rectangle(30,690, width, 10 , {isStatic:true} );
  World.add(world, ground);
  slab = Bodies.rectangle (400,500,250,40 , {isStatic:true})
  World.add(world, slab)
  slab2 = Bodies.rectangle (1150,500,250,40 , {isStatic:true})
  World.add(world, slab)
polygon = new Polygon ()
box1 = new Block (500,300,80,50)
sling = new Slingshot(polygon.body,{x:200,y:100})

}

function draw() {
  background('blue');
  Engine.run(engine);  
  rect(ground.position.x,ground.position.y,width,10);
  rect(slab.position.x,slab.position.y,250,40);
  rect(slab2.position.x,slab2.position.y,250,40);
  polygon.display()
  box1.display()
  sling.display()
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(polygon.body,polygon.body.position,{x:12,y:-13})
	 }
   }
 function mouseDragged (){

Matter.Body.setPosition (polygon.body,{x:mouseX,y:mouseY})


 }
function mouseReleased(){

sling.fly()




}
