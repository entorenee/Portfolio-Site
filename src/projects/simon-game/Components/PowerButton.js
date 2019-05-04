import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { keyboardHandler } from '../helpers'
import '../style/PowerButton.css'

const PowerButton = props => {
  const { gameOn, toggleGamePower } = props
  return (
    <div className='power-button-wrapper'>
      <span className='power-identifiers'>OFF</span>
      <div
        className='toggle-power'
        onClick={() => toggleGamePower()}
        onKeyPress={e => {
          if (keyboardHandler(e)) toggleGamePower()
        }}
        role='button'
        tabIndex={0}
      >
        <span
          className={classnames('toggle-power-button', {
            'power-on': gameOn,
          })}
        />
      </div>
      <span className='power-identifiers'>ON</span>
    </div>
  )
}

PowerButton.propTypes = {
  toggleGamePower: PropTypes.func.isRequired,
  gameOn: PropTypes.bool.isRequired,
}

export default PowerButton
