class Employee {
  _name;
  _id;
  constructor(name, id) {
    this._name = name
    this._id = id
  }

  isPriviliged() {}

  assignCar() {}
}

class Manager extends Employee {
  constructor(name, id, grade) {
    this._name = name
    this._id = id
    this._grade = grade
    if(this.isPriviliged()) {
      this.assignCar()
    }
  }
}



class Employee {
  _name;
  _id;
  constructor(name, id) {
    this._name = name
    this._id = id
  }

  initialize() {
    if(this.isPriviliged()) {
      this.assignCar()
    }
  }

  isPriviliged() {}

  assignCar() {}
}

class Manager extends Employee {
  constructor(name, id, grade) {
    super(name, id)
    this._grade = grade
    this.initialize()
  }
}



