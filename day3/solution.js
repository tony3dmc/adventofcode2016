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


var fs = require('fs');
var instructions = common.getFullFile('input.txt');

var counter = 0;
instructions.split(/\n\s+/).forEach(function(line) {
  var sides = line.trim().split(/\s+/).toInts();
  if (validTriangle(sides.sort())) {
    counter++;
  }
});

console.log("There were " + counter + " valid triangles supplied");
