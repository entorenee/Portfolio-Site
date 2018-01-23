import React from 'react';
import PropTypes from 'prop-types';
import '../style/Counter.css';

class Counter extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.timerTotal !== nextProps.timerTotal) {
      return true;
    }
    return false;
  }

  render() {
    let timerName;
    if (this.props.name === 'sessionTime') {
      timerName = 'Session Length';
    }
    if (this.props.name === 'breakTime') {
      timerName = 'Break Length';
    }

    return (
      <div id={`${this.props.name}-timer-controls`} className="timer-controls">
        <p className="timer-control-name">{timerName}</p>
        <div className="controls">
          <button
            className="adjust-time"
            onClick={() => this.props.adjustTimers(this.props.name, '-')}
          >
            -
          </button>
          <div className="timerTotal">{this.props.timerTotal}</div>
          <button
            className="adjust-time"
            onClick={() => this.props.adjustTimers(this.props.name, '+')}
          >
            +
          </button>
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
