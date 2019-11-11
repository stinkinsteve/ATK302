var namesArray = [];
var myName;
var songTitle;

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
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  hotel = loadImage("assets/hotel.jpg");
  frampton = loadImage("assets/frampton.jpg");
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].name, data[i].title));
  }

}


function draw() {
  background('#417eba');
  game();

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}

// my circle class
function Circle(myName, songTitle) {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.name = myName;
  this.song = songTitle;



  this.display = function() {

      if (this.song == "Do You Feel Like I Do") {
        //    fill(this.r, this.g, this.b);
        image(frampton, this.pos.x - 50, this.pos.y - 50);
        textSize(16);
        fill('yellow');
        text(this.name, this.pos.x, this.pos.y + 2, 100, 100);
        textSize(12);
        fill('orange');
        text(this.song, this.pos.x, this.pos.y + 20, 100, 100);
      } else {
        if (this.song == "hotel california") {
          //    fill(this.r, this.g, this.b);
          image(hotel, this.pos.x - 50, this.pos.y - 50);
        } else {
          fill(this.r, this.g, this.b);
          rect(this.pos.x, this.pos.y, 100, 100);
        }
        textSize(16);
        fill('black');
        text(this.name, this.pos.x, this.pos.y + 2, 100, 100);
        textSize(12);
        fill('orange');
        text(this.song, this.pos.x, this.pos.y + 20, 100, 100);
      }
      this.drive = function() {
        this.pos.add(this.vel);

        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;

      }
    }
  }

function game() {

  textSize(18);
  fill('#f75948');
  //iterate
  for (var i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();

  }
}
