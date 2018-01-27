import React from 'react';
import PropTypes from 'prop-types';
import { keyboardHandler } from '../helpers';
import '../style/MarkerSelector.css';

const MarkerSelector = props => {
  const { playerSelectMarker } = props;
  return (
    <div id="playerSelect" className="player-selector-modal">
      <div className="player-marker-selector">
        <h1>Choose Your Marker</h1>
        <div className="ttt-marker-wrap">
          <div
            className="ttt-marker ttt-select-x"
            onClick={() => playerSelectMarker('X')}
            onKeyPress={e => {
              if (keyboardHandler(e)) playerSelectMarker('X');
            }}
            role="button"
            tabIndex={0}
          >
            X
          </div>
          <div
            className="ttt-marker ttt-select-o"
            onClick={() => playerSelectMarker('O')}
            onKeyPress={e => {
              if (keyboardHandler(e)) playerSelectMarker('O');
            }}
            role="button"
            tabIndex={0}
          >
            O
          </div>
        </div>
      </div>
    </div>
  );
};

MarkerSelector.propTypes = {
  playerSelectMarker: PropTypes.func.isRequired
};

export default MarkerSelector;
