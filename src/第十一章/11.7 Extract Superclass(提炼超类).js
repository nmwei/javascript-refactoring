class Employee{
  constructor(name, id, annualCost) {
    this._name = name
    this._id = id
    this._annualCost = annualCost
  }

  getAnnualCost() {
    return this._annualCost
  }

  getId() {
    return this._id
  }

  getName() {
    return this._name
  }
}

class Department{

  _staff = []

  constructor(name) {
    this._name = name
  }

  getStaff() {
    return this._staff
  }

  getTotalAnnualCost() {
    let result = 0
    this.getStaff().forEach(item => {
      result += item.getAnnualCost()
    })
    return result
  }

  getHeadCount() {
    return this._staff.length
  }

  addStaff(arg) {
    return this._staff.push(arg)
  }

  getName() {
    return this._name
  }
}







class Party{
  constructor(name) {
    this._name = name
  }

  getName() {
    return this._name
  }

  getAnnualCost() {}
}


class Employee extends Party{
  constructor(name, id, annualCost) {
    super(name)
    this._id = id
    this._annualCost = annualCost
  }

  getAnnualCost() {
    return this._annualCost
  }

  getId() {
    return this._id
  }
}

class Department extends Party{

  _staff = []

  constructor(name) {
    super(name)
  }

  getStaff() {
    return this._staff
  }

  getAnnualCost() {
    let result = 0
    this.getStaff().forEach(item => {
      result += item.getAnnualCost()
    })
    return result
  }

  getHeadCount() {
    return this._staff.length
  }

  addStaff(arg) {
    return this._staff.push(arg)
  }
}