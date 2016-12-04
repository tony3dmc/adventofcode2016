Array.prototype.toInts = function() {
  return this.map(function(i){return +i;});
};
module.exports.getFullFile = function(path) {
  var fs = require('fs');
  return fs.readFileSync(path).toString().trim()
}
module.exports.readWords = function(path) {
  return this.getFullFile(path).split(/\s+/);
}
