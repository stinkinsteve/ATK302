var img1, img2, img3, img4, img5;
var x = 100;
var myState = 0;
var timer = 400;

function setup() {
  // put setup code here
  img1 = loadImage("assets/graveyardbk1.jpg");
  img2 = loadImage("assets/darkwaves.jpg");
  img3 = loadImage("assets/goldwaves.jpg");
  img4 = loadImage("assets/maroonwaves.jpg");
  img5 = loadImage("assets/oceanwaves.jpg");
  createCanvas(1000, 700);
  orbitron = loadFont('assets/orbitron-black.otf') ;

//  imageMode(CENTER) ;
}

function draw() {
  // put drawing code here
  textFont(orbitron,24) ;
  switch(myState) {

      case 0:
        textSize(42) ;
        image(img1, 0, 0);
        fill('blue');
//        rect(x,height - 100, 80, 60);
        text('Night Musings - Steve Hopkins', x + 80, height - 60) ;
        x = x + 1 ;
        if (x > 120){
          x = 120 ;
        }
        timer--;
  //      text('timer =' + timer, 100,100) ;
        if (timer <= 0) {
          timer = 300 ;
          x = 0 ;
          myState = 1;
        }
        break;

      case 1:
        textSize(36) ;
        fill(239) ;
        image(img2, 0, 0);
        text('The twilight time of the night', x + 10, height - 550) ;
        text('brings out the things I like', x + 10, height - 500) ;
        text('deepest mysteries and subtle gloom', x + 10, height - 450) ;
        text('answering the calling of the moon', x + 10, height - 400) ;
        x = x + 2 ;
        if (x > 150){
          x = 150 ;
        }
        timer--;
  //      text('timer =' + timer, 100,100) ;
        if (timer <= 0) {
          timer = 500 ;
          x = 0 ;
          myState = 2;
        }
      break;

      case 2:
      textSize(36) ;
      fill(150) ;
      image(img3, 0, 0);
      text('dangers lurk nearby in the mist', x + 10, height - 550) ;
      text('gets my heart pumping like a fist', x + 10, height - 500) ;
      text('to venture out and explore ', x + 10, height - 450) ;
      text('for many moons and maybe more', x + 10, height - 400) ;
      x = x + 2 ;
      if (x > 150){
        x = 150 ;
      }
        timer--;
//        text('timer =' + timer, 100,100) ;
        if (timer <= 0) {
          timer = 500 ;
          x = 0 ;
          myState = 3;
        }
      break;

      case 3:
      textSize(36) ;
      fill(239) ;
      image(img4, 0, 0);
      text('to find what the scarecrow sees', x + 10, height - 550) ;
      text('what floats in the moist cool breeze', x + 10, height - 500) ;
      text('what moves through the darkness', x + 10, height - 450) ;
      text('soft echoes of the long dead past', x + 10, height - 400) ;
      x = x + 2 ;
      if (x > 150){
        x = 150 ;
      }
        timer--;
//        text('timer =' + timer, 100,100) ;
        if (timer <= 0) {
          timer = 500 ;
          x = 0 ;
          myState = 4;
        }
      break;

      case 4:
      textSize(36) ;
      fill(85) ;
      image(img5, 0, 0);
      text('follow the dog barks and the wolf howls', x + 10, height - 550) ;
      text('down into the meadow and distant crawls', x + 10, height - 500) ;
      text('lies my love that I love most of all', x + 10, height - 450) ;
      text('sense of adventure large and small ', x + 10, height - 400) ;
      x = x + 2 ;
      if (x > 125){
        x = 125 ;
      }
        timer--;
//        text('timer =' + timer, 100,100) ;
        if (timer <= 0) {
          timer = 500 ;
          x = 0 ;
          myState = 0;
        }
      break;

  }

}

function mouseReleased() {
  myState++ ;
  if (myState > 4) {
    myState = 0 ;
    timer = 400 ;
    x = 0 ;
  }
}
