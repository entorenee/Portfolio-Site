import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keyboardHandler } from '../helpers';
import '../style/Start.css';

class Start extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { startGame } = this.props;
    return (
      <div className="start-button-wrapper">
        <div
          className="start-button"
          onClick={() => startGame()}
          onKeyPress={e => {
            if (keyboardHandler(e)) startGame();
          }}
          role="button"
          tabIndex={0}
        />
        START
      </div>
    );
  }
}

Start.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Start;
