var database;
var form;
var form_img;
var playerCount = 0;
var gameState = 0;
var player;

function preload()
{
  form_img = loadImage("background.jpeg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  database = firebase.database();

  form = new Form();

}

function draw() {

  background(form_img);
  
  form.display();

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

}