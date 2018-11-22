class Person{
  isMale() {}
  getCode() {}
}

class Male extends Person {
  isMale() {
    return true
  }

  getCode() {
    return 'M'
  }
}

class Female extends Person {
  isMale() {
    return false
  }

  getCode() {
    return 'F'
  }
}




class Person{
  static createMale() {
    return new Person(true, 'M')
  }

  static createFemale() {
    return new Person(false, 'F')
  }

  constructor(isMale, code) {
    this._isMale= isMale
    this._code = code
  }

  isMale() {
    return this._isMale
  }
  getCode() {
    return this._code
  }
}