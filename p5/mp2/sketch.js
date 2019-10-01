var myState = 0 ;
var timer = 0 ;
function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
switch(myState) (
  case 0:
  timer++ ;
  if (timer > 200) {
    myState = myState + 1 ;
  }
  break;

  case1:
  break;

  case2:
  break

  case3:
  break;

  case4:
  break;
}

}

function mouseReleases() {
  if (myState ==0) {
    myState = 1 ;
  }
}
