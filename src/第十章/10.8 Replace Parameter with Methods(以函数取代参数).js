

getPrice() {
  const basePrice = this._quantity * this._itemPrice
  const discountLevel = this._quantity > 100 ? 2 : 1
  return this.discountPrice(basePrice, discountLevel)
}

discountPrice(basePrice, discountLevel) {
  return discountLevel === 2 ? basePrice * 0.1 : basePrice * 0.05
}







getPrice() {
  return this.getDiscountLevel() === 2 ? this.getBasePrice() * 0.1 : this.getBasePrice() * 0.05
}

getBasePrice() {
  return this._quantity * this._itemPrice
}

getDiscountLevel() {
  return this._quantity > 100 ? 2 : 1
}