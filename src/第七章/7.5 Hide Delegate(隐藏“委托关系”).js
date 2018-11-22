class Person {
  _department: Department;

  getDepartment() {
    return this._department
  }

  setDepartment(arg) {
    this._department = arg
  }
}

class Department {
  _chargeCode: string;
  _manager: Person;

  Department(manager) {
    this._manager = manager
  }

  getManager() {
    return this._manager
  }
}

const m = john.getDepartment().getManager()




class Person {
  _department: Department;

  getManager() {
    return this._department.getManager()
  }

  setDepartment(arg) {
    this._department = arg
  }
}

class Department {
  _chargeCode: string;
  _manager: Person;

  Department(manager) {
    this._manager = manager
  }

  getManager() {
    return this._manager
  }
}

const m = john.getManager()