const Decorator = function() {
  this.paintStock = [];
}


Decorator.prototype.addPaintCan = function (paint) {
  this.paintStock.push(paint);
}

Decorator.prototype.numberOfPaintCans = function () {
  return this.paintStock.length;
}

Decorator.prototype.totalLitresOfPaint = function () {
  let total = 0;
  for (let currentPaint of this.paintStock) {
    total += currentPaint.amount;
  }
  return total;
}

Decorator.prototype.enoughPaint = function (area) {
  if ( this.paintStock >= area){
    return true;
  }
    else {
      return false;
    }
}





module.exports = Decorator;
