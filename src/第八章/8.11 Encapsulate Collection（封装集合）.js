class Course {
  constructor(name, isAdvanced) {
    this._name = name
    this._isAdvanced = isAdvanced
  }

  isAdvanced() {
    return this._isAdvanced
  }
}

class Person {
  getCourses() {
    return this._courses
  }

  setCourses(arg) {
    this._courses = arg
  }
}




class Course {
  constructor(name, isAdvanced) {
    this._name = name
    this._isAdvanced = isAdvanced
  }

  isAdvanced() {
    return this._isAdvanced
  }
}

class Person {
  constructor() {
    this._courses = []
  }

  addCourse(arg) {
    return this._courses.push(arg)
  }

  removeCourse(arg) {
    this._courses.filter(item => item !== arg)
  }

  initializeCourse(arg) {
    this._courses = this._courses.concat(arg)
  }

  getCourses() {
    return this._courses.map(item => item)
  }
}