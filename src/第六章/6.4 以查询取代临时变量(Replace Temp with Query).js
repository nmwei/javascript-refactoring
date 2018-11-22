class ReplaceTempWithQuery {
  getPrice() {
    const basePrice = this._quantity * this._itemPrice
    let discountFactory
    if(basePrice > 1000) {
      discountFactor = 0.95
    } else {
      discountFactor = 0.98
    }
    return basePrice * discountFactor
  }
}


class ReplaceTempWithQuery {
  getPrice() { 
    return basePrice() * discountFactor()
  }

  basePrice() {
    return this._quantity * this._itemPrice
  }

  discountFactor() {
    return this.basePrice() > 1000 ? 0.95 : 0.98
  }
}
