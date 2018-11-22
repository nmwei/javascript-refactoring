class Employee {
  static ENGINEER = 0;
  static SALESMAN = 1;
  static MANAGER = 2;

  constructor(type) {
    this._type = type
  }
}


class Employee {
  static ENGINEER = 0;
  static SALESMAN = 1;
  static MANAGER = 2;

  static create(type) {
    return new Employee(type)
  }

  constructor(type) {
    this._type = type
  }
}