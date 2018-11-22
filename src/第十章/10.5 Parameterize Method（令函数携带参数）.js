baseCharge() {
  let result = Math.min(this.lastUsage(), 100) * 0.03
  if(this.lastUsage() > 100) {
    result += (Math.min(this.lastUsage(), 200) -100) * 0.05
  }
  if(this.lastUsage() > 200) {
    result += (this.lastUsage() - 200) * 0.07
  }
  return new Dollars(result)
}



baseCharge() {
  let result = this.usageInRange(0, 100) * 0.03
  result += this.usageInRange(100, 200) + 0.05
  result += this.usageInRange(200, Number.MAX_SAFE_INTEGER)
  return new Dollars(result)
}

usageInRange(start, end) {
  return this.lastUsage() > start ? Math.min(this.lastUsage(), end) - start : 0
}


