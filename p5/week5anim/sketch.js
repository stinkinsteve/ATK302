var x = 0 ;

function setup() {
  // put setup code here
createCanvas(200,200) ;
backgroun(100)
}
function draw() {
  // put drawing code here
  rect(x, 10, 10, 10);
  x += 5 ;
if (x > 200) {
  x = 0;
}
}
