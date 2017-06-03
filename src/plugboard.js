//
// plugboard.js
// Plugboard object for enigma machine
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//

// Constructor
function Plugboard(rawPlugs) {

  // Create the [[Char]] array from the raw string
  var plugs = rawPlugs.split(' ').map(function(rawPlug) {
    return rawPlug.split('');
  })

  return {
    // Returns the corresponding char mapping
    mapping: function(char) {
      for (var i = 0; i < plugs.length; i++) {
        var tuple = plugs[i];
        if (tuple[0] == char) return tuple[1];
        if (tuple[1] == char) return tuple[0];
      }
      return char;
    }
  };
}
