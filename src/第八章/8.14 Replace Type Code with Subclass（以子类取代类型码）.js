class Employee {
  static ENGINEER = 0; //工程师
  static SALESMAN = 1; //销售员
  static MANAGER = 2; //管理者

  constructor(type) {
    this._type = type
  }
}








class Employee {
  static ENGINEER = 0; //工程师
  static SALESMAN = 1; //销售员
  static MANAGER = 2; //管理者

  static create(type) {
    switch(type) {
      case Employee.ENGINEER:
        return new Engineer()
      case Employee.SALESMAN:
        return new Saleseman()
      case Employee.MANAGER:
        return new Manager()
      default:
        throw new Error('Incorrect type code value')
    }
  }

  constructor(type) {
    this._type = type
  }

  getType() {
    return this._type
  }
}

class Engineer extends Employee {
  getType() {
    return Employee.ENGINEER
  }
}

class Saleseman extends Employee {
  getType() {
    return Employee.SALESMAN
  }
}

class Manager extends Employee {
  getType() {
    return Employee.MANAGER
  }
}