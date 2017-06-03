//
// config.js
// Config
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//

// Config
var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var plugboard = Plugboard('AB JK');
var iiiRot = Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 0, 0, 'V');
var iiRot = Rotor('AJDKSIRUXBLHWTMCQGZNPYFVOE', 0, 0, 'E');
var iRot = Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 0, 0, 'Q');
var bReflect = Reflector('YRUHQSLDPXNGOKMIEBFZCWVJAT');
