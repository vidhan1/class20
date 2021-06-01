var fixed, moving;

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(400, 200, 50, 70);
  fixed.debug = true;
  moving = createSprite(600, 200, 70, 50);
  moving.debug = true;

  moving.velocityX = -3;
  fixed.velocityX = 3;  
}

function draw() {
  background(0); 
  //moving.x = mouseX;
  //moving.y = mouseY; 

  //DETECTING COLLISION
  if(fixed.x - moving.x <= fixed.width/2 + moving.width/2
    && moving.x - fixed.x <= fixed.width/2 + moving.width/2
    && fixed.y - moving.y <= fixed.height/2 + moving.height/2
    && moving.y - fixed.y <= fixed.height/2 + moving.height/2){
    fixed.shapeColor = "red";
    moving.shapeColor = "red";
  }
  else{
    fixed.shapeColor = "green";
    moving.shapeColor = "green";
  }

  //BOUNCING ALGORITHM
  if(fixed.x - moving.x <= fixed.width/2 + moving.width/2
    && moving.x - fixed.x <= fixed.width/2 + moving.width/2){
      moving.velocityX = moving.velocityX*(-1);
      fixed.velocityX = fixed.velocityX*(-1);

    }
    if(fixed.y - moving.y <= fixed.height/2 + moving.height/2
      && moving.y - fixed.y <= fixed.height/2 + moving.height/2){
        moving.velocityY = moving.velocityY*(-1);
        fixed.velocityY = fixed.velocityY*(-1);
  
      }
  
  drawSprites();
}

/*
ALGORITHM
  Process/Logic to solve a problem
Computer Algorithm : The instructions given to a computer to solve a problem

Pre-defined Algorithms:
  1. to detect collision between objects --> isTouching()
  2. to make two objects bounce when they come in contact --> bounceOff()/bounce()
*/