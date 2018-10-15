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
}

//顾客
class Customer {
  _name
  _rentals = new Array()

  constructor (name) {
    this._name = name
  }

  addRental(rental) {
    this._rentals.push(rental)
  }

  getName() {
    return this._name
  }

  statement() {
    let totalAmount = 0
    let frequentRenterPoints = 0
    const rentals = this._rentals
    // \n表示换行
    let result = `Rental Record for ${this.getName()}\n` 
    rentals.forEach(item => {
      let thisAmount = 0 //费用
      switch(item.getMovie().getPriceCode()) {
         case Movie.REGULAR:
          thisAmount += 2
          if(item.getDaysRented() > 2) {
            thisAmount += (item.getDaysRented() - 2) * 1.5
          }
          break;
        case Movie.NEW_RELEASE:
          thisAmount += item.getDaysRented() * 3
          break;
        case Movie.CHILDRENS:
          thisAmount += 1.5 
          if(item.getDaysRented() > 3) {
            thisAmount += (item.getDaysRented() -3) * 1.5
            break;
          } 
      }
      //积分
      frequentRenterPoints ++
      if((item.getMovie().getPriceCode() === Movie.NEW_RELEASE) && item.getDaysRented() > 1 ) {
        frequentRenterPoints ++
      } 
      
      //\t表示制表符
      result += `\t${item.getMovie().getTitle()}\t${thisAmount}\n`
      totalAmount += thisAmount 
    })

    result += `Amount owed is ${totalAmount} \n`
    result += `You earned ${frequentRenterPoints} frequent renter points`
    return result
  }
}


const movie = new Movie('影', Movie.NEW_RELEASE)
const rental = new Rental(movie, 5)
const customer = new Customer('drew')
customer.addRental(rental)
debugger;
console.log(customer.statement())
