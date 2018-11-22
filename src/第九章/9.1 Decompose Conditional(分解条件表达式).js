class Production{
  price() {
    if(date.before(this.SUMMER_START) || date.after(this.SUMMER_END)) {
      return quantity * this._winterRate + this._winterServiceCharge
    } else {
      return quantity * _summerRate
    }
  }
}




class Production{
  price(date) {
    if(this.notSummer(date)) {
      return this.winterCharge(quantity)
    } else {
      return this.summerCharge(quantity)
    }
  }

  notSummer(date) {
   return date.before(this.SUMMER_START) || date.after(this.SUMMER_END)
  }

  winterCharge(quantity) {
   return quantity * this._winterRate + this._winterServiceCharge
  }

  summerCharge(quantity) {
    return quantity * _summerRate
  }
 }