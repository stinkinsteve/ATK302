var song1 ;

function preload() {
    song1 = loadSound('assets/goldbergv1.mp3');
}
function setup() {
  // put setup code here
createCanvas(800,800) ;
   song1.play() ;
}

function draw() {
  // put drawing code here
}

function mouseReleased() {
  if (song1.isPlaying()) {
  song1.pause() ;
}  else {
  song1.play() ;
}
}
