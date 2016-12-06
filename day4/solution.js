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

function validRoom(name) {
  // Extract the first part, as an array, then doing frequency analysis
  var letters = [ ...name.match(/([a-z\-]+)\d/)[1] ].sortByFrequency();
  var checksum = letters.slice(0, 5).join('');

  // Extract the given checksum, check if it matches ours
  var suggested_checksum = name.match(/\[([a-z]+)\]/)[1];
  return checksum == suggested_checksum;
}

var rooms = common.readWords('input.txt')
                  .map(r => r.replace(/-/g,''))
                  .filter(validRoom);

var total = rooms.map(r => +r.replace(/\D/g,''))
                 .reduce((a, b) => a + b, 0);

console.log("The total is " + total);