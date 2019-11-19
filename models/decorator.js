const Decorator = function() {
  this.paintStock = 10;
}


Decorator.prototype.addPaintCan = function (amount) {
  this.paintStock += amount;
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
