var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaRight, yodaLeft;
var bird1, bird2, bird3;
var birds = [] ;

function setup() {

  createCanvas(800, 800);
birds[0] = loadImage('assets/bird1.png');
birds[1] = loadImage('assets/bird3.png');
birds[2] = loadImage('assets/bird3.png');

  //spawn cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
    yodaLeft = loadImage("asset/yodaleft.gif");
    yoda = yodaLeft;
    bird1 = loadImage("asset/bird1.png");
    bird2 = loadImage("asset/bird2.png");
    bird3 = loadImage("asset/bird3.png");
    bird = bird1;

    //initialize frog position
    frogPos = createVector(width / 2, height - 80);
    rectMode(CENTER);
    ellipseMode(CENTER);
    imageMode(CENTER);
  }

  function draw() {
    background(100);
    //iterate through car array

    switch (myState) {

      case 0:

        text("welcome, click to play", 100, 100);
        break;

      case 1:
        game();
        timer++
        if (timer > 600) {
          timer = 0;
          mystate = 2;
        }
        break;

      case 2:
        background(100);
        textSize(24);
        text("You Loose", width / 2, height / 2);
        break;

      case 3:
        background(255);
        text("You Win", width / 2, height / 2);
        break;

    }
    // draw the frog
    fill('green');
    //ellipse(frogPos.x, frogPos.y, 60, 60);
    image(yoda, frogPos.x, frogPos.y, 60, 60);
    checkForKeys();
  }

  // car class!!
  function Car() {
    // attributes
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.birdNum = 0;


    //display methods
    this.display = function() {
      fill(this.r, this.g, this.b);
      //    rect(this.pos.x, this.pos.y, 100, 50);
      //    ellipse(this.pos.x - 40, this.pos.y - 20, 25, 25);
      //    ellipse(this.pos.x + 40, this.pos.y - 20, 25, 25);
  //    image(bird1, this.pos.x, this.pos.y, 25, 25);
  image(birds[this.birdNum],this.pos.x, this.pos.y, 100,100);

  this.timer = this.timer + 1 ;
  if (this.timer > 30) {
    this.birdNum = this.birdNum + 1 ;
    this.timer = 0 ;
  }
  if (this.birdNum > birds.length-1) this.birdNum = 0 ;

  }
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
    if (keyCode == LEFT_ARROW) yoda = yodaLeft;
    if (keyCode == RIGHT_ARROW) yoda = yodaRight;
  }

  function checkForKeys() {
    if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
    if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
    if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
    if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

  }

  function game() {
    //iterate through car array
    for (var i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].drive();

      //test if this car is close to frog
      if (cars[i].pos.dist(frogPos) < 50) {
        cars.splice(i, 1);
      }
    }
  }

  if (cars.length == 0) {
    myState = 3;
    timer = 0;

  }

  function mouseReleased() {
    switch (myState) {

      case 0:
        myState = 1;
        break;

      case 2: // Win myState
        resetTheGame();
        myState = 0;
        break;

      case 3: // lost myState
        resetTheGame();
        myState = 0;
        break;
    }
  }

  function resetTheGame() {
    //spawn the cars
    for (var i = 0; i < 40; i++) {
      cars.push(new Car());
    }
  }
