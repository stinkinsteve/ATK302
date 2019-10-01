var img, img1, img2;

function setup() {
  // put setup code here

  img = loadImage("assets/grand.jpg");
  img1 = loadImage("assets/rumours.jpg");
  img2 = loadImage("assets/blue.jpg");
  createCanvas(1000, 1200);
  imageMode(CENTER); // to draw images from their center
}

function draw() {
  // put drawing code here
  image(img, width / 2, 100, 200, 200);
  image(img1, width / 2, 300, 200, 200);
  image(img2, width / 2, 500, 200, 200);
}

function mouseReleased() {
  saveCanvas('myCanvas', 'png');
  saveCanvas('myCanvas', 'jpg');

}
