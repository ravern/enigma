//
// config.js
// Config
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//

// Config
var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var PLUGBOARD = Plugboard('');

var III_ROTOR = Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 0, 0, 'V');
var II_ROTOR = Rotor('AJDKSIRUXBLHWTMCQGZNPYFVOE', 0, 0, 'E');
var I_ROTOR = Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 0, 0, 'Q');

var B_REFLECTOR = Reflector('YRUHQSLDPXNGOKMIEBFZCWVJAT');

var plugboard = PLUGBOARD;
var rotors = [I_ROTOR, II_ROTOR, III_ROTOR];
var reflector = B_REFLECTOR;
