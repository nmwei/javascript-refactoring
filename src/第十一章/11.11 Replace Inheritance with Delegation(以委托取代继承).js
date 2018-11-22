class MyStack extends Vector {
  push(element) {
    this.insertElement(element, 0)
  }

  pop() {
    const result = this.firstElement()
    this.removeElementAt(0)
    return result
  }
}





class MyStack {
  _vector = new Vector()

  push(element) {
    this._vector.insertElement(element, 0)
  }

  pop() {
    const result = this._vector.firstElement()
    this._vector.removeElementAt(0)
    return result
  }
  size() {
    return this.Vector.size()
  }

  isEmpty() {
    return this._vector.isEmpty()
  }
}

