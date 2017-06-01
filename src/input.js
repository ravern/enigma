//
// input.js
// Input logic
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//

var allowedAlph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function keyPressed() {
  if (allowedAlph.indexOf(key) >= 0) {
    processKeyPressGUI();
    redraw();
  }
}

function keyReleased() {
  if (allowedAlph.indexOf(key) >= 0) {
    processKeyReleasedGUI();
    redraw();
  }
}
