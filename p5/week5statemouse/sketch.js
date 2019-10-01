  var myState = 0 ;

function setup() {
  // put setup code here
  createCanvas(800,800) ;
}

function draw() {
  // put drawing code here
  switch(myState){
    case 0 :
    background(255,0,0) ;
    text("first state", 100,100) ;
    break ;

    case 1 :
    background(0,255,0);
    text("second state", 100, 100) ;
    break ;

    case 2 :
    background(0,0,255);
    text("third state", 100,100) ;
    break ;
  }
}
 function mouseReleased() {
   myState++ ; // myState = (myState +1) % 3 ; 
   if (myState > 2) {
     myState = 0 ;
   }
 }
