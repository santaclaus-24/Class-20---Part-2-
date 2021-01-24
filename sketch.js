var rec1, rec2 ;

function setup() {

  createCanvas(1500,900);

  rec1 = createSprite(300,100,50, 50);
  rec1.shapeColor = "red";

  rec1.velocityX = 3;

  rec2 = createSprite(1200,100,50,50);
  rec2.shapeColor = "red";

  rec2.velocityX = -3;
}

function draw() {

  background(0);

  if(rec2.x - rec1.x < rec1.width/2 + rec2.width/2 && 
    rec1.x - rec2.x < rec1.width/2 + rec2.width/2){

      rec1.velocityX = rec1.velocityX * (-1);
      rec2.velocityX = rec2.velocityX * (-1);
    }
     
    if(rec2.y - rec1.y < rec1.height/2 + rec2.height/2 && 
      rec1.y - rec2.y < rec1.height/2 + rec2.height/2){

        rec1.velocityY = rec1.velocityY * (-1);
        rec2.velocityY = rec2.velocityY * (-1);
  }

  drawSprites();
}