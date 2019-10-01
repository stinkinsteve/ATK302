var myState = 0 ;

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
    text('Why did the chicken cross the road', 100,100) ;
       break ;

    case 1:
    text(' to get to the other side', 100, 150);
       break ;

}
}

function mouseReleased() {
  myState++;
  if  (myState >1) {
  myState = 0 ;
}
}
