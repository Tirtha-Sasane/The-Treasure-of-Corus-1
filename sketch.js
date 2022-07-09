var player,playerImg;
var stage=1;
var start, level1, level2;
var logI,gem1;
var state=2;
var show=2;

function preload(){
  playerImg = loadImage("Assets/run.png");
  gem1=loadImage("Assets/soulgem.png");
}

function setup() {
  createCanvas(1200,600);
  
  
  player = createSprite(10,10,50,50);
  player.addImage(playerImg) ;
  player.scale=0.1;

}

function draw() {
  background("White");
  
  if(state===1){
    start=new Start();
    state=null
    player.visible=false;
  }

  if(show===1){
    start.display()
  }

  if(state===2){
    level1=new Level1();
    state=null
    player.visible=true;
  }

  if(show===2){
    level1.display()
  }

  if(state===3){
    level2=new Level2();
  }

  if(show===3){
    level2.display()
  }
 
}
