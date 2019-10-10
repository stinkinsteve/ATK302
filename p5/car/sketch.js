var myCar ;
var myCar1 ;
var y ;

function setup() {
  // put setup code here
createCanvas(800,800) ;
myCar = new ()
}
function draw() {
  background(100) ;

  myCar.display() ;
  myCar.drive() ;
}

function Car() {
  this.x = random(width) ;
  this.vel = random(5) ;
  this.r = random(255) ;
  this.g = random(255) ;
  this.h = random(255) ;
}

  this.display = function() {
    fill(this.r, this.g, this.b) ;
    rect(this.x, this.y, 100, 500) ;

  rect(this.x, this.y,100,50) ;
  }

this.drive = function() {
  this.x = this.x + 5 ;
  if (this.x > width){
    this.x = 0 ;
  }


}
