import React from 'react';
import PropTypes from 'prop-types';

import '../style/Key.css';

class NumKey extends React.Component {
  shouldComponentUpdate() {
    return this.props.value === 'clear';
  }

  render() {
    // eslint-disable-next-line
    const { type, value, display, addNum, clearDisplay, operations } = this.props;
    let keyVal;
    let processFunc;

    // Dynamically updates clear button
    if (value !== 'clear') {
      keyVal = value;
    } else {
      keyVal = display === '0' ? 'AC' : 'C';
    }

    // Sets onClick function for button types (clear, number, math)
    switch (type) {
      case 'number':
        processFunc = () => {
          addNum(this.props.value);
          const keyDiv = document.getElementById(`btn-${value}`).classList;
          keyDiv.add('numKey-active');
          setTimeout(() => keyDiv.remove('numKey-active'), 300);
        };
        break;
      case 'clear':
        processFunc = () => {
          clearDisplay();
          const keyDiv = document.getElementById(`btn-${value}`).classList;
          keyDiv.add('numKey-active');
          setTimeout(() => keyDiv.remove('numKey-active'), 300);
        };
        break;
      case 'math':
        processFunc = () => {
          operations(value);
          if (value === '%' || value === '=') {
            const keyDiv = document.getElementById(`btn-${value}`).classList;
            keyDiv.add('numKey-active');
            setTimeout(() => keyDiv.remove('numKey-active'), 300);
          }
        };
        break;
      default:
        throw new Error(`${type} is not valid for processing onClick function of the component`);
    }

    return (
      /* Keypress ESLint rules on the div are disabled here as a keyboard handler is
         declared elsewhere within the application. */
      // eslint-disable-next-line
      <div id={`btn-${value}`} className="numKey" onClick={processFunc}>
        {keyVal}
      </div>
    );
  }
}

NumKey.propTypes = {
  addNum: PropTypes.func.isRequired,
  operations: PropTypes.func.isRequired,
  clearDisplay: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default NumKey;
