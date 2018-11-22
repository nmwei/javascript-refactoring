class Account {
  overdraftCharge() {
    if(this._type.isPremium()) {
      let result = 10
      if(this._daysOverdrawn > 7) {
        result += (this._daysOverdrawn -7) * 0.85
      }
      return result
    } else {
      return this._daysOverdrawn * 1.75
    }
  }

  bankCharge() {
    const result = 4.5 
    if(this._daysOverdrawn > 0) {
      result += this.overdraftCharge()
    }
    return result
  }
}




class Account {
  bankCharge() {
    const result = 4.5 
    if(this._daysOverdrawn > 0) {
      result += this._type.overdraftCharge(this._daysOverdrawn)
    }
    return result
  }
}

class AccountType {
  overdraftCharge(daysOverdrawn) {
    if(this.isPremium()) {
      let result = 10
      if(daysOverdrawn > 7) {
        result += (daysOverdrawn -7) * 0.85
      }
      return result
    } else {
      return daysOverdrawn * 1.75
    }
  }
}


class AccountType {
  overdraftCharge(account) {
    if(this.isPremium()) {
      let result = 10
      if(account.getDaysOverdrawn() > 7) {
        result += (account.getDaysOverdrawn() -7) * 0.85
      }
      return result
    } else {
      return account.getDaysOverdrawn() * 1.75
    }
  }
}