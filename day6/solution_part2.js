var common = require('../common.js');
common.debug_mode = true

String.prototype.sortByFrequency = function() {
  map = {};
  // Easy frequency analysis
  for (let i of this) {
    map[i] ? map[i]++ : map[i] = 1;
  }
  // First sort the keys by the numeric frequencies, then by alphabetising matching keys
  return Object.keys(map).sort(function(a, b) {return map[b]-map[a]||(a>b?1:a<b?-1:0)});
}

var signal = common.readWords('input.txt').join('');

const message_length = 8;

var message = '';

for (var j = 0; j < message_length; j++) {
  common.debug('Iteration ' + j);
  var letters = '';
  for (var i = j; i < signal.length; i+= message_length) {
    letters += signal[i];
  }
  letters = letters.sortByFrequency();
  message += letters[letters.length - 1];
}

console.log(message);

