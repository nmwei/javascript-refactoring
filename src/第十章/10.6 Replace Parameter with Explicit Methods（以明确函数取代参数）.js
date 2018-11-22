class Employee {
  static ENGINEER = 0;
  static SALESMAN = 1;
  static MANAGER = 2;

  static create(type) {
    switch(type) {
      case Employee.ENGINEER:
        return new Engineer()
      case Employee.SALESMAN:
        return new Salesman()
      case Employee.MANAGER:
        return new Manager()
      default:
        throw new Error('Incorrect type value')
    }
  }
}

const e = Employee.create(Employee.ENGINEER)






class Employee {
  static createEngineer() {
    return new Engineer()
  }

  static createSalesman() {
    return new Salesman()
  }

  static createManager() {
    return new Manager()
  }
}

const e = Employee.createEngineer()