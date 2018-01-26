import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Counter.css';

class Counter extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.moveCount !== nextProps.moveCount || this.props.gameOn !== nextProps.gameOn) {
      return true;
    }
    return false;
  }

  render() {
    const moveCountString =
      this.props.moveCount < 10 ? `0${this.props.moveCount}` : this.props.moveCount;
    let moveCountDisplay;
    if (!this.props.gameOn) {
      moveCountDisplay = '';
    } else {
      moveCountDisplay = this.props.moveCount !== 0 ? moveCountString : '--';
    }

    if (moveCountDisplay === '! !' || moveCountDisplay === 'WIN!') {
      const ele = this.currentCount;
      ele.classList.add('counter-blink');
      setTimeout(() => {
        ele.classList.remove('counter-blink');
      }, 1700);
    }
    return (
      <div className="counter-wrap">
        <div className="counter-display">
          <span
            className="current-count"
            ref={input => {
              this.currentCount = input;
            }}
          >
            {moveCountDisplay}
          </span>
        </div>
        <span className="count-label">COUNT</span>
      </div>
    );
  }
}

Counter.propTypes = {
  moveCount: PropTypes.string.isRequired,
  gameOn: PropTypes.bool.isRequired
};

export default Counter;
