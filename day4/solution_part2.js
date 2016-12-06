var common = require('../common.js');

Array.prototype.sortByFrequency = function() {
  map = {};
  // Easy frequency analysis
  this.forEach(function(i) {
    map[i] ? map[i]++ : map[i] = 1;
  });
  // First sort the keys by the numeric frequencies, then by alphabetising matching keys
  return Object.keys(map).sort(function(a, b) {return map[b]-map[a]||(a>b?1:a<b?-1:0)});
}

function rotate(c) {
  if (c == '-' || c == ' ') return ' ';
  return String.fromCharCode(((c.charCodeAt(0)+1-97)%26)+97);
}

function validRoom(name) {
  // Extract the first part, with no hyphens, as an array, then doing frequency analysis
  var letters = [ ...name.replace(/-/g,'').match(/([a-z\-]+)\d/)[1] ].sortByFrequency();
  var checksum = letters.slice(0, 5).join('');

  // Extract the given checksum, check if it matches ours
  var suggested_checksum = name.match(/\[([a-z]+)\]/)[1];
  return checksum == suggested_checksum;
}

function decryptRoom(name) {
  [ name, shift ] = name.match(/([a-z-]+)-(\d+)/).slice(1);
  for (var i = 0; i < shift % 26; i++) {
    name = [...name].map(rotate).join('');
  }
  console.log([name, shift]);
}

var rooms = common.readWords('input.txt')
                  .filter(validRoom)
                  .map(decryptRoom);


