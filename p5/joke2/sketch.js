var myState = 0 ;
var timer = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

function draw() {
  background(100) ;
  fill(255) ;
  textSize(24) ;

switch(myState) {

    case 0:
    background(100) ;
    text('Why did the chicken cross the road', 100,100) ;
    timer = timer + 1 ;
    if (timer > 250) {
      myState = 1 ;
      timer = 0 ;
    }
       break ;

    case 1:
    background(255) ;
    fill(0) ;
    text(' to get to the other side', 100, 150);
    timer = timer + 1 ;
    if (timer > 250) {
        myState = 0 ;
        timer = 0 ;
    }
       break ;

}
}

function mouseReleased() {
  myState++;
  if  (myState >1) {
  myState = 0 ;
}
}
