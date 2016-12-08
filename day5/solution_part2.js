var common = require('../common.js');
common.debug_mode = true

var crypto = require('crypto');
String.prototype.hash = function() {
  return crypto.createHash('md5').update(this.toString()).digest('hex');
};

const room = common.readWords('input.txt')[0];
common.debug("Starting with room " + room);

const password_length = 8;

var iteration = 4515058;
var password = Array(password_length).fill('_');

while (password.includes('_')) {
  var current_string = room + iteration;
  var current_hash = current_string.hash();
  if (current_hash.substring(0, 5) == "00000") {
    common.debug('Found a new character on iteration ' + iteration + ' with hash of ' + current_hash);
    position = current_hash[5];
    if (position < password_length) {
      common.debug(' The hash specified a valid position. The password has "' + password[position] + '" at this position');
      if (password[position] == '_') {
        password[position] = current_hash[6];
        common.debug('Password is now ' + password.join(''));
      }
    }
  }
  iteration++;
}


