class Customer {
  statement() {
    const rentals = this._rentals
    // \n表示换行
    let result = `Rental Record for ${this.getName()}\n`
    rentals.forEach(item => {
      //\t表示制表符
      result += `\t${item.getMovie().getTitle()}\t${item.getCharge()}\n`
    })

    result += `Amount owed is ${this.getTotalCharge()} \n`
    result += `You earned ${this.getTotalFrequentRenterPoints()} frequent renter points`
    return result
  }

  htmlStatement() {
    const rentals = this._rentals
    let result = `<h1>Rentals for<EM>${this.getName()}</EM></h1><P>\n`
    rentals.forEach(item => {
      result += `${item.getMovie().getTitle()}: ${item.getCharge()}<BR>\n`
    })
    result += `<P> You owe <EM> ${this.getTotalCharge()}</EM><P>\n`
    result += `On this rental you earned <EM> ${this.getTotalFrequentRenterPoints()} </EM> frequent renter points <P>`
    return result
  }
}






class Customer {
  statement() {
    return new TextStatement().value(this)
  }

  htmlStatement() {
    return new HtmlStatement().value(this)
  }
}

class Statement {
  value(customer) {
    const rentals = customer._rentals
    let result = this.headerString(customer)
    rentals.forEach(item => {
      result += this.eachRentalString(item)
    })
    result += this.footerString(customer)
    return result
  }

  headerString(customer) {}

  eachRentalString(customer) {}

  footerString(customer) {}
}

class TextStatement extends Statement {
  headerString(customer) {
    return `Rental Record for ${customer.getName()}\n`
  }

  eachRentalString(rental) {
    return `\t${rental.getMovie().getTitle()}\t${rental.getCharge()}\n`
  }

  footerString(customer) {
    return `Amount owed is ${customer.getTotalCharge()} \n You earned ${customer.getTotalFrequentRenterPoints()} frequent renter points`
  }
}

class HtmlStatement extends Statement {
  headerString(customer) {
    return `<h1>Rentals for<EM>${customer.getName()}</EM></h1><P>\n`
  }

  eachRentalString(rental) {
    return `${rental.getMovie().getTitle()}: ${rental.getCharge()}<BR>\n`
  }

  footerString(customer) {
    return `<P> You owe <EM> ${customer.getTotalCharge()}</EM><P>\n On this rental you earned <EM> ${customer.getTotalFrequentRenterPoints()} </EM> frequent renter points <P>`
  }
}