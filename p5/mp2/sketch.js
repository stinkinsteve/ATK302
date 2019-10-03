var img1, img2, img3, img4, img5;
var x = 100;
var myState = 0;
var timer = 200;

function setup() {
  // put setup code here
  img1 = loadImage("assets/graveyardbk1.jpg");
  img2 = loadImage("assets/darkwaves.jpg");
  img3 = loadImage("assets/goldwaves.jpg");
  img4 = loadImage("assets/mainbk.jpg");
  img5 = loadImage("assets/oceanwaves.jpg");
  createCanvas(1000, 700);
//  imageMode(CENTER) ;
}

function draw() {
  // put drawing code here
  switch(myState) {

      case 0:
      image(img1, 0, 0);
      doTimer(1, 200) ;
      break;

      case1:
        image(img2, 0, 0);
        doTimer(2, 200) ;
      break;

      case2:
        image(img3, 0, 0);
        doTimer(3, 200) ;
      break

      case3:
        image(img4, 0, 0);
      timer++;
      doTimer(4, 200) ;
      break;

      case4:
        image(img5, 0, 0);
      doTimer(0, 200) ;
      break;

  }

  fill('blue');
  rect(x,height - 100, 80, 60);
  x = x + 1 ;
  //if (x > 800){
    //text('something goes here', x, height - 100) ;
  //}
}

function mouseReleases() {
  myState = myState + 1;
  if (myState > 4) {
    myState = 0;
  }
}

function doTimer(whichState, variableTimer) {
  timer-- ;
    if (timer <= 0) {
      timer = 200 ;
      myState = whichState;
    }
}
