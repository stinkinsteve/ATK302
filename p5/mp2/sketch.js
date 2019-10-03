var img1, img2, img3, img4, img5 ;
var myState = 0 ;
var timer = 0 ;

function setup() {
  // put setup code here
  img1 = loadImage("assets/bluebk.jpg");
  img2 = loadImage("assets/darkwaves.jpg");
  img3 = loadImage("assets/goldwaves.jpg");
  img4 = loadImage("assets/mainbk.jpg");
  img5 = loadImage("assets/oceanwaves.jpg");
  createCanvas(1920,1080);
  imageMode(CENTER);
}

function draw() {
  // put drawing code here
  image(img1, width, height, 200, 200);
switch(myState) {
  case 0:
  image(img1, width, height, 200, 200);
    timer++ ;
    if (timer > 200) {
    myState = myState + 1 ;
  }
  break;

  case1:
  image(img2, width, height, 200, 200);
    timer++ ;
    if (timer > 200) {
    myState = myState + 1 ;
  }
  break;

  case2:
  image(img3, width, height, 200, 200);
    timer++ ;
    if (timer > 200) {
    myState = myState + 1 ;
  }
  break

  case3:
  image(img4, width, height, 200, 200);
    timer++ ;
    if (timer > 200) {
    myState = myState + 1 ;
  }
  break;

  case4:
  image(img5, width, height, 200, 200);
    timer++ ;
    if (timer > 200) {
    myState = myState + 1 ;
  }
  break;

}

}

function mouseReleases() {
  myState++ ;
  if (myState > 4) {
    myState = 1 ;
  }
}
