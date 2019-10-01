var myState = 0 ;
var timer = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {
  background(100) ;
  fill('yellow') ;
  rect(width/2, height/2 - 120, 150, 400) ;

switch(myState) {

    case 0:
    fill('gray') ;
    ellipse(width/2, height/2, 100, 100) ;
    fill('gray') ;
    ellipse(width/2, height/2 - 120, 100, 100) ;
    fill('red') ;
    ellipse(width/2, height/2 - 240, 100,100) ;
    timer++ ;
    if (timer > 175) {
      myState = 1 ;
      timer = 0 ;
    }
       break ;

    case 1:
    fill('green') ;
    ellipse(width/2, height/2, 100, 100) ;
    fill('gray') ;
    ellipse(width/2, height/2 - 120, 100, 100) ;
    fill('gray') ;
    ellipse(width/2, height/2 - 240, 100,100) ;
    timer = timer + 1 ;
    if (timer > 175) {
      myState = 2 ;
      timer = 0 ;
    }
       break ;
    case 2:
       fill('gray') ;
       ellipse(width/2, height/2, 100, 100) ;
       fill('yellow') ;
       ellipse(width/2, height/2 - 120, 100, 100) ;
       fill('gray') ;
       ellipse(width/2, height/2 - 240, 100,100) ;
       timer = timer + 1 ;
       if (timer > 175) {
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
