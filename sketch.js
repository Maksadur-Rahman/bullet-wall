
var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(2000,400);
  speed=random(180,500);
  thickness=random(245,144);
  weight=random(400,1500);
  
  bullet=createSprite(50,200,20,20);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,60,height/2);
}

function draw() {
  background(255,255,255);  

if(hasCollided(bullet,wall)){

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
wall.shapeColor=color(220,0,0);
bullet.velocityX=0;

}

if(damage<10){

  wall.shapeColor=color(0,330,0);
  bullet.velocityX=0;

}


}
//hasCollided(lbullet,lwall);
drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
  
    return true;
  }
  
  return false;
  
  }

