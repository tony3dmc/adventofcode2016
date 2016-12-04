class FingerController {
  constructor(grid, position) {
    this.x = position.x;
    this.y = position.y;

    this.positions = [];

    this.grid_height = grid.length;
    this.grid_width = grid[0].length;
  }

  move(direction) {
    switch (direction) {
      case 'U':
        this.y -= 1;
        break;
      case 'D':
        this.y += 1;
        break;
      case 'L':
        this.x -= 1;
        break;
      case 'R':
        this.x += 1;
        break;
    }
    this.positions.push({x: this.x, y: this.y});

    if (this.offTheGrid()) {
      this.moveBack();
    }
  }

  moveBack() {
    this.positions.pop();
    var lastPosition = this.positions[this.positions.length - 1];
    this.x = lastPosition.x;
    this.y = lastPosition.y;
  }

  lookAtGrid() {
    return grid[this.y][this.x]
  }

  offTheGrid() {
    if (this.x < 0 || this.x >= this.grid_width) {
      return true;
    }
    if (this.y < 0 || this.y >= this.grid_height) {
      return true;
    }
    return false;
  }

}

var grid = [[1,2,3],[4,5,6],[7,8,9]];
var startingPosition = {x: 1, y: 1};
var finger = new FingerController(grid, startingPosition);

var fs = require('fs');
var instructions = fs.readFileSync('input.txt').toString().replace(/\s+$/, '');
var lines = instructions.split("\n");
for (var line_no = 0; line_no < lines.length; line_no++) {
  for (var position = 0; position < lines[line_no].length; position++) {
    finger.move(lines[line_no][position]);
  }
  console.log("Finger is on grid item " + finger.lookAtGrid());
}
