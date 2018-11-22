class Customer{}

class Order {
  getCustomer() {
    return this._customer
  }

  setCustomer(arg) {
    this._customer = arg
  }
}


class Customer {
  _orders = new Set()

  friendOrders() {
    return this,this._orders
  }

  addOrder(arg) {
    arg.setCustomer(this)
  }
}

class Order {
  getCustomer() {
    return this._customer
  }

  /**
   * 控制函数
   * @param {} arg 
   */
  setCustomer(arg) {
    if(arg) {
      this._customer.friendOrders().delete(this)
    }
    this._customer = arg
    if(this._customer) {
      this._customer.friendOrders().add(this)
    }
  }
}