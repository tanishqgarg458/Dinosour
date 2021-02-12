
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  monkey = createSprite(50,540,20,50);
 monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,580,1200,20);
 
  ground.x = ground.width /2;
  ground.velocityX = -5
  
  bananaGroup = new Group()
 obstacleGroup = new Group()
}


function draw() {
  background("white")
  monkey.collide(ground)
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
     
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  spawnBananas()
  spawnObstacle()
  drawSprites();
  

  
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
   
     
    banana.y = Math.round(random(450,560));
    banana.addImage(bananaImage);
  banana.scale = 0.1;
banana.velocityX = -3
    
     //assign lifetime to the variable
    banana.lifetime = 180;
        
    //adding cloud to the group
   bananaGroup.add(banana);
    }
   
}

function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     obstacle = createSprite(600,550,40,10);
   
     
  //  obstacle.y = Math.round(random(450,560));
    obstacle.addImage(obstacleImage);
 obstacle.scale = 0.1;
obstacle.velocityX = -3
    
     //assign lifetime to the variable
    obstacle.lifetime = 180;
        
    //adding cloud to the group
   obstacleGroup.add(obstacle);
    }
   
}




