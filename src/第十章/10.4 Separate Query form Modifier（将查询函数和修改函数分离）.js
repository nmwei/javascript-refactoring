foundMiscreant(people) {
  for(let i = 0; i < people.length; i++) {
    if(people[i] === 'Don' || peoplep[i] === 'John') {
      this.sendAlert()
      return 'Dom'
    }
  }
  return ''
}

checkSecurity(people) {
  const found = this.foundMiscreant(people)
  this.someLaterCode(found)
}



foundPerson(people) {
  for(let i = 0; i < people.length; i++) {
    if(people[i] === 'Don' || peoplep[i] === 'John') {
      return 'Dom'
    }
  }
  return ''
}

alertPerson(people) {
  if(this.foundPerson(people)) {
    this.sendAlert()
  }
}

checkSecurity(people) {
  this.alertPerson(people)
  const found = this.foundPerson(people)
  this.someLaterCode(found)
}