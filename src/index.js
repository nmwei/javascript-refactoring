//价格基类
class Price {
  getPriceCode() {}

  getCharge(daysRented) {}

  getFrequentRenterPoints(daysRented) {
    return 1
  }
}

//儿童片价格
class ChildrensPrice extends Price {
  getPriceCode() {
    return Movie.CHILDRENS
  }

  getCharge(daysRented) {
    let result = 1.5
    if (daysRented > 3) {
      result += (daysRented - 3) * 1.5
    }
    return result
  }
}

//新片
class NewReleasePrice extends Price {
  getPriceCode() {
    return Movie.NEW_RELEASE
  }

  getCharge(daysRented) {
   return daysRented * 3
  }

  getFrequentRenterPoints(daysRented) {
    return daysRented > 1 ? 2 : 1
  }
}

//普通片
class RegularPrice extends Price {
  getPriceCode() {
    return Movie.REGULAR
  }

  getCharge(daysRented) {
    let result = 2
    if (daysRented > 2) {
      result += (daysRented - 2) * 1.5
    }
    return result
  }
}

//影片
class Movie {
  static CHILDRENS = 2;
  static REGULAR = 0;
  static NEW_RELEASE = 1;

  constructor(title, priceCode) {
    this._title = title
    this.setPriceCode(priceCode)
  }

  getPriceCode() {
    return this._price.getPriceCode()
  }

  setPriceCode(arg) {
    this._price = arg
    switch(arg) {
      case Movie.REGULAR:
        this._price = new RegularPrice()
        break;
      case Movie.CHILDRENS:
        this._price = new ChildrensPrice()
        break;
      case Movie.NEW_RELEASE:
        this._price = new NewReleasePrice()
        break;
      default:
        throw new Error('Incorrect Price Code')
    }
  }

  getTitle() {
    return this._title
  }

  getCharge(daysRented) {
    return this._price.getCharge(daysRented)
  }

  getFrequentRenterPoints(daysRented) {
    return this._price.getFrequentRenterPoints(daysRented)
  }
}

//租赁
class Rental {
  _movie
  _daysRented

  constructor(movie, daysRented) {
    this._movie = movie
    this._daysRented = daysRented
  }

  getDaysRented() {
    return this._daysRented
  }

  getMovie() {
    return this._movie
  }

  getCharge() {
    return this._movie.getCharge(this._daysRented)
  }

  getFrequentRenterPoints() {
    return this._movie.getFrequentRenterPoints(this._daysRented)
  }
}

//顾客
class Customer {
  _name
  _rentals = new Array()

  constructor(name) {
    this._name = name
  }

  addRental(rental) {
    this._rentals.push(rental)
  }

  getName() {
    return this._name
  }

  statement() {
    return new TextStatement().value(this)
  }

  htmlStatement() {
    return new HtmlStatement().value(this)
  }

  //费用
  getTotalCharge() {
    let result = 0
    const rentals = this._rentals
    rentals.forEach(item => {
      result += item.getCharge()
    })
    return result
  }

  //积分
  getTotalFrequentRenterPoints() {
    let result = 0
    const rentals = this._rentals
    rentals.forEach(item => {
      result += item.getFrequentRenterPoints()
    })
    return result
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


const movie = new Movie('影', Movie.NEW_RELEASE)
const rental = new Rental(movie, 5)
const customer = new Customer('drew')
customer.addRental(rental)
console.log(customer.statement())
console.log(customer.htmlStatement())
