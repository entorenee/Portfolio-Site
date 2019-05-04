exports.operation = (val1, operator, val2) => {
  let result
  switch (operator) {
    case '+':
      result = Number(val1) + Number(val2)
      break
    case '-':
      result = Number(val1) - Number(val2)
      break
    case '\u00D7':
      result = Number(val1) * Number(val2)
      break
    case '\u00F7':
      result = Number(val1) / Number(val2)
      break
    case '%':
      result = Number(val1) * (Number(val2) / 100)
      break
    default:
      throw new Error(`${operator} is not a programmed function.`)
  }
  return result.toString()
}

exports.percentageToDecimal = value => {
  const result = Number(value) / 100
  return result.toString()
}

exports.scientificNotation = (value, exponents = 0) => {
  const numLength = value.length
  let ePower = exponents
  if (numLength <= 11) {
    return `${value}e${exponents}`
  }
  const numSlice = value.slice(0, 12)
  const numRound = Number(numSlice) / 10
  ePower += numLength - 11
  return `${numRound.toString()}e${ePower}`
}
