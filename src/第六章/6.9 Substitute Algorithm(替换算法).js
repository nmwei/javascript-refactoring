const foundPerson = (people) => {
  for(let i = 0; i < people.length; i++) {
    if(people[i] === 'Don') {
      return 'Don'
    }
    if(people[i] === 'John') {
      return 'John'
    }
    if(people[i] === 'Kent') {
      return 'Kent'
    }
    return ''
  }
}


const foundPerson = (people) => {
  let candidates = ['Don', 'John', 'Kent']
  for(let i = 0; i < people.length; i++) {
    if(candidates.includes(people[i])) {
      return people[i]
    }
  }
  return ''
}