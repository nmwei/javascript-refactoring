class Account {
  gamma(inputVal, quantity, yearToDate) {
    let importantValue1 = (inputVal * quantity) + this.delta()
    let importantValue2 = (inputVal * yearToDate) + 100
    if(yearToDate - importantValue1 > 100) {
      importantValue2 -= 20
    }
    let importantValue3 = importantValue2 * 7
    return importantValue3 - 2 * importantValue1
  }
}

class Account {
  gamma(inputVal, quantity, yearToDate) {
    return new Gamma(this, inputVal, quantity, yearToDate).compute()
  }
}

class Gamma {
  _account;
  inputVal;
  quantity;
  yearToDate;
  importantValue1;
  importantValue2;
  importantValue3;

  constructor(account, inputVal, quantity, yearToDate) {
    this._account = account
    this.inputVal = inputVal
    this.quantity = quantity
    this.yearToDate = yearToDate
  }

  compute() {
    this.importantValue1 = (this.inputVal * this.quantity) + this._account.delta()
    this.importantValue2 = (this.inputVal * this.yearToDate) + 100
    this.importantThing();
    this.importantValue3 = importantValue2 * 7
    return this.importantValue3 - 2 * this.importantValue1
  }

  importantThing() {
    if(this.yearToDate - this.importantValue1 > 100) {
      this.importantValue2 -= 20
    }
  }
 }