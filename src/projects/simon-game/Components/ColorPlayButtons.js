import React, { Component } from 'react';
import PropTypes from 'prop-types';
import simonSound0 from '../sounds/simonSound0.mp3';
import simonSound1 from '../sounds/simonSound1.mp3';
import simonSound2 from '../sounds/simonSound2.mp3';
import simonSound3 from '../sounds/simonSound3.mp3';
import { keyboardHandler } from '../helpers';
import '../style/ColorPlayButtons.css';

class ColorPlayButtons extends Component {
  constructor() {
    super();
    this.addActiveClass = this.addActiveClass.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  componentDidMount() {
    this.buttonSounds = [
      new Audio(simonSound0),
      new Audio(simonSound1),
      new Audio(simonSound2),
      new Audio(simonSound3)
    ];
  }

  addActiveClass() {
    const button = document.getElementById(`btn-${this.props.id}`);
    this.buttonSounds[this.props.id].play();
    button.classList.add(this.props.activeClass);
  }

  clickButton() {
    const button = document.getElementById(`btn-${this.props.id}`);
    button.classList.remove(this.props.activeClass);
    this.props.playerSelectButton(Number(this.props.id));
  }

  render() {
    const { isPlayersTurn, gameOn, id } = this.props;

    return (
      <div
        id={`btn-${id}`}
        className={`color-buttons btn-${id}`}
        onMouseDown={() => {
          if (isPlayersTurn && gameOn) {
            this.addActiveClass();
          }
        }}
        onMouseUp={() => {
          if (isPlayersTurn) {
            this.clickButton();
          }
        }}
        onKeyPress={e => {
          if (keyboardHandler(e) && isPlayersTurn && gameOn) {
            this.addActiveClass();
            this.clickButton();
          }
        }}
        role="button"
        tabIndex={0}
      />
    );
  }
}

ColorPlayButtons.propTypes = {
  id: PropTypes.string.isRequired,
  activeClass: PropTypes.string.isRequired,
  isPlayersTurn: PropTypes.bool.isRequired,
  playerSelectButton: PropTypes.func.isRequired,
  gameOn: PropTypes.bool.isRequired
};

export default ColorPlayButtons;
