// class Currency {
//   constructor(code) {
//     this._code = code
//   }

//   getCode() {
//     return this._code
//   }

//   equals(arg) {
//     return this === arg
//   }
// }

// console.log(new Currency('USD').equals(new Currency('USD'))); //false 



class Currency {
  constructor(code) {
    this._code = code
  }

  getCode() {
    return this._code
  }

  equals(arg) {
    if(!(arg instanceof Currency)) {
      return false
    }
    return this._code === arg._code
  }
}

console.log(new Currency('USD').equals(new Currency('USD'))); //true