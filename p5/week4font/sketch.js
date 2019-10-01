var orbitron ;
var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
  orbitron = loadFont('assets/orbitron-black.otf') ;
}

function draw() {
  background(0) ;
  textFont(orbitron,24) ;
  fill('red') ;
  text('Hello I Love you, wont you tell me your name', x, 50) ;
  text('Hello I Love you, wont you tell me your name', (x+10), 75) ;
  text('Hello I Love you, wont you let me jump in your game', (x+20), 100) ;
  x++ ;
  if (x > width) {
    x = 0 ;
  }

}
