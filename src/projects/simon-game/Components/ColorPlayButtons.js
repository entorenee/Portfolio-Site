import React, { Component } from 'react'
import PropTypes from 'prop-types'

import simonSound0 from '../sounds/simonSound0.mp3'
import simonSound1 from '../sounds/simonSound1.mp3'
import simonSound2 from '../sounds/simonSound2.mp3'
import simonSound3 from '../sounds/simonSound3.mp3'
import { keyboardHandler } from '../helpers'
import '../style/ColorPlayButtons.css'

class ColorPlayButtons extends Component {
  componentDidMount() {
    this.buttonSounds = [
      new Audio(simonSound0),
      new Audio(simonSound1),
      new Audio(simonSound2),
      new Audio(simonSound3),
    ]
  }

  addActiveClass = () => {
    const { activeClass, id } = this.props
    const button = document.getElementById(`btn-${id}`)
    this.buttonSounds[id].play()
    button.classList.add(activeClass)
  }

  clickButton = () => {
    const { activeClass, id, playerSelectButton } = this.props
    const button = document.getElementById(`btn-${id}`)
    button.classList.remove(activeClass)
    playerSelectButton(Number(id))
  }

  render() {
    const { 'aria-label': ariaLabel, isPlayersTurn, gameOn, id } = this.props

    return (
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
      <div
        id={`btn-${id}`}
        className={`color-buttons btn-${id}`}
        onMouseDown={() => {
          if (isPlayersTurn && gameOn) {
            this.addActiveClass()
          }
        }}
        onMouseUp={() => {
          if (isPlayersTurn) {
            this.clickButton()
          }
        }}
        onKeyPress={e => {
          if (keyboardHandler(e) && isPlayersTurn && gameOn) {
            this.addActiveClass()
            this.clickButton()
          }
        }}
        aria-label={ariaLabel}
        role='button'
        tabIndex={0}
      />
    )
  }
}

ColorPlayButtons.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  activeClass: PropTypes.string.isRequired,
  isPlayersTurn: PropTypes.bool.isRequired,
  playerSelectButton: PropTypes.func.isRequired,
  gameOn: PropTypes.bool.isRequired,
}

export default ColorPlayButtons
