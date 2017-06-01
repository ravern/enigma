//
// gui.js
// All the GUI for the emulator
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//

var gui = {
  width: 1280,
  height: 720,

  priColor: [0, 0, 0],
  secColor: [40, 40, 40],
  lightColor: [255, 255, 255],
  secLightColor: [245, 245, 245],

  plaintext: '',
  ciphertext: ''
};

function processKeyGUI() {
  if (gui.plaintext.length < 40) {
    gui.plaintext += key
  }
}

function createGUI() {

  // Create the canvas
  createCanvas(gui.width, gui.height);

  // Defaults
  noStroke();
}

function renderGUI() {
  // Render visual components
  renderBackground();
  renderTexts(); // PLAINTEXT | CIPHERTEXT Display
  renderKeyboard();
}

function renderBackground() {
  fill(gui.secLightColor);
  rect(0, 0, gui.width, gui.height)
}

function renderTexts() {
  // Background
  fill(gui.priColor);
  rect(0, 0, gui.width, 30);
  fill(gui.secLightColor);
  rect(gui.width / 2 - 2, 0, 2, 30);

  // Plaintext
  fill(gui.lightColor);
  textSize(20);
  text(gui.plaintext, 10, 22);

  // Ciphertext
  fill(gui.lightColor);
  textSize(20);
  text(gui.ciphertext, gui.width / 2 + 10, 22);
}

function renderKeyboard() {

}
