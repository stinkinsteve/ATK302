function setup() {

  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 500);
  background('#0000ff');
  noStroke();
}
  function draw() {
//backfround elements
  fill('#ffcc80');
  ellipse(507, 143, 102, 102);
  fill('#4d1933');
  triangle(9, 370, 636, 351, 636, 426);
  rect(623, 0, 720, 500);
//Aldricks winds
  fill('#660033');
  triangle(69, 164, 131, 163, 146, 396);
  triangle(268, 165, 340, 164, 270, 372);
  arc(298, 167, 80, 42, PI, TWO_PI);
  arc(108, 167, 80, 42, PI, TWO_PI);
//Aldricks body
  fill('#ffcc80');
  ellipse(207, 243, 182, 272);
//Aldricks eyes
  fill('#ffff00');
  ellipse(162, 164, 72, 72);
  ellipse(249, 159, 72, 72);
  fill(0);
  ellipse(165, 175, 32, 32);
  ellipse(248, 168, 32, 32);
//Aldrciks beak
  fill('#e67300');
  ellipse(208, 206, 22, 42);
//Aldricks head
  fill('#660033');
  triangle(92,93,243,177,125,153);
  triangle(304,92,238,178,271,109);
  triangle(181,183,232,181,208,202);
  arc(201, 102, 180, 180, TWO_PI, PI);
//Aldricks claws
  fill('#e67300');
  ellipse(155, 374, 12, 32);
  ellipse(167, 374, 12, 32);
  ellipse(179, 374, 12, 32);
  ellipse(235, 374, 12, 32);
  ellipse(247, 374, 12, 32);
  ellipse(259, 374, 12, 32);

  if (mouseIsPressed) {
    fill('#ff4d88')
    ellipse(507, 143, 102, 102);
  }

  function mouseReleased() {
    fill('#ffcc80')
    ellipse(507, 143, 102, 102);
  }
}
