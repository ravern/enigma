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

function processKeyPress() {
  if (gui.plaintext.length < 40) {

    // Advance the rotors
    rotors[rotors.length - 1].advance();
    for (var i = rotors.length - 1; i > 0; i--) {
      if (rotors[i].turnedover()) rotors[i - 1].advance();
    }

    // All the mappings
    var char = key;
    char = plugboard.mapping(char);
    for (var i = rotors.length - 1; i >= 0; i--) {
      char = rotors[i].forwardMapping(char);
    }
    char = reflector.mapping(char);
    for (var i = 0; i < rotors.length; i++) {
      char = rotors[i].returnMapping(char);
    }
    char = plugboard.mapping(char);

    // Update the GUI
    gui.plaintext += key;
    gui.ciphertext += char;
    gui.selectedKey = key;
    gui.selectedLamp = char;
  }
}

function processKeyReleased() {
  delete gui.selectedKey;
  delete gui.selectedLamp;
}
