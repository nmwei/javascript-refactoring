class Account {
  _type: AccountType;
  _interestRate: Number;

  interestForAmount_days(amount, days) {
    return this._interestRate * amount * days / 365
  }
}

class Account {
  _type: AccountType;

  interestForAmount_days(amount, days) {
    return this._type.getInterestRate() * amount * days / 365
  }
}

class AccountType {
  _interestRate: Number;

  setInterestRate(arg) {
    this._interestRate = arg
  }

  getInterestRate() {
    return this._interestRate
  }
}


class Account {
  _interestRate: Number;
  _type: AccountType;

  interestForAmount_days(amount, days) {
    return this.getInterestRate() * amount * days / 365
  }

  getInterestRate() {
    return this._interestRate
  }

  setInterestRate(arg) {
    this._interestRate = arg
  }
}


class Account {
  _type: AccountType;

  interestForAmount_days(amount, days) {
    return this.getInterestRate() * amount * days / 365
  }

  getInterestRate() {
    return this._type.getInterestRate()
  }

  setInterestRate(arg) {
    this._type.setInterestRate(arg)
  }
}

class AccountType {
  _interestRate: Number;

  setInterestRate(arg) {
    this._interestRate = arg
  }

  getInterestRate() {
    return this._interestRate
  }
}