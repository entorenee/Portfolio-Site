import React from 'react';
import PropTypes from 'prop-types';
import '../style/Counter.css';

const Counter = ({ adjustTimers, name, timerTotal }) => {
  const timerName = name === 'sessionTime' ? 'Session Length' : 'Break Length';

  return (
    <div id={`${name}-timer-controls`} className="timer-controls">
      <p className="timer-control-name">{timerName}</p>
      <div className="counter-controls">
        <button type="button" className="adjust-time" onClick={() => adjustTimers(name, '-')}>
          -
        </button>
        <div className="timerTotal">{timerTotal}</div>
        <button type="button" className="adjust-time" onClick={() => adjustTimers(name, '+')}>
          +
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  name: PropTypes.string.isRequired,
  adjustTimers: PropTypes.func.isRequired,
  timerTotal: PropTypes.number.isRequired,
};

export default Counter;
