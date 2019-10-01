var x = 0;
var y = 0;

function setup() {
  // put setup code here
  createCanvas(200, 200);
}

function draw() {
  // put drawing code
  background(100);
  rect(x, y, 10, 10);
  x += 4;

  if (x > width) {
    x = 0;
    y = random(height);
  }
}
