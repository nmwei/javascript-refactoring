class Employee {
  _person = new Person()

  getName() {
    return this._person.getName()
  }

  setName(arg) {
    this._person.setName(arg)
  }

  toString() {
    return `Emp: ${this._person.getLastName()}`
  }
}


class Person{
  _name 

  getName() {
    return this._name
  }

  setName(arg) {
    this._name = arg
  } 

  getLastName() {
    return this._name.substring(this._name.lastIndexOf(' ') + 1)
  }
}








class Employee extends Person {
  toString() {
    return `Emp: ${this.getLastName()}`
  }
}


class Person{
  _name 

  getName() {
    return this._name
  }

  setName(arg) {
    this._name = arg
  } 

  getLastName() {
    return this._name.substring(this._name.lastIndexOf(' ') + 1)
  }
}