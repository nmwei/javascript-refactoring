class Person {
  _name: string;
  _officeTelephone = new TelephoneNumber()

  getName() {
    return this._name
  }

  getTelephoneNumber() {
    return this._officeTelephone.getTelephoneNumber()
  }

  getOfficeTelephone() {
    return this._officeTelephone
  }
}

class TelephoneNumber {
  _areaCode: string;
  _number: string;

  getTelephoneNumber() {
    return `(${this._areaCode})${this._number}`
  }

  getAreaCode() {
    return this._areaCode
  }

  setAreaCode(arg) {
    this._areaCode = arg
  }

  getNumber() {
    return this._number
  }

  setNumber(arg) {
    this._number = arg
  }
}








class Person{
  _name: string;
  _officeAreaCode: string;
  _officeNumber: string;

  getName() {
    return this._name
  }

  getTelephoneNumber() {
    return `(${this._officeAreaCode})${this._officeNumber}`
  }

  getOfficeAreaCode() {
    return this._officeAreaCode
  }

  setOfficeAreaCode(arg) {
    this._officeAreaCode = arg
  }

  getOfficeNumber() {
    return this._officeNumber
  }

  setOfficeNumber(arg) {
    this._officeNumber = arg
  }
}

