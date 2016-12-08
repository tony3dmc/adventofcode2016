var common = require('../common.js');
common.debug_mode = true

var crypto = require('crypto');
String.prototype.hash = function() {
  return crypto.createHash('md5')
               .update(this.toString())
               .digest('hex');
};

var room = common.readWords('input.txt')[0];
common.debug("Starting with room " + room);

var iteration = 0;
var password = '';
while (password.length < 8) {
  var current_string = room + iteration;
  var current_hash = current_string.hash();
  if (current_hash.substring(0, 5) == "00000") {
    password += current_hash.substring(5, 6);
    common.debug('Found a new character on iteration ' + iteration + ' with hash of ' + current_hash + ': ' + password);
  }
  iteration++;
}

