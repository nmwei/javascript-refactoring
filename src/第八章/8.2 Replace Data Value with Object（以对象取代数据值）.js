class Order {
  constructor(customer) {
    this._customer = customer
  }

  getCustomer() {
    return this._customer
  }

  setCustomer(arg) {
    this._customer = arg
  }
}

class Customer {
  constructor(name) {
    this._name = name
  }

  getName() {
    return this._name
  }
}

class Order {
  constructor(customerName) {
    this._customer = new Customer(customerName)
  }

  getCustomerName() {
    return this._customer.getName()
  }

  setCustomer(customerName) {
    this._customer = new Customer(customerName)
  }
}