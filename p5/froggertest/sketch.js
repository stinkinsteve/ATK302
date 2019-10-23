var cars = [];
var frogPos ;
var myState = 0 ;
var timer ;
var cat, catRight, catLeft;
var score1 = 0 ;
var begin1 = 0;
var mummy = 0;
var shriek = 0;
var mummyPic = 0;

function setup() {
//load fonts, images, sounds
  createCanvas(800, 800);
  orbitron = loadFont("asset/orbitron-black.otf");
  efloor = loadImage("asset/efloor.jpg");
  mummyPic = loadImage("asset/mummy.gif");

//function preload()
  begin1 = loadSound('asset/thunderstruck.mid');
  mummy = loadSound('asset/stop.mp3');
  shriek = loadSound('asset/cat.wav');
//}
  //spawn the cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
    catLeft = loadImage("asset/catleft.gif");
    catRight = loadImage("asset/catright.gif");
    cat = catLeft;
  }
  //initial frog position
  frogPos = createVector(width/2, height/2) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
  imageMode(CENTER);
}

function draw() {

    textFont(orbitron,36) ;

    switch(myState) {

     case 0:
     image(efloor, width/2, height/2);
     fill('#ed9679');
     text("Welcome human", 150, 200);
     text("Click if you dare ...", 150, 250);
//     begin1.play();
     break;

     case 1:
     game() ;
     timer ++
     if (timer > 200){
       timer = 0 ;
       mystate = 2;
     }
     break;

     case 2:
     image(efloor, width/2, height/2);
     fill('#ed9679');
     text("You Loose", width/2 - 40, height/2);
     text("Your score = " + score1, width/2 - 80, height/2 + 25);
     break;

     case 3:
     image(efloor, width/2, height/2);
     fill('#ed9679');
     text("You Win", width/2 - 40, height/2);
     text("Your score = " + score1, width/2 - 80, height/2 + 25);
     break;


  }


}

function mouseReleased(){
  switch(myState){
    case 0:
    myState = 1 ;
    break ;

    case 2:
    resetTheGame() ;
    myState = 0;
    break;

    case 3:
    resetTheGame() ;
    myState = 0;
    break;

  }
}

function resetTheGame(){
  car = [] ; //clear the array
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
   timer = 0;
   score1 = 0;
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.p = random(50);


  // methods
  this.display = function() {
    image(mummyPic, this.pos.x, this.pos.y, 50, 50);
//    fill(this.r, this.g, this.b);
//    rect(this.pos.x, this.pos.y, 100, 50);
//    ellipse(this.pos.x - 40, this.pos.y + 30, 25, 25);
//    ellipse(this.pos.x + 40, this.pos.y + 30, 25, 25);
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  if (keyCode == LEFT_ARROW) cat = catLeft;
  if (keyCode == RIGHT_ARROW) cat = catRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function game() {

  image(efloor, width/2, height/2);
  fill('#ed9679');
  text("Score = " + score1, width/2 - 10, height - 100) ;
  //iterate
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    //test if car is close to frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ;
      shriek.play();
      mummy.play();
      score1 = score1 + 1 ;
    }
  }

  if (cars.length == 0) {
    timer = 0
    myState = 3 ;// they won
  }

  // draw the frog
  fill('green') ;
  image(cat, frogPos.x, frogPos.y, 60, 60);
  checkForKeys() ;

}
