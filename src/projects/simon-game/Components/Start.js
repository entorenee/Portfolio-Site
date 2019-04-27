import React from 'react';
import PropTypes from 'prop-types';

import { keyboardHandler } from '../helpers';
import '../style/Start.css';

const Start = props => {
  const { startGame } = props;
  return (
    <div className="start-button-wrapper">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
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
};

Start.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default Start;
