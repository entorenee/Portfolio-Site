import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keyboardHandler } from '../helpers';
import '../style/Counter.css';

class Counter extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.timerTotal !== nextProps.timerTotal) {
      return true;
    }
    return false;
  }

  render() {
    const { name, adjustTimers, timerTotal } = this.props;
    let timerName;
    if (name === 'sessionTime') {
      timerName = 'Session Length';
    }
    if (name === 'breakTime') {
      timerName = 'Break Length';
    }

    return (
      <div id={`${name}-timer-controls`} className="timer-controls">
        <p className="timer-control-name">{timerName}</p>
        <div className="controls">
          <div
            className="adjust-time"
            onClick={() => adjustTimers(name, '-')}
            onKeyPress={e => {
              if (keyboardHandler(e)) adjustTimers(name, '-');
            }}
            role="button"
            tabIndex={0}
          >
            -
          </div>
          <div className="timerTotal">{timerTotal}</div>
          <div
            className="adjust-time"
            onClick={() => adjustTimers(name, '+')}
            onKeyPress={e => {
              if (keyboardHandler(e)) adjustTimers(name, '+');
            }}
            role="button"
            tabIndex={0}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  name: PropTypes.string.isRequired,
  adjustTimers: PropTypes.func.isRequired,
  timerTotal: PropTypes.number.isRequired
};

export default Counter;
