class JobItem{
  constructor(unitPrice, quantity, isLabor, employee) {
    this._unitPrice = unitPrice
    this._quantity = quantity
    this._isLabor = isLabor
    this._employee = employee
  }

  getUnitPrice() {
    return this._isLabor ? this._employee.getRate() : this._unitPrice
  }

  getTotalPrice() {
    return this.getUnitPrice() * this._quantity
  }

  getQuantity() {
    return this._quantity
  }

  getEmployee() {
    return this._employee
  }
}

class Employee {
  constructor(rate) {
    this._rate = rate
  }

  getRate() {
    return this._rate
  }
}








class JobItem{
  constructor(unitPrice, quantity) {
    this._unitPrice = unitPrice
    this._quantity = quantity
  }

  getUnitPrice() {
    return this._unitPrice
  }

  getTotalPrice() {
    return this.getUnitPrice() * this._quantity
  }

  getQuantity() {
    return this._quantity
  }
}

class LaborItem extends JobItem{
  constructor(quantity, employee) {
    super(0, quantity)
    this._employee = employee
  }

  getUnitPrice() {
    return this._employee.getRate() 
  }

  getEmployee() {
    return this._employee
  }
}

class Employee {
  constructor(rate) {
    this._rate = rate
  }

  getRate() {
    return this._rate
  }
}