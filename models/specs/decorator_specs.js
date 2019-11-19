const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');

describe('Decorator', function () {

  let decorator;

  beforeEach(function () {
    decorator = new Decorator(10);
  });

  it('should be empty', function () {
    const actual = decorator.paintStock;
    assert.strictEqual(actual, 10);
  });
  it('should be able to add a can of paint', function () {
    decorator.addPaintCan(1);
    const actual = decorator.paintStock;
    assert.strictEqual(actual, 11);
  });
  it('should have enough paint for the room', function () {
    const room = new Room(10, false);
    const room_space = room.area;
    const actual = decorator.enoughPaint(room_space);
    assert.strictEqual(actual, true);
  });
  it('should be able to paint the room', function () {
    const room = new Room(10, false);
    const room_space = room.area;
    room.getPainted();
    const actual = room.painted;
    assert.strictEqual(actual, true);
  });
});
