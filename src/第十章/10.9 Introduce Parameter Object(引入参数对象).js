class Entry{
  constructor(value, chargeDate) {
    this._value = value
    this._chargeDate = chargeDate
  }

  getDate() {
    return this._chargeDate
  }

  getValue() {
    return this._value
  }
}

class Account{
  getFlowBetween(start, end) {
    let result = 0
    this._entries.forEach(entry => {
      if(entry.getDate().equals(start) || entry.getDate().equals(end) || (entry.getDate().after(start) && entry.getDate().before(end))) {
        result += entry.getValue()
      }
    })
    return result
  }
}

const flow = anAccount.getFlowBetween(startDate, endDate)







class Entry{
  constructor(value, chargeDate) {
    this._value = value
    this._chargeDate = chargeDate
  }

  getDate() {
    return this._chargeDate
  }

  getValue() {
    return this._value
  }
}

class DateRange {
  constructor(start, end) {
    this._start = start
    this._end = end
  }

  getStart() {
    return this._start
  }

  getEnd() {
    return this._end
  }

  includes(arg) {
    return arg.equals(this._start) || 
    arg.equals(this._end) || 
    (arg.after(this._start) && arg.before(this._end))
  }
}

class Account{
  getFlowBetween(range) {
    let result = 0
    this._entries.forEach(entry => {
      if(range.includes(entry.getDate())){
        result += entry.getValue()
      }
    })
    return result
  }
}

const flow = anAccount.getFlowBetween(new DateRange(startDate, endDate))





