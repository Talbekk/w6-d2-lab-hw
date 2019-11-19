const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const Paint = require('../paint.js');

describe('Decorator', function () {

  let decorator;
  let paintCan;
  let room;

  beforeEach(function () {
    decorator = new Decorator();
    paintCan = new Paint(10);
    room = new Room(10);
  });
  describe('paintStock', function () {
    it('should start with no cans of paint', function () {
      const actual = decorator.paintStock;
      assert.deepStrictEqual(actual, []);
    });
    it('should be able to return number of paint cans', function () {
      const actual = decorator.numberOfPaintCans();
      assert.strictEqual(actual, 0);
    });
    it('should be able to add a can of paint', function () {
      decorator.addPaintCan(paintCan);
      const actual = decorator.numberOfPaintCans();
      assert.strictEqual(actual, 1);
    });
    it('should return how much paint there is', function() {
      decorator.addPaintCan(paintCan);
      decorator.addPaintCan(paintCan);
      const actual = decorator.totalLitresOfPaint();
      assert.deepStrictEqual(actual, 20);
    });
    it('should be able to check if there is enough paint for a room', function() {
      decorator.addPaintCan(paintCan);
      decorator.addPaintCan(paintCan);
      const room_space = room.area;
      const total_paint = decorator.totalLitresOfPaint(); const actual = decorator.enoughPaintForRoom(room_space, total_paint);
      assert.deepStrictEqual(actual, true);
    });
  });








  xit('should be empty', function () {
    const actual = decorator.paintStock;
    assert.strictEqual(actual, 10);
  });
  xit('should be able to add a can of paint', function () {
    decorator.addPaintCan(1);
    const actual = decorator.paintStock;
    assert.strictEqual(actual, 11);
  });
  xit('should have enough paint for the room', function () {
    const room = new Room(10);
    const room_space = room.area;
    const actual = decorator.enoughPaint(room_space);
    assert.strictEqual(actual, true);
  });
  xit('should be able to paint the room', function () {
    const room = new Room(10);
    const room_space = room.area;
    room.getPainted();
    const actual = room.painted;
    assert.strictEqual(actual, true);
  });

});
