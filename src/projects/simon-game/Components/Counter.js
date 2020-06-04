import React from 'react'
import PropTypes from 'prop-types'
import '../style/Counter.css'

const Counter = (props) => {
  const { gameOn, moveCount } = props
  const moveCountString = moveCount < 10 ? `0${moveCount}` : moveCount
  let moveCountDisplay
  if (!gameOn) {
    moveCountDisplay = ''
  } else {
    moveCountDisplay = moveCount !== 0 ? moveCountString : '--'
  }

  if (moveCountDisplay === '! !' || moveCountDisplay === 'WIN!') {
    const ele = document.querySelector('.current-count')
    ele.classList.add('counter-blink')
    setTimeout(() => {
      ele.classList.remove('counter-blink')
    }, 1700)
  }
  return (
    <div className='counter-wrap'>
      <div className='counter-display'>
        <span className='current-count'>{moveCountDisplay}</span>
      </div>
      <span className='count-label'>COUNT</span>
    </div>
  )
}

Counter.propTypes = {
  moveCount: PropTypes.string.isRequired,
  gameOn: PropTypes.bool.isRequired,
}

export default Counter
