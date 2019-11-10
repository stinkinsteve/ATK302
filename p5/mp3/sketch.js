var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var timer1 = 500;
var timer2 = 0;
var cat, catRight, catLeft;
var score1 = 0;
var begin1 = 0;
var mummy = 0;
var shriek = 0;
var mummyPic = 0;
var i = 0;

function preload() {
  begin1 = loadSound('asset/snip.mp3');
  mummy = loadSound('asset/cry2.mp3');
  shriek = loadSound('asset/cat.wav');
}

function setup() {
  //load fonts, images, sounds
  createCanvas(800, 800);
  orbitron = loadFont("asset/orbitron-black.otf");
  efloor = loadImage("asset/efloor.jpg");
  splash = loadImage("asset/efloor1a.jpg");
  youWin = loadImage("asset/youwin.jpg");
  youLose = loadImage("asset/youlose.jpg");
  mummyPic = loadImage("asset/mummyb.gif");

  //spawn the cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
    catLeft = loadImage("asset/catleft.gif");
    catRight = loadImage("asset/catright.gif");
    cat = catLeft;
  }
  //initial frog position
  frogPos = createVector(width / 2, height / 2);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  begin1.play();
  begin1.loop();

}

function draw() {

  textFont(orbitron, 42);
  //splash page
  image(splash, width / 2, height / 2);
  for (var i = 0; i < 400; i++);

  switch (myState) {

    case 0:

      image(splash, width / 2, height / 2);
      fill('black');
      text("Welcome, human", 150, 600);
      fill('black');
      text("Click if you dare ...", 150, 650);
//      fill('#f75948');
//      text("Click if you dare ...", 150, 650);
//      text("timer = " + timer2, 100, height - 100);
//      timer2++;
//      if (timer2 <= 500) {
//        timer2 = 0;
//        myState = 1;
//      }
//      if (begin1.isPlaying()) {
//        begin1.stop();
//      }
//      else {
//        begin1.play();
//      }
      break;

    case 1:
      game();
      break;

    case 2:
      image(youLose, width / 2, height / 2);
      fill(0);
      text("Click to play again", 100, 650);
      rect(540, 682, 300, 40);
      fill('#f75948');
      textSize(47);
      text("Score = " + score1, width / 2 - 10, height - 100);
//      if (begin1.isPlaying()) { // .isPlaying() returns a boolean
//        begin1.stop();
//      }
      break;

    case 3:
      image(youWin, width / 2, height / 2);
      fill(0);
      rect(540, 682, 300, 40);
      fill('#f75948');
      textSize(47);
      text("Score = " + score1, width / 2 - 10, height - 100);
//      if (begin1.isPlaying()) { // .isPlaying() returns a boolean
//      begin1.stop();
//      }
      break;
  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0;
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;

  }
}

function resetTheGame() {
  cars.length = 0; //clear the array
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height / 2);
  timer = 0;
  timer1 = 500;
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
  if (keyCode == ENTER) {
    resetTheGame();
    myState = 0;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    frogPos.x = frogPos.x - 5;
    if (frogPos.x <= 0) frogPos.x = width;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    frogPos.x = frogPos.x + 5;
    if (frogPos.x >= width) frogPos.x = 0;
  }
  if (keyIsDown(UP_ARROW)) {
    frogPos.y = frogPos.y - 5;
    if (frogPos.y <= 0) frogPos.y = height;
  }
  if (keyIsDown(DOWN_ARROW)) {
    frogPos.y = frogPos.y + 5;
    if (frogPos.y >= height) frogPos.y = 0;
  }
}

function game() {

  textSize(36);
  image(efloor, width / 2, height / 2);
  fill('#f75948');
  text("Score = " + score1, width / 2 - 10, height - 100);
  //iterate
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    //test if car is close to frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      //      shriek.play();
      mummy.play();
      score1 = score1 + 10;
    }
  }

  if (cars.length == 0) {
    timer = 0
    myState = 3; // they won
  }

  // draw the cat
  image(cat, frogPos.x, frogPos.y, 60, 60);
  checkForKeys();

  timer1--;
  text("timer = " + timer1, 100, height - 100);
  if (timer1 <= 0) {
    timer1 = 500;
    myState = 2;
  }

}

function flashClick() {
  fill('black');
  text("Click if you dare ...", 150, 650);
  fill('#f75948');
  text("Click if you dare ...", 150, 650);
  text("timer = " + timer2, 100, height - 100);
  timer2++;
  if (timer2 <= 500) {
    timer2 = 0;
    myState = 1;
  }
}
