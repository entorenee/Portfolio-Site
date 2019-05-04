import React from 'react'
import PropTypes from 'prop-types'

import '../style/Key.css'

const setProcessFunc = props => {
  const { addNum, clearDisplay, operations, type, value } = props

  switch (type) {
    case 'number':
      return () => {
        addNum(value)
      }
    case 'clear':
      return () => {
        clearDisplay()
      }
    case 'math':
      return () => {
        operations(value)
      }
    default:
      throw new Error(
        `${type} is not valid for processing onClick function of the component`,
      )
  }
}

const NumKey = props => {
  const { display, value, ...funcProps } = props
  const processFunc = setProcessFunc({ value, ...funcProps })
  let keyVal

  // Dynamically updates clear button
  if (value !== 'clear') {
    keyVal = value
  } else {
    keyVal = display === '0' ? 'AC' : 'C'
  }

  // Sets onClick function for button types (clear, number, math)

  return (
    /* Keypress ESLint rules on the div are disabled here as a keyboard handler is
       declared elsewhere within the application. */
    // eslint-disable-next-line
    <div id={`btn-${value}`} className='numKey' onClick={processFunc}>
      {keyVal}
    </div>
  )
}

NumKey.propTypes = {
  addNum: PropTypes.func.isRequired,
  operations: PropTypes.func.isRequired,
  clearDisplay: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default NumKey
