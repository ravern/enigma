//
// util.js
// Utility functions
//
// Ravern Koh & Wei Qiang
// 1 June 2017
//

function mod(a, b) {
  if (b == 0) return;
  else if (a > 0) return a % b;
  while (a < 0) a += b;
  return a;
}
