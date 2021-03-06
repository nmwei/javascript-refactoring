class Employee {
  static ENGINEER = 0; //工程师
  static SALESMAN = 1; //销售员
  static MANAGER = 2; //管理者

  constructor(type) {
    this._type = type
  }

  payAmount() {
    switch(this._type) {
      case Employee.ENGINEER:
        return this._monthlySalary
      case Employee.SALESMAN:
        return this._monthlySalary + this._commission
      case Employee.MANAGER:
        return this._monthlySalary + this._bonus
      default:
        throw new Error('Incorrect Employee') 
    }
  }
}






class Employee {
  constructor(type) {
    this._type = type
  }

  getType() {
    return this._type.getTypeCode()
  }

  setType(arg) {
    this._type = EmployeeType.newType(arg)
  }

  payAmount() {
    switch(this.getType()) {
      case EmployeeType.ENGINEER:
        return this._monthlySalary
      case EmployeeType.SALESMAN:
        return this._monthlySalary + this._commission
      case EmployeeType.MANAGER:
        return this._monthlySalary + this._bonus
      default:
        throw new Error('Incorrect Employee') 
    }
  }
}

class EmployeeType{
  static ENGINEER = 0; //工程师
  static SALESMAN = 1; //销售员
  static MANAGER = 2; //管理者

  getTypeCode() {}

  newType() {
    switch(arg) {
      case EmployeeType.ENGINEER:
        return new Engineer()
      case EmployeeType.SALESMAN:
        return new Saleman()
      case EmployeeType.MANAGER:
        return new Manager()
      default:
        throw new Error('Incorrect Employee Code')
    }
  }
}

class Engineer extends EmployeeType {
  getTypeCode() {
    return Employee.ENGINEER
  }
}

class Manager extends EmployeeType {
  getTypeCode() {
    return Employee.MANAGER
  }
}

class Saleman extends EmployeeType{
  getTypeCode() {
    return Engineer.SALESMAN
  }
}