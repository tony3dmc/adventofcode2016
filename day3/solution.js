var common = require('../common.js');

function validTriangle(definition) {
  sides = definition.split(/\s+/).toInts();
  if (sides[0] + sides[1] > sides[2]) {
    if (sides[1] + sides[2] > sides[0]) {
      if (sides[2] + sides[0] > sides[1]) {
        return true;
      }
    }
  }
  return false;
}


var instructions = common.getFullFile('input.txt');
var valid = instructions.split(/\n\s+/).filter(validTriangle);

console.log("There were " + valid.length + " valid triangles");
