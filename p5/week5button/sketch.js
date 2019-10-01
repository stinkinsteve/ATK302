var score = 0 ;
function setup() {
  // put setup code here
createCanvas(800,800) ;
}

function draw() {
  // put drawing code here
fill('red') ;
rect(100,100, 100,100) ;
}

if mouseReleased() {
  if((mousex > 100) && (mousex < 200) && (mousey > 100) && (mousey < 200)) {
    score ++ ;
  console.log('score') ;
}
