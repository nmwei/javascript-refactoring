const discount = (inputVal, quantity, yearToDate) => {
  if(inputVal > 50) inputVal -= 2
  if(quantity > 100) inputVal -= 1
  if(yearToDate > 1000) inputVal -= 4
  return inputVal
}


const discount = (inputVal, quantity, yearToDate) => {
  let result = inputVal
  if(inputVal > 50) result -= 2
  if(quantity > 100) result -= 1
  if(yearToDate > 1000) result -= 4
  return result
}