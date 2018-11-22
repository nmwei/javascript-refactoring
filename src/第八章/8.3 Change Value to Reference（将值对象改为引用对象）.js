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






class Customer {
  static _instances = {};

  static loadCustomers() {
    new Customer('Lemon Car Hire').store()
    new Customer('Associated Coffee Mathines').store()
    new Customer('Bilston Gasworks').store()
  }

  static getNamed(name) {
    return Customer._instances[name]
  }

  constructor(name) {
    this._name = name
  }

  store() {
    Customer._instances[this.getName()] = this
  }

  getName() {
    return this._name
  }
}

Customer.loadCustomers()

class Order {
  constructor(customerName) {
    this._customer = Customer.getNamed(customerName)
  }

  getCustomerName() {
    return this._customer.getName()
  }

  setCustomer(customerName) {
    this._customer = new Customer(customerName)
  }
}

