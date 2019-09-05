function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight) ;
}


function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    ellipse(150, 150, 50, 50);
  } else {
    rect(25, 25, 50, 50);
  }

  print(mouseIsPressed);
}

function(mouserelease) {
  console.log(mouseY + "," + mouseY) ;
}
