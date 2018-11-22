const date = new Date(2018, 9, 10);
console.log(date.getFullYear(), date.getMonth(), date.getDate())//2018 9 10





const nextDay = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

const newStart1 = nextDay(date);
console.log(newStart, newStart1)