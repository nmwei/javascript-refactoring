class InlineMethod{
  constructor() {
    this._numberOfLateDeliveries = 6
  }

  getRatine() {
    return this.moreThanFiveLateDeliveries() ? 2 : 1
  }

  moreThanFiveLateDeliveries() {
    return this._numberOfLateDeliveries > 5
  }
}

// class InlineMethod{
//   constructor() {
//     this._numberOfLateDeliveries = 6
//   }

//   getRatine() {
//     return this._numberOfLateDeliveries > 5 ? 2 : 1
//   }
// }

const inlineLethod = new InlineMethod()
console.log(inlineLethod.getRatine()) 