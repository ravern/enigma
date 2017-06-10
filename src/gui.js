//
// gui.js
// All the GUI for the emulator
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//

var gui;

function createGUI() {

  // Recreate GUI object
  gui = {
    width: 1280,
    height: 720,
    keyboardHeight: 300,
    titlebarHeight: 30,

    priColor: [30, 40, 50],
    secColor: [48, 44, 21],
    lightColor: [240,227,103],
    secLightColor: [205, 133, 63],

    plaintext: '',
    ciphertext: ''
  };

  // Create the canvas
  createCanvas(gui.width, gui.height);

  // Defaults
  noStroke();
}

function renderGUI() {
  // Render visual components
  renderBackground();
  renderTitlebar(); // PLAINTEXT | CIPHERTEXT Display
  renderKeyboard();
  renderLampboard();
}

function renderBackground() {
  fill(gui.secLightColor);
  rect(0, 0, gui.width, gui.height)
}

function renderTitlebar() {
  // Background
  fill(gui.priColor);
  rect(0, 0, gui.width, gui.titlebarHeight);
  fill(gui.secLightColor);
  rect(gui.width / 2 - 2, 0, 2, gui.titlebarHeight);

  // Plaintext
  fill(gui.lightColor);
  textSize(20);
  textAlign(LEFT);
  text(gui.plaintext, 10, 22);

  // Ciphertext
  fill(gui.lightColor);
  textSize(20);
  text(gui.ciphertext, gui.width / 2 + 10, 22);
}

function renderKeyboard() {

  // Background
  fill(gui.lightColor);
  rect(0, gui.height - gui.keyboardHeight, gui.width / 2, gui.keyboardHeight);
  fill(gui.priColor);
  textSize(30);
  textAlign(CENTER);
  text('KEYBOARD', gui.width / 4, gui.height - gui.keyboardHeight + 50);

  var rows = [
    'QWERTZUIO',
    'ASDFGHJK',
    'PYXCVBNML'
  ];
  var keysize = 45;
  var yOff = 80

  for (var i = 0; i < rows[0].length; i++) {
    gui.selectedKey == rows[0][i] ? fill(gui.secLightColor) : fill(gui.priColor);
    rect(40 + i * (keysize + 18), gui.height - gui.keyboardHeight + yOff + 10, keysize, keysize);

    gui.selectedKey == rows[0][i] ? fill(gui.priColor) : fill(gui.lightColor);
    textSize(32);
    textAlign(CENTER);
    text(rows[0][i], 40 + i * (keysize + 18) + 22, gui.height - gui.keyboardHeight + yOff + 10 + 34)
  }

  for (var i = 0; i < rows[1].length; i++) {
    gui.selectedKey == rows[1][i] ? fill(gui.secLightColor) : fill(gui.priColor);
    rect(75 + i * (keysize + 18), gui.height - gui.keyboardHeight + yOff + 10 + (keysize + 20), keysize, keysize);

    gui.selectedKey == rows[1][i] ? fill(gui.priColor) : fill(gui.lightColor);
    textSize(32);
    textAlign(CENTER);
    text(rows[1][i], 75 + i * (keysize + 18) + 22, gui.height - gui.keyboardHeight + yOff + 10 + 34 + (keysize + 20))
  }

  for (var i = 0; i < rows[2].length; i++) {
    gui.selectedKey == rows[2][i] ? fill(gui.secLightColor) : fill(gui.priColor);
    rect(40 + i * (keysize + 18), gui.height - gui.keyboardHeight + yOff + 10 + (keysize + 20) * 2, keysize, keysize);

    gui.selectedKey == rows[2][i] ? fill(gui.priColor) : fill(gui.lightColor);
    textSize(32);
    textAlign(CENTER);
    text(rows[2][i], 40 + i * (keysize + 18) + 22, gui.height - gui.keyboardHeight + yOff + 10 + (keysize + 20) * 2 + 34)
  }
}

function renderLampboard() {

  // Background
  fill(gui.priColor);
  rect(gui.width / 2, gui.height - gui.keyboardHeight, gui.width / 2, gui.keyboardHeight);
  fill(gui.lightColor);
  textSize(30);
  textAlign(CENTER);
  text('LAMPBOARD', gui.width / 4 * 3, gui.height - gui.keyboardHeight + 50);

  var rows = [
    'QWERTZUIO',
    'ASDFGHJK',
    'PYXCVBNML'
  ];
  var keysize = 45;
  var yOff = 80

  for (var i = 0; i < rows[0].length; i++) {
    gui.selectedLamp == rows[0][i] ? fill(gui.secColor) : fill(gui.lightColor);
    rect(gui.width / 2 + 40 + i * (keysize + 18), gui.height - gui.keyboardHeight + yOff + 10, keysize, keysize);

    gui.selectedLamp == rows[0][i] ? fill(gui.lightColor) : fill(gui.secColor);
    textSize(32);
    textAlign(CENTER);
    text(rows[0][i], gui.width / 2 + 40 + i * (keysize + 18) + 22, gui.height - gui.keyboardHeight + yOff + 10 + 34)
  }

  for (var i = 0; i < rows[1].length; i++) {
    gui.selectedLamp == rows[1][i] ? fill(gui.secColor) : fill(gui.lightColor);
    rect(gui.width / 2 + 75 + i * (keysize + 18), gui.height - gui.keyboardHeight + yOff + 10 + (keysize + 20), keysize, keysize);

    gui.selectedLamp == rows[1][i] ? fill(gui.lightColor) : fill(gui.secColor);
    textSize(32);
    textAlign(CENTER);
    text(rows[1][i], gui.width / 2 + 75 + i * (keysize + 18) + 22, gui.height - gui.keyboardHeight + yOff + 10 + 34 + (keysize + 20))
  }

  for (var i = 0; i < rows[2].length; i++) {
    gui.selectedLamp == rows[2][i] ? fill(gui.secColor) : fill(gui.lightColor);
    rect(gui.width / 2 + 40 + i * (keysize + 18), gui.height - gui.keyboardHeight + yOff + 10 + (keysize + 20) * 2, keysize, keysize);

    gui.selectedLamp == rows[2][i] ? fill(gui.lightColor) : fill(gui.secColor);
    textSize(32);
    textAlign(CENTER);
    text(rows[2][i], gui.width / 2 + 40 + i * (keysize + 18) + 22, gui.height - gui.keyboardHeight + yOff + 10 + (keysize + 20) * 2 + 34)
  }
}
