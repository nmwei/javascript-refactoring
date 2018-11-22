class Site {
  _customer;

  getCustomer() {
    return this._customer
  }
}

class Customer {
  getName() {}

  getPlan() {}

  getHistory() {}
}

class PaymentHistory {
  getWeeksDelinquentInLastYear() {}
}

//示例代码
const customer = site.getCustomer()
const plan = customer ? customer.getPlan() : BillingPlan.basic() 
const customerName = customer ? customer.getName() : 'occupant'
const weeksDelinquent = customer ? customer.getHistory().getWeeksDelinquentInLastYear() : 0









class Site {
  _customer;

  getCustomer() {
    return this._customer ? this._customer : Customer.newNull()
  }
}

class Customer {
  static newNull() {
    return new NullCustomer();
  }

  isNull() {
    return false
  }

  getName() {}

  getPlan() {}

  getHistory() {}
}

class NullCustomer extends Customer {
  isNull() {
    return true
  }

  getName() {
    return 'occupant'
  }

  getPlan() {
    return BillingPlan.basic() 
  }

  getHistory() {
    return PaymentHistory.newNull()
  }
}

class PaymentHistory {
  static newNull() {
    return new NullPaymentHistory();
  }

  getWeeksDelinquentInLastYear() {}
}

class NullPaymentHistory extends PaymentHistory {
  getWeeksDelinquentInLastYear() {
    return 0
  }
}

//示例代码
const customer = site.getCustomer()
const plan = customer.getPlan()
const customerName = customer.getName()
const weeksDelinquent = customer.getHistory().getWeeksDelinquentInLastYear()



