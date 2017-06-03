//
// reflector.js
// Reflector object for enigma machine
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//

// Constructor
function Reflector(rawMapping) {

  // Create the [[Char]] array from the raw string
  var reflections = ALPHABET.split('').map(function (alph, i) {
    return [alph, rawMapping[i]];
  });

  return {
    // Returns the corresponding char mapping
    mapping: function(char) {
      for (var i = 0; i < reflections.length; i++) {
        var tuple = reflections[i];
        if (tuple[0] == char) return tuple[1];
      }
    }
  };
}
