var myState = 0 ;
var timer = 200 ;
var x = 0 ;
var vel = 3 ;

function setup() {
  // put setup code here
createCanvas(800,800);
rectMode(CENTER);
ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
background(100);
fill('#f7ff3c')
rect(width/2, height/2, 150, 400) ;

switch(myState) {
  case 0:
  fill('gray');
  ellipse(width/2, height/2, 100, 100) ; //middle
  fill('red') ;
  ellipse(width/2, height/2 - 125, 100, 100) ; //top
  fill('gray') ;
  ellipse(width/2, height/2 + 125, 100, 100) ; //bottom
  doTimer(1, 200) ;
  vel = 0 ;
  break;

  case 1:
  fill('gray');
  ellipse(width/2, height/2, 100car, 100) ; //middle
  fill('gray');
  ellipse(width/2, height/2 - 125, 100, 100) ; //top
  fill('green') ;
  ellipse(width/2, height/2 + 125, 100, 100) ; //bottom
  doTimer(2, 200) ;
  vel = 3 ;
  break;

  case 2:
  fill('yellow');
  ellipse(width/2, height/2, 100, 100) ; //middle
  fill('gray');
  ellipse(width/2, height/2 - 125, 100, 100) ; //top
  fill('gray') ;
  ellipse(width/2, height/2 + 125, 100, 100) ; //bottom
  doTimer(0, 200) ;
  vel = 1 ;
  break;
}
//animate a car
  fill('purple');
  rect(x,height - 100, 80, 60);
  x = x + vel ;
  if (x > width){
    x = 0 ;
  }
}
function doTimer(whichState, variableTimer) {
  timer-- ;
    if (timer <= 0 ) {
      timer = 200 ;
      myState = whichState;
    }
}
