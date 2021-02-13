var INTRODUCTION=0;
var LEVEL1=1;
var END=4;
var LEVEL2=2;
var WIN=5;
var shooter,shooterImg;
var backGround1;
var bullets,bulletsGroup;
var zombies1,zombiesGroup1,zombiesAnimation;
var zombies2,zombiesGroup2;
var zombies3,zombiesGroup3;
var zombies4,zombiesGroup4;
var zombies7,zombiesGroup7;
var Ammo=50;
var Ammo2=50;
var score2=40;
var Ammo3=50;
var score3=50;
var ammoImg,ammoSprite;
var score=30;
var scoreSprite,scoreImg;
var gameOver,gameOverImg;
var lives=3;
var lifesSprite,lifesImg;
var IntroductionImg;
var fireSound;
var outOfAmmo;
var level2backGround;
var horrorSound;
var LEVEL3=3;
var zombies5,zombiesGroup5;
var zombies6,zombiesGroup6;


function preload(){

  shooterImg=loadImage("Shooting.png");
  backGround1=loadImage("backGround1.jpg");
  bulletImg=loadImage("Bullet.png");
  zombiesAnimation=loadAnimation("Zombie1.png","Zombie2.png","Zombie3.png","Zombie4.png","Zombie5.png","Zombie6.png","Zombie7.png","Zombie8.png","Zombie9.png","Zombie10.png");
  
  ammoImg=loadImage("Ammo.png");
  lifeImg=loadImage("Lifes.png");
  scoreImg=loadImage("Score.png");
  gameOverImg=loadImage("GameOver.jpg");
  IntroductionImg=loadImage("Introduction.jpg");
  fireSound=loadSound("Fire.mp3");
  outOfAmmo=loadSound("noFire.mp3");
  level2backGround=loadImage("Level 2 backGround.jpg");
  horrorSound=loadSound("gameOver.mp3");
  level3backGround=loadImage("Level3.jpg");

  
}
function setup() {
  
  createCanvas(600,500);
  
  shooter=createSprite(90,400);
  shooter.addImage(shooterImg);
  shooter.scale=0.4;
  
  AmmoSprite=createSprite(50,50);
  AmmoSprite.addImage(ammoImg);
  AmmoSprite.scale=0.15; 
  
  scoreSprite=createSprite(350,50);
  scoreSprite.addImage(scoreImg);
  scoreSprite.scale=0.1;
  
  gameOver=createSprite(300,250);
  gameOver.addImage(gameOverImg);
  gameOver.scale=2;
  
  lifesSprite=createSprite(200,50);
  lifesSprite.addImage(lifeImg);
  lifesSprite.scale=0.04;
  

  
  bulletsGroup=new Group();
  
  zombiesGroup1=new Group(); 
  
  zombiesGroup2=new Group();
  
  zombiesGroup3=new Group();
  
  zombiesGroup4=new Group();
  
  zombiesGroup5=new Group();
  
  zombiesGroup6=new Group();
  
  zombiesGroup7= new Group();
  
  gameState=INTRODUCTION;
  
}

function draw() {
      
     background("white");
  
     
  
       shooter.setCollider("rectangle",-2,0,250,250);     
  
       if(gameState===LEVEL1){ 
         
             background(backGround1);  
         
       fill("green");
       textSize(25);
       text("x"+Ammo,100,60);
       
       fill("white");
       textSize(15);  
       text("Number of Zombies Left:"+score,380,50 ); 
         
       fill("yellow");
       textSize(20);
       text("x"+lives,230,50);  
         
        gameOver.visible=false; 
         
       if(keyDown("UP_ARROW") && shooter.y>358 ){
         
        shooter.y=shooter.y-2;
        
         }  
         
        if(score>0){ 
          
          if(keyDown("DOWN_ARROW") && shooter.y<422){
         
        shooter.y=shooter.y+2;
        
         }
         
         if(keyDown("space") && Ammo>0 ){
         
        spawnBullets();
        Ammo=Ammo-1;
        fireSound.play();
           
         }
       }
         if(keyDown("space") && Ammo===0 ){
         
         outOfAmmo.play();
           
         }
         
         if(bulletsGroup.isTouching(zombiesGroup1) && score>0 ){
         
        bulletsGroup.destroyEach();
        zombiesGroup1.destroyEach();
        score=score-1;
        
         }
  
  if(bulletsGroup.isTouching(zombiesGroup2) && score>0){
         
        bulletsGroup.destroyEach();
        zombiesGroup2.destroyEach();
        score=score-1;
    
         }
      
  if(bulletsGroup.isTouching(zombiesGroup3) && score>0 ){
         
        bulletsGroup.destroyEach();
        zombiesGroup3.destroyEach();
        score=score-1;     
    
         }
  
  if(score>0){       
  spawnZombies1();
  spawnZombies2();
  spawnZombies3();
       }  
         
  if(score===0){
    
    zombiesGroup1.destroyEach();
    zombiesGroup2.destroyEach();
    zombiesGroup3.destroyEach();
    
     } 
         
  drawSprites();
         
   if(score===0 && gameState===LEVEL1 ){
    
    background(backGround1);  
         
       fill("green");
       textSize(25);
       text("x"+Ammo,100,60);
       
       fill("white");
       textSize(15);  
       text("Number of Zombies Left:"+score,380,50 ); 
         
       fill("yellow");
       textSize(20);
       text("x"+lives,230,50);  
         
        gameOver.visible=false; 
    shooter.velocityX=5;
    
    drawSprites();
    
     }
  
  
         
          }
  
   
  if(shooter.x===620 && gameState===LEVEL1 ){
     
    shooter.x=-20;
    
     }
  
  if(shooter.x===-20 && gameState===LEVEL1){
    
    gameState=LEVEL2;
    shooter.velocityX=5;
    Ammo2=Ammo+50;
    
     }        
  
  
  if(gameState===INTRODUCTION){
          
         background(IntroductionImg);
         
         fill("lightblue");
         textSize(20);
         text("This City has met a big Zombie Invasion .",25,50);
         
          fill("lightblue");
         textSize(20);
         text("You are the only one to survive in this city.",25,75);
         
         fill("lightblue");
         textSize(20);
         text("But this won't last so long if you don't listen to me.",25,100);
    
    fill("lightblue");
         textSize(20);
         text("You will face 3 levels,number of zombies will differ in each level.",25,125);
    
    fill("lightblue");
         textSize(20);
         text("You only have 3 lives throughout the game.",25,150);
    
    fill("lightblue");
         textSize(20);
         text("Use arrow keys to move and Use space key to shoot.",25,175);
    
    fill("lightblue");
         textSize(20);
         text("Once you kill all the zombies,you can move to next level.",25,200);
    
    fill("lightblue");
         textSize(20);
         text("You will be rewarded with 50 bullets in each level.",25,225);
    
    fill("lightblue");
         textSize(20);
         text("Once you finsh 3rd level you will be free to escape.",25,250);
    
    fill("lightblue");
         textSize(20);
         text("If a zombie touches your special gun, automattically",25,275);
    
    fill("lightblue");
         textSize(20);
         text("it will shoot the zombie,But however you will lose a life",25,300);
    
    fill("lightblue");
         textSize(20);
         text("Remember If a zombie touches you and if you are out of Ammo",25,325);
    
    fill("lightblue");
         textSize(20);
         text("You will automattically lose all your lifes",25,350);
      fill("red");
         textSize(50);
    
      fill("red");
         textSize(50);
         text("Press S to start.",150,400);
    
          }
  
  
  
  
  if(gameState===LEVEL2){
     
     background(level2backGround);  
         
    console.log(mouseY);
  
    if(shooter.x===90){
       
      shooter.velocityX=0;
      
       }

       fill("green");
       textSize(25);
       text("x"+Ammo2,100,60);
       
       fill("white");
       textSize(15);  
       text("Number of Zombies Left:"+score2,380,50 ); 
         
       fill("yellow");
       textSize(20);
       text("x"+lives,230,50);  
         
        gameOver.visible=false; 
    
       if(keyDown("UP_ARROW") && shooter.y>392 ){
         
        shooter.y=shooter.y-2;
        
         }  
         
         if(keyDown("DOWN_ARROW") && shooter.y<430){
         
        shooter.y=shooter.y+2;
        
         }
         
         if(keyDown("space") && Ammo2>0 ){
         
        spawnBullets();
        Ammo2=Ammo2-1;
        fireSound.play();
           
         }
         
         if(keyDown("space") && Ammo2===0 ){
         
         outOfAmmo.play();
           
         }
         
         if(bulletsGroup.isTouching(zombiesGroup4) && score2>0 ){
         
        bulletsGroup.destroyEach();
        zombiesGroup4.destroyEach();
        score2=score2-1;
        
         }
    
    if(score2>0){       
  spawnZombies4();
       }  
         
  if(score2===0){
    
    zombiesGroup4.destroyEach();
    
     } 
    
    drawSprites();
    
     }
  
    if(score2===0 && gameState===LEVEL2 ){
    
    background(level2backGround);  
         
       fill("green");
       textSize(25);
       text("x"+Ammo2,100,60);
       
       fill("white");
       textSize(15);  
       text("Number of Zombies Left:"+score2,380,50 ); 
         
       fill("yellow");
       textSize(20);
       text("x"+lives,230,50);  
         
        gameOver.visible=false; 
    shooter.velocityX=5;
      
    drawSprites();
    
     }
  
  if(shooter.x===620 && gameState===LEVEL2 ){
     
    shooter.x=-25
    
     }
  
  if(shooter.x===-25){
     
    gameState=LEVEL3;
    shooter.velocityX=5;
    Ammo3=Ammo2+50;
    
     }
  
  if(gameState===LEVEL3){
     
    background(level3backGround);
    
    if(shooter.x===90){
       
      shooter.velocityX=0;
      
       }
    
    fill("green");
       textSize(25);
       text("x"+Ammo3,100,60);
       
       fill("white");
       textSize(15);  
       text("Number of Zombies Left:"+score3,380,50 ); 
         
       fill("yellow");
       textSize(20);
       text("x"+lives,230,50); 
       
       gameOver.visible=false;
    
       if(keyDown("UP_ARROW") && shooter.y>365 ){
         
        shooter.y=shooter.y-2;
        
         }  
         
         if(keyDown("DOWN_ARROW") && shooter.y<430){
         
        shooter.y=shooter.y+2;
        
         }
         
         if(keyDown("space") && Ammo3>0 ){
         
        spawnBullets();
        Ammo3=Ammo3-1;
        fireSound.play();

         }

    if(score3>0){
               
           spawnZombies5();
           spawnZombies6();
           spawnZombies7();     
      
       }
    
       drawSprites();
    
    if(score3===0){
    
    zombiesGroup5.destroyEach();
    
     } 
    
    if(score3===0){
    
    zombiesGroup6.destroyEach();
    
     } 
    
     }
  
  if(score3===0 && gameState===LEVEL3){
     
    gameState=WIN;
    
     }
  
  if(gameState===WIN){
     
    background("lightgreen");
    fill("blue");
    textSize(50);
    text("YOU WIN",200,200);
    
    fill("red");
    textSize(20);
    text("Press r to restart ",250,300);
    
     }

  if(keyDown("r") && gameState===WIN ){
     
    gameState=LEVEL1;
    
     }
  
  if(bulletsGroup.isTouching(zombiesGroup5)){
     
    zombiesGroup5.destroyEach();
    bulletsGroup.destroyEach();
    score3=score3-1; 
    
     }
  
  if(bulletsGroup.isTouching(zombiesGroup6)){
     
    zombiesGroup6.destroyEach();
     bulletsGroup.destroyEach();
    score3=score3-1; 
     }
  
  if(bulletsGroup.isTouching(zombiesGroup7)){
     
    zombiesGroup7.destroyEach();
     bulletsGroup.destroyEach();
    score3=score3-1; 
    
     }
  
    if(keyDown("s") && gameState===INTRODUCTION ){
       
      gameState=LEVEL1;
      
       }
  
   if(zombiesGroup1.isTouching(shooter) && Ammo>0 ){
      
     spawnBullets();
     fireSound.play();
     lives=lives-1;
     zombiesGroup1.destroyEach();
     
      }
  
  
     if(zombiesGroup1.isTouching(shooter) && Ammo===0 ){
      
     
     lives=lives-1;
     
      }
  
  if(zombiesGroup2.isTouching(shooter) && Ammo>0 ){
      
     spawnBullets();
     fireSound.play();
     lives=lives-1;
      zombiesGroup2.destroyEach();
      }
  
     if(zombiesGroup2.isTouching(shooter) && Ammo===0 ){
      
     
     lives=lives-1;
     
      }
  
  if(zombiesGroup3.isTouching(shooter) && Ammo>0 ){
      
     spawnBullets();
     fireSound.play();
     lives=lives-1;
      zombiesGroup3.destroyEach();
      }
  
     if(zombiesGroup3.isTouching(shooter) && Ammo===0 ){
      
     
     lives=lives-1;
     
      }
  
  if(zombiesGroup4.isTouching(shooter) && Ammo2>0 ){
      
     spawnBullets();
     fireSound.play();
     lives=lives-1;
      zombiesGroup4.destroyEach();
      }
  
     if(zombiesGroup4.isTouching(shooter) && Ammo2===0 ){
      
     
     lives=lives-1;
     
      }
  
     if(zombiesGroup5.isTouching(shooter) && Ammo3>0 ){
      
     spawnBullets();
     fireSound.play();
     lives=lives-1;
     zombiesGroup5.destroyEach(); 
      }
  
     if(zombiesGroup5.isTouching(shooter) && Ammo3===0 ){
      
     
     lives=lives-1;
     
      }
  
     if(zombiesGroup6.isTouching(shooter) && Ammo3>0 ){
      
     spawnBullets();
     fireSound.play();
     lives=lives-1;
     zombiesGroup6.destroyEach(); 
      }
  
     if(zombiesGroup6.isTouching(shooter) && Ammo3===0 ){
      
     
     lives=lives-1;
     
      }
  
     if(zombiesGroup7.isTouching(shooter) && Ammo3>0 ){
      
     spawnBullets();
     fireSound.play();
     lives=lives-1;
     zombiesGroup7.destroyEach(); 
      }
  
     if(zombiesGroup7.isTouching(shooter) && Ammo3===0 ){
      
     
     lives=lives-1;
     
      }
  
  if(lives===0){
    
    gameState=END;
    
     }
  
  if(gameState===END){
     
    background(gameOverImg);
    horrorSound.loop();
    
     }
  
}

function spawnBullets(){
  bullets=createSprite(shooter.x+58,shooter.y-38);
  bullets.addImage(bulletImg);
  bullets.scale=0.03;
  bullets.velocityX=100;
  bullets.lifeTime=100;
  bulletsGroup.add(bullets);
}

function spawnZombies1(){
  if(frameCount%150 === 0){
  zombies1=createSprite(650,360);
  zombies1.addAnimation("running",zombiesAnimation);
  zombies1.scale=0.4;
  zombies1.velocityX=-3;
  zombies1.lifeTime=100;
  zombiesGroup1.add(zombies1);
  }
}

function spawnZombies2(){
  if(frameCount%150 === 0){
  zombies2=createSprite(700,410);
  zombies2.addAnimation("running",zombiesAnimation);
  zombies2.scale=0.4;
  zombies2.velocityX=-3;
  zombies2.lifeTime=100;
  zombiesGroup2.add(zombies2);
  }
}

function spawnZombies3(){
  if(frameCount%150 === 0){
  zombies3=createSprite(800,430);
  zombies3.addAnimation("running",zombiesAnimation);
  zombies3.scale=0.4;
  zombies3.velocityX=-3;
  zombies3.lifeTime=100;
  zombiesGroup3.add(zombies3);
  }
}

function spawnZombies4(){
  if(frameCount%90 === 0){
  zombies4=createSprite(650,420);
  zombies4.addAnimation("running",zombiesAnimation);
  zombies4.y=Math.round(random(410,430));
  zombies4.scale=0.5;
  zombies4.velocityX=-5;
  zombies4.lifeTime=100;
  zombiesGroup4.add(zombies4);
  }
}

function spawnZombies5(){
  if(frameCount%100===0){
  zombies5=createSprite(630,340);
  zombies5.addAnimation("running",zombiesAnimation);
  zombies5.scale=0.4;
  zombies5.y=Math.round(random(340,380));
  zombies5.velocityX=-6.5;
  zombies5.lifeTime=100;
  zombiesGroup5.add(zombies5);
}
}

function spawnZombies6(){
  if(frameCount%100===0){
    zombies6=createSprite(700,400);
    zombies6.addAnimation("running",zombiesAnimation);
    zombies6.scale=0.4;
    zombies6.y=Math.round(random(400,430));
    zombies6.velocityX=-6.5;
    zombies6.lifetime=120;
    zombiesGroup6.add(zombies6);
  }
}

  function spawnZombies7(){
  if(frameCount%100===0){
    zombies7=createSprite(760,450);
    zombies7.addAnimation("running",zombiesAnimation);
    zombies7.scale=0.4;
    zombies7.velocityX=-6.5;
    zombies7.lifetime=120;
    zombiesGroup7.add(zombies7);
  }  
}
