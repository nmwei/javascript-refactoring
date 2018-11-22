class Room {
  withinPlan(plan) {
    const low = this.daysTempRange().getLow()
    const high = this.daysTempRange().getHigh()
    return plan.withinRange(low, high)
  }
}

class HeatingPlan {
  withinRange(low, high) {
    return low >= this._range.getLow() && high <= this._range.getHigh()
  }
}



class Room {
  withinPlan(plan) {
    return plan.withinRange(this.daysTempRange())
  }
}

class HeatingPlan {
  withinRange(arg) {
    return arg.getLow() >= this._range.getLow() && arg.getHigh() <= this._range.getHigh()
  }
}