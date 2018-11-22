function checkSecurity(peoples) {
  let found = false
  for(let i = 0; i < peoples.length; i++) {
    if(!found) {
      if(peoples[i] === 'Don' || peoples[i] === 'John') {
        sendAlert()
        found = true
      }
    }
  }
}


function checkSecurity(peoples) {
  for(let i = 0; i < peoples.length; i++) {
    if(peoples[i] === 'Don' || peoples[i] === 'John') {
      sendAlert()
      break;
    }
  }
}




function checkSecurity(peoples) {
  let found = ''
  for(let i = 0; i < peoples.length; i++) {
    if(!found) {
      if(peoples[i] === 'Don' || peoples[i] === 'John') {
        sendAlert()
        found = peoples[i]
      }
    }
  }
  someLaterCode(found)
}




function checkSecurity(peoples) {
  const found = foundMiscreant(peoples)
  someLaterCode(found)
}

function foundMiscreant(peoples) {
  for(let i = 0; i < peoples.length; i++) {
    if(peoples[i] === 'Don' || peoples[i] === 'John') {
      sendAlert()
      return peoples[i]
    }
  }
  return ''
}