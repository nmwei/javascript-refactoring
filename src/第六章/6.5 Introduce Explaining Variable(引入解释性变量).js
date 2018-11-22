class IntroduceExplainingVariable {
  price() {
    //price is base price - quantity discount + shipping
    return this._quantity * this._itemPrice - 
    Math.max(0, this._quantity - 500) * this._itemPrice * 0.05 +
    Math.min(this._quantity * this._itemPrice * 0.1, 100.0)
  }
}


class IntroduceExplainingVariable {
  price() {
    //price is base price - quantity discount + shipping
    const basePrice = this._quantity * this._itemPrice
    const quantityDiscount = Math.max(0, this._quantity - 500) * this._itemPrice * 0.05
    const shipping = Math.min(basePrice * 0.1, 100.0)
    return basePrice - quantityDiscount + shipping
  }
}

class IntroduceExplainingVariable {
  price() {
    return this.basePrice() - this.quantityDiscount() +this.shipping()
  }

  basePrice() {
    return this._quantity * this._itemPrice
  }

  quantityDiscount(){
    return Math.max(0, this._quantity - 500) * this._itemPrice * 0.05
  }

  shipping() {
    Math.min(basePrice * 0.1, 100.0)
  }
}