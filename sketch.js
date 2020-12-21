var back1, back2, back3, track1, track2, track3
var player, playerCar, playerSprite
var zombieMove, zombieIdle;
var zombieGroup;

function preload()
{
	track = loadImage("Images/desertroadOFFICIAL.png")
	playerCar = loadImage("Images/carOfficial.png");

  zombieMove = loadAnimation("Images/zombieOFFICIAL/Move/skeleton-move_0.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_1.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_2.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_3.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_4.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_5.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_6.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_7.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_8.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_9.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_10.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_11.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_12.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_13.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_14.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_15.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_16.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);

  back1 = createSprite(windowWidth/2, windowHeight, 1000,500);
  back1.addImage(track);
  back1.scale = 0.9;

  player = createSprite(windowWidth/2, windowHeight/2+400,20,50);
  player.addImage("player_driving", playerCar);
  player.scale = 0.05;

  zombieGroup= new Group();
  
}


function draw() {
  rectMode(CENTER);
  background(125);
   text(mouseX+","+mouseY,mouseX,mouseY);
  camera.position.x=windowWidth/2;
  camera.position.y=player.y;

  if(keyDown(UP_ARROW))
  {
	  player.y = player.y - 5;
  }

  spawnZombies();

  for(var i=0;i<zombieGroup.length;i++)
  {
    if(zombieGroup.get(i).isTouching(player))
    {
      zombieGroup.get(i).destroy();
      
    }
  }


  drawSprites();
 
}

function spawnZombies() {
	//write code here to spawn the zombies
	if (frameCount % 40 === 0) {
	  var zombie = createSprite(Math.round(random(windowWidth/2-200,windowWidth/2+300)),Math.round(random(-50,-200)));
	  zombie.y = Math.round(random(80,120));
    zombie.addAnimation("moving",zombieMove);
    zombie.rotation=90;
	  zombie.scale = 0.5;
	  zombie.velocityY = 3;
	  
	   //assign lifetime to the variable
	  zombie.lifetime = 200;
	
	  //add each zombie to the group
	  zombieGroup.add(zombie);
  }
}

