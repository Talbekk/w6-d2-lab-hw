const Paint = function(amount) {
  this.amount = amount;
}

Paint.prototype.checkIfEmpty = function () {
  if ( this.amount === 0 ){
  return true;
  }
  else {
    return false;
  }
}
Paint.prototype.emptyPaint = function () {
    this.amount = 0;
}

module.exports = Paint;
