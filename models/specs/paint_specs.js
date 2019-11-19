const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function () {

  let paint;

  beforeEach(function () {
    paint = new Paint(1);
  });

  it('should have paint', function () {
    const actual = paint.amount;
    assert.strictEqual(actual, 1);
  });
  it('should check if empty', function () {
    const actual = paint.checkIfEmpty();
    assert.strictEqual(actual, false);
  });
  it('should empty itself of paint', function () {
    paint.emptyPaint();
    const actual = paint.checkIfEmpty();
    assert.strictEqual(actual, true);
  });
});
