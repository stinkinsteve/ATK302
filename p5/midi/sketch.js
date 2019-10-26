
  // put setup code here
  var MidiPlayer = require('midi-player-js');

  // Initialize player and register event handler
  var Player = new MidiPlayer.Player(function(event) {
      console.log(event);

  function setup() {



  // Load a MIDI file
  Player.loadFile('thunder.mid');
  Player.play();
//  function Draw() {

    // put drawing code here
}
