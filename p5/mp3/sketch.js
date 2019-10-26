var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var timer1 = 0;
var cat, catRight, catLeft;
var score1 = 0;
var begin1 = 0;
var mummy = 0;
var shriek = 0;
var mummyPic = 0;

function setup() {
  //load fonts, images, sounds
  createCanvas(800, 800);
  orbitron = loadFont("asset/orbitron-black.otf");
  efloor = loadImage("asset/efloor.jpg");
  splash = loadImage("asset/efloor1a.jpg");
  youWin = loadImage("asset/youwin.jpg");
  youLose = loadImage("asset/youlose.jpg");
  mummyPic = loadImage("asset/mummy.gif");

  //function preload()
  //  begin1 = loadSound('asset/thunderstruck.mid');
  mummy = loadSound('asset/cry2.mp3');
  shriek = loadSound('asset/cat.wav');
  //}
  //spawn the cars
  for (var i = 0; i < 4; i++) {
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
      text("Click if you dare ...", 150, 650);
            //     begin1.play();
      break;

    case 1:

      game();
      break;

    case 2:
      image(youLose, width / 2, height / 2);
      fill(0);
      rect(520, 682, 260,40);
      fill('#f75948');
      textSize(47);
      text("Score = " + score1, width / 2 - 10, height - 100);
      break;

    case 3:
      image(youWin, width / 2, height / 2);
      fill(0);
      rect(520, 682, 260,40);
      fill('#f75948');
      textSize(47);
      text("Score = " + score1, width / 2 - 10, height - 100);
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
  car = []; //clear the array
  for (var i = 0; i < 4; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height / 2);
  timer = 0;
  timer1 = 0;
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
      score1 = score1 + 1;
    }
  }

  if (cars.length == 0) {
    timer = 0
    myState = 3; // they won
  }

  // draw the frog
  //  fill('green') ;
  image(cat, frogPos.x, frogPos.y, 60, 60);
  checkForKeys();

  timer1++ ;
  text("timer = " + timer1, width / 4 - 75, height - 100);
  if (timer1 >= 500) {
    timer1 = 0;
    myState = 2;
  }

}
