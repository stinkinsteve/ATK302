function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800);
}

function draw() {
  background(0, 100, 200);
  noStroke();

fill('#edb91c');
  ellipse(252, 144, 100,100);

fill('#155e08');
  triangle(40, 35, 18, 360, 81, 360);

fill('white');
ellipse(300,234, 250,125);
ellipse(380,180, 130,130);
ellipse(460,225, 100,100);
  text(mouseX + ',' + mouseY, 650,20);
}

function mouserelease() {
  console.log(mouseX + ',' + mouseY) ;
}
  //fill(''#7a4016');
  //rect(81, 81, 63, 63);

  //fill(204);
  //quad(189, 18, 216, 18, 216, 360, 144, 360);

  //fill('#edb91c');
  //ellipse(252, 144, 72, 72);

  //fill(204);
  //triangle(288, 18, 351, 360, 288, 360);

  //fill(255);
  //arc(479, 300, 280, 280, PI, TWO_PI);
