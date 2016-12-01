const NORTH = 0;
const EAST  = 1;
const SOUTH = 2;
const WEST  = 3;

const LEFT  = 3;
const RIGHT = 1;

var route_filename = 'input.txt';

var Santa = {
  x: 0,
  y: 0,
  direction: NORTH,
  locations: [],

  turn: function(direction) {
    this.direction = (this.direction + direction) % 4;
  },

  move: function(distance) {
    switch(this.direction) {
      case NORTH:
        this.y += distance;
        break;
      case EAST:
        this.x += distance;
        break;
      case SOUTH:
        this.y -= distance;
        break;
      case WEST:
        this.x -= distance;
        break;
    }
    position = [this.x, this.y];
    if (this.locations[position]) {
      this.beenHereBefore();
    }
    this.locations[position] = 1;
  },

  status: function() {
    position = this.x + ", " + this.y;
    distance = Math.abs(this.x) + Math.abs(this.y);
    return "Santa is located at (" + position + "), " + distance + " blocks from starting point";
  },

  beenHereBefore: function() {
    console.log("Woah Rudolph! We've been here before!");
    console.log(this.status());
    process.exit();
  }
}

fs = require('fs');
fs.readFile(route_filename, function(err, route) {
  route.toString().split(', ').forEach(function(instruction) {

    direction = instruction[0];
    distance = parseInt(instruction.substring(1));
    if (direction == 'R') {
      Santa.turn(RIGHT);
    } else {
      Santa.turn(LEFT);
    }
    for (var i = 0; i < distance; i++) {
      Santa.move(1);
    }

  });
  console.log(Santa.status());
});
