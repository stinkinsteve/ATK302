var song = 0;

function preload() {
    song = loadSound('assets/duneSea.mp3');
}


function setup() {

  createCanvas(720, 200);
  background(255,0,0);
  fill(130)
  text("The Dune Sea", 50,50) ;
  song.play();
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  }
  else {
    song.play();
    background(0,255,0);
  }
}
