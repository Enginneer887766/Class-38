var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track,carimg1,carimg2,carimg3,carimg4,ground;

function preload() {
  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");

  carimg1 = loadImage("images/car1.png");
  carimg2 = loadImage("images/car2.png");
  carimg3 = loadImage("images/car3.png");
  carimg4 = loadImage("images/car4.png");

  
  


}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
