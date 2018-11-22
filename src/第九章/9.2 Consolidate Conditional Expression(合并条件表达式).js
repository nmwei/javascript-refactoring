class Demo {
  disabilityAmount() {
    if(this._seniority < 2) return 0
    if(this._monthsDisabled > 12) return 0
    if(this._isPartTime) return 0
    // compute the disability amount
    //...
  }
}


class Demo {
  disabilityAmount() {
    if(this.isNotEligibleForDisability()) return 0
    // compute the disability amount
    //...
  }

  isNotEligibleForDisability() {
    return ((this._seniority < 2) || (this._monthsDisabled > 12) || (this._isPartTime))
  }
}



class Demo {
  if(this.onVacation()) {
    if(this.lengthOfService() > 10) {
      return 1
    }
  }
  return 0.5


  return (this.onVacation() && this.lengthOfService() > 10) ? 1 : 0.5
}