var myState = 0;
var timer = 0;
var x = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {

  switch(myState) {
    case 0:
      background(255, 0, 0);
      fill('white');
      textSize(100);
      text("case 0", 100, 100);
      break;

    case 1:
      background(0, 255, 0);
      fill('black');
      textSize(100);
      text("case 1", 100, 100);
      break;

    case 2:
      background(0, 0, 255);
      fill('gold');
      textSize(100);
      text("case 2", 100, 100);
      break;
  }
}

  function mouseReleased() {
    myState++ ; // myState = (myState +1) % 3 ;
    if (myState > 2) {
      myState = 0 ;
    }
  }
