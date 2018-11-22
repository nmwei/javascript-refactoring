class Customer {
  _orders = new Set()

  friendOrders() {
    return this._orders
  }

  addOrder(arg) {
    arg.setCustomer(this)
  }

  getPriceFor(order) {
    return order.getDiscountedPrice()
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

  getDiscountedPrice() {
    return this.getGrossPrice() * (1- this._customer.getDiscount())
  }
}


class Customer {
  _orders = new Set()

  friendOrders() {
    return this._orders
  }

  addOrder(arg) {
    arg.setCustomer(this)
  }

  getPriceFor(order) {
    return order.getDiscountedPrice(this)
  }
}

class Order {
  getDiscountedPrice(customer) {
    return this.getGrossPrice() * (1- customer.getDiscount())
  }
}