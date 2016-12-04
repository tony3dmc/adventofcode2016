var common = require('../common.js');

function validTriangle(sides) {
  if (sides[0] + sides[1] > sides[2]) {
    if (sides[1] + sides[2] > sides[0]) {
      if (sides[2] + sides[0] > sides[1]) {
        return true;
      }
    }
  }
  return false;
}


var ints = common.readWords('input.txt').toInts();
var triangles = [];
for (var i = 0; i < ints.length; i += 9) {
  triangles.push([ints[i], ints[i + 3], ints[i + 6]]);
  triangles.push([ints[i + 1], ints[i + 4], ints[i + 7]]);
  triangles.push([ints[i + 2], ints[i + 5], ints[i + 8]]);
}

var valid = triangles.filter(validTriangle);

console.log("There were " + valid.length + " valid triangles");
