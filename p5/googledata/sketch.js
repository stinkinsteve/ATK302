var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '16d4phqOwFqj98VeRVvrojLYjTwGAtMKTy0DmUu2Uecg'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].Shape));
  }

}


function draw() {
  background('blue');
  game();

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Circle(myName, myShape) {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.name = myName;
  this.shape = myShape;

  this.display = function() {
    if (this.shape == "Circle") {
      ellipse(this.pos.x, this.pos.y, 100, 100);
    } else {
      rect(this.pos.x, this.pos.y, 100, 100);
    }
    fill('black');
    text(this.name, this.pos.x, this.pos.y, 100, 100);
    fill('orange');
    text(this.shape, this.pos.x + 10, this.pos.y, 100, 100);

  }
  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

function game() {

  textSize(18);
      fill('#f75948');
//  text("Score = " + score1, width / 2 - 10, height - 100);
  //iterate
  for (var i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();
    //test if car is close to frog
    //if (namesArray[i].pos.dist(frogPos) < 50) {
    //  namesArray.splice(i, 1);

  //}
  }
}
