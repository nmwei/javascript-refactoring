class MfDateSub extends Date{
  nextDay() {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + 1)
  }
}

const mySubDate = new MfDateSub(2018, 9, 10)
console.log(mySubDate.nextDay())

class MfDateWrap {
  constructor() {
    this._original = new Date(...arguments)
  }

  getFullYear() {
    return this._original.getFullYear()
  }

  getMonth() {
    return this._original.getMonth()
  }

  getDate() {
    return this._original.getDate()
  }

  nextDay() {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + 1)
  }
}

const mfDateWrap = new MfDateWrap(2018, 9, 10)
console.log(mfDateWrap.nextDay())
