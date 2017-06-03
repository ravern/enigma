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
    if (iiRot.nextIsTurnover()) iRot.advance();
    if (iiiRot.nextIsTurnover()) iiRot.advance();
    iiiRot.advance();

    var output = plugboard.mapping(iiiRot.returnMapping(iiRot.returnMapping(iRot.returnMapping(bReflect.mapping(iRot.forwardMapping(iiRot.forwardMapping(iiiRot.forwardMapping(plugboard.mapping(key)))))))));

    gui.plaintext += key;
    gui.ciphertext += output;
    gui.selectedKey = key;
    gui.selectedLamp = output;
  }
}

function processKeyReleased() {
  delete gui.selectedKey;
  delete gui.selectedLamp;
}
