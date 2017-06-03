//
// rotor.js
// Rotor object for enigma machine
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//

// Constructor
function Rotor(rawMapping, ringSetting, rotorOffset, turnoverChar) {

  // Create the [[Char]] array from the raw string
  var mapping = ALPHABET.split('').map(function (alph, i) {
    return [alph, rawMapping[mod(i + ringSetting, ALPHABET.length)]];
  });

  // turnoverPos is the index when it's next moves turns the next rotor
  var turnoverPos = ALPHABET.indexOf(turnoverChar);

  return {
    // Advances the rotor by one
    advance: function() {
      rotorOffset = mod(rotorOffset + 1, ALPHABET.length);
    },
    // Whether it's next move turns the next rotor
    nextIsTurnover: function() {
      return rotorOffset == turnoverPos;
    },
    // Returns the corresponding char mapping, when going forwards
    forwardMapping: function(char) {
      // Offset the char before it 'enters' the rotor
      var charWithOffset = ALPHABET[mod(ALPHABET.indexOf(char) + rotorOffset, ALPHABET.length)];

      // Find it's mapping
      var mapNoOffset;
      for (var i = 0; i < mapping.length; i++) {
        var tuple = mapping[i];
        if (tuple[0] == charWithOffset) {
          mapNoOffset = tuple[1];
          break;
        }
      }

      // Offset the mapped char and return
      return ALPHABET[mod(ALPHABET.indexOf(mapNoOffset) - rotorOffset, ALPHABET.length)];
    },

    // Returns the corresponding char mapping, when letter is on its return journey
    returnMapping: function(char) {
      // Offset the char before it 'enters' the rotor
      var charWithOffset = ALPHABET[mod(ALPHABET.indexOf(char) + rotorOffset, ALPHABET.length)];

      // Find it's mapping
      var mapNoOffset;
      for (var i = 0; i < mapping.length; i++) {
        var tuple = mapping[i];
        if (tuple[1] == charWithOffset) {
          mapNoOffset = tuple[0];
          break;
        }
      }

      // Offset the mapped char and return
      return ALPHABET[mod(ALPHABET.indexOf(mapNoOffset) - rotorOffset, ALPHABET.length)];
    }
  };
}
