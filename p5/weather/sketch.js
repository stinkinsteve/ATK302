var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var wspeed;
var x = 0;
var tempr = 0;


function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=d52b6bce80f4a924bd7ae5c363638232'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}

function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  wspeed = weather.wind.speed;
  tempr = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    textSize(24);
    text("we have weather", 20, 20) ;
    text("humidity = " + weather.main.humidity, 20,45);
    text("temperature = " + weather.main.temp ,20,65);
    text("wind speed = " + weather.wind.speed, 20, 85);
    text("weather = " + weather.weather[0].main, 20, 105);
// parse the weather object and put some text for some at least 3 different weather data!
      // make cloud go across screen
      fill(255);
      ellipse(x,300,200,100);
      ellipse(x + 20, 300, 100);
      x = x + wspeed/4;
      if (x > width) x = 0;

      fill ('red');
      var tempMap = 0;
      tempMap = map(tempr, -10, 100, 0, height -10);
      rect(350, height-10, 30, -tempMap);
      break;
  }
}
