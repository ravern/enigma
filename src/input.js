//
// input.js
// Input logic
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//


function keyPressed() {
  if (ALPHABET.indexOf(key) >= 0) {
    processKeyPress();
    redraw();
  }
}

function keyReleased() {
  if (ALPHABET.indexOf(key) >= 0) {
    processKeyReleased();
    redraw();
  }
}
