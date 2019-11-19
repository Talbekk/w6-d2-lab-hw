const Decorator = function() {
  this.paintStock = [];
}


Decorator.prototype.addPaintCan = function (amount) {
  this.paintStock += amount;
}

Decorator.prototype.numberOfPaintCans = function () {
  return this.paintStock.length;
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
