class Person {
  static O = 0;
  static A = 1;
  static B = 2;
  static AB = 3;

  constructor(bloodGroup) {
    this._bloodGroup = bloodGroup
  }

  setBloodGroup(arg) {
    this._bloodGroup = arg
  }

  getBloodGroup() {
    return this._bloodGroup
  }
}




class BloodGroup{
  static O = new BloodGroup(0);
  static A = new BloodGroup(1);
  static B = new BloodGroup(2);
  static AB = new BloodGroup(3);
  static _values = [O, A, B, AB]

  constructor(code) {
    this._code = code
  }

  getCode() {
    return this._code
  }

  static code(arg) {
    return BloodGroup._values[arg]
  }
}

class Person {
  constructor(bloodGroup) {
    this._bloodGroup = bloodGroup
  }

  setBloodGroup(bloodGroup) {
    this._bloodGroup = bloodGroup
  }

  getBloodGroup() {
    return this._bloodGroup
  }
}