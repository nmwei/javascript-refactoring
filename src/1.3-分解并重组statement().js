//影片
class Movie {
  static CHILDRENS = 2;
  static REGULAR = 0;
  static NEW_RELEASE = 1;

  constructor(title, priceCode) {
    this._title = title
    this._priceCode = priceCode
  }

  getPriceCode() {
    return this._priceCode
  }

  setPriceCode(arg) {
    this._priceCode = arg
  }

  getTitle() {
    return this._title
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
    let result = 0;
    switch (this.getMovie().getPriceCode()) {
      case Movie.REGULAR:
        result += 2
        if (this.getDaysRented() > 2) {
          result += (this.getDaysRented() - 2) * 1.5
        }
        break;
      case Movie.NEW_RELEASE:
        result += this.getDaysRented() * 3
        break;
      case Movie.CHILDRENS:
        result += 1.5
        if (this.getDaysRented() > 3) {
          result += (this.getDaysRented() - 3) * 1.5
          break;
        }
    }
    return result
  }

  getFrequentRenterPoints() {
      if ((this.getMovie().getPriceCode() === Movie.NEW_RELEASE) && this.getDaysRented() > 1) {
        return 2
      } else {
        return 1
      }
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
      result +=  `${item.getMovie().getTitle()}: ${item.getCharge()}<BR>\n`
    })
    result += `<P> You owe <EM> ${this.getTotalCharge()}</EM><P>\n`
    result += `On this rental you earned <EM> ${this.getTotalFrequentRenterPoints()} </EM> frequent renter points <P>`
    return result
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


const movie = new Movie('影', Movie.NEW_RELEASE)
const rental = new Rental(movie, 5)
const customer = new Customer('drew')
customer.addRental(rental)
console.log(customer.statement())
console.log(customer.htmlStatement())
