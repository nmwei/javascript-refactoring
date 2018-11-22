withdraw(amount){
  if(mount > this._balance) {
    return -1
  } else {
    this._balance -= amount
    return 0
  }
}


withdraw(amount){
  if(mount > this._balance) {
    throw new Error('余额不足')
  } 
  this._balance -= amount
}