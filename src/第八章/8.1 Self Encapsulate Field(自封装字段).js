class IntRange {
  constructor(low, high) {
    this._low = low
    this._high = high
  }

  includes(arg) {
   return arg > this._low && arg < this._high 
  }

  grow(factor) {
    this._high *= factor
  }
}


class IntRange {
  constructor(low, high) {
    this.initialize(low, high)
  }

  initialize(low, high) {
    this._low = low
    this._high = high
  }

  includes(arg) {
    return arg > this.getLow() && arg < this.getHigh()
  }

  grow(factor) {
    this.setHigh(factor * this.getHigh())
  }

  getLow() {
    return this._low
  }

  setLow(arg) {
    this._low = arg
  }

  getHigh() {
    return this._high
  }

  setHigh(arg) {
    this._high = arg
  }
}

class CappedRange extends IntRange {
  constructor(low, high, cap) {
    super(low, high)
    this._cap = cap
  }

  getCap() {
    return this._cap
  }

  getHigh() {
    return Math.min(super.getHigh(), this.getCap())
  }
}