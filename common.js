Array.prototype.toInts = function() {
  return this.map(function(i){return +i;});
};
module.exports.debug_mode = false;
module.exports.getFullFile = function(path) {
  var fs = require('fs');
  return fs.readFileSync(path).toString().trim()
}
module.exports.readWords = function(path) {
  return this.getFullFile(path).split(/\s+/);
}
module.exports.debug = function(msg) {
  this.debug_mode && console.log(msg);
}
