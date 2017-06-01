//
// index.js
// Entry point for the enigma machine simulator.
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//

function setup() {
  // Creates the GUI needed for emulator.
  createGUI();

  // Don't loop, it's not a game
  noLoop();
}

function draw() {
  renderGUI();
}
