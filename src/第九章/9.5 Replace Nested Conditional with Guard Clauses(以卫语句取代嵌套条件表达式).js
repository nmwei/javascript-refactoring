function getPayAmount() {
  let result;
  if(_isDead) {
    result = deadAmount()
  } else {
    if(_isSeparated) {
      result = separatedAmount()
    } else {
      if(_isRetired) {
        result = retiredAomunt()
      } else {
        result = normalPayAmount()
      }
    }
  }
  return result
}


function getPayAmount() {
  if(_isDead) return deadAmount()
  if(_isSeparated) return separatedAmount()
  if(_isRetired) return retiredAomunt()
  return normalPayAmount()
}




function getAdjustedCapital() {
  let result = 0
  if(_capital > 0) {
    if(_intRate > 0 && _duration > 0) {
      result = (_income / _duration) * ADJ_FACTOR
    }
  }
  return result
}



function getAdjustedCapital() {
  if(_capital <= 0) return 0
  if(_intRate <= 0 || _duration <= 0) return 0
  return (_income / _duration) * ADJ_FACTOR
}


