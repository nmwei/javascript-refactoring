
class ExtractMethod {
  _name = 'ExtractMethod'

  printOwing() {
    const arr = [1,2,3]
    let sum = 0

    //print banner
    console.log(`--------------`)
    console.log(`Customer Owes`)
    console.log(`--------------`)

    arr.forEach(item => {
      sum += item
    })
    
    //print details
    console.log(`name: ${this._name}`)
    console.log(`amount: ${sum}`)
  }
}

//const e = new ExtractMethod()
//e.printOwing()



class ExtractMethod1 {
  _name = 'ExtractMethod'

  printOwing() {
    const arr = [1,2,3]
    let sum = 0
    this.printBanner()
    arr.forEach(item => {
      sum += item
    })
    
    //print details
    console.log(`name: ${this._name}`)
    console.log(`amount: ${sum}`)
  }

  printBanner() {
    console.log(`--------------`)
    console.log(`Customer Owes`)
    console.log(`--------------`)
  }
}

//const e1 = new ExtractMethod1()
//e1.printOwing()

class ExtractMethod2 {
  _name = 'ExtractMethod'

  printOwing() {
    const arr = [1,2,3]
    let sum = 0
    this.printBanner()
    arr.forEach(item => {
      sum += item
    })
    this.printDetails(sum)
  }

  printBanner() {
    console.log(`--------------`)
    console.log(`Customer Owes`)
    console.log(`--------------`)
  }

  printDetails(sum) {
    console.log(`name: ${this._name}`)
    console.log(`amount: ${sum}`)
  }
}

//const e2 = new ExtractMethod1()
//e2.printOwing()

class ExtractMethod3 {
  _name = 'ExtractMethod'

  printOwing() {
    const sum = this.getOutStanding()
    this.printBanner()
    this.printDetails(sum)
  }

  getOutStanding() {
    const arr = [1,2,3]
    let sum = 0
    arr.forEach(item => {
      sum += item
    })
    return sum
  }

  printBanner() {
    console.log(`--------------`)
    console.log(`Customer Owes`)
    console.log(`--------------`)
  }

  printDetails(sum) {
    console.log(`name: ${this._name}`)
    console.log(`amount: ${sum}`)
  }
}

const e3 = new ExtractMethod3()
e3.printOwing()
