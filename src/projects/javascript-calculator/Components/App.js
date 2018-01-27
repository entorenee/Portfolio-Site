import React from 'react';
import '../style/App.css';
import Key from './Key';
import Display from './Display';

import { operation, percentageToDecimal, scientificNotation } from '../helpers';

class App extends React.Component {
  constructor() {
    super();
    this.addNum = this.addNum.bind(this);
    this.operations = this.operations.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);

    // Set initial state

    this.state = {
      prevVal: null,
      currVal: null,
      display: '0',
      operator: null
    };
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeypress);
    window.addEventListener('keydown', this.handleKeydown);
  }

  clearDisplay() {
    // This method is called when the C/AC button is clicked.
    let states = { ...this.state };
    if (this.state.currVal === null && this.state.operator === null) {
      // Clear button resets to initial state if clicked after pressing equals.
      states = {
        prevVal: null,
        currVal: null,
        display: '0',
        operator: null
      };
    }
    if (this.state.display !== '0') {
      states.display = '0';
      states.currVal = '0';
    }
    if (this.state.display === '0') {
      states = {
        prevVal: null,
        currVal: null,
        display: '0',
        operator: null
      };
    }
    this.setState({ ...states });
    const activeOperator = document.querySelector('div.active');
    if (this.state.operator !== null) {
      document.getElementById(`btn-${this.state.operator}`).classList.add('active');
    }
    if (states.operator === null && activeOperator !== null) {
      activeOperator.classList.remove('active');
    }
  }

  addNum(number) {
    // Tests for initial operations or immediately after pressing operator
    const states = { ...this.state };
    if (number === '\u00B1') {
      // This code block addresses changing the state when the plus/minus key is selected.
      if (this.state.currVal !== null) {
        // Update display if currently manipulating currVal state.
        if (this.state.currVal.slice(0, 1) === '-') {
          states.currVal = this.state.currVal.slice(1);
          states.display = this.state.currVal.slice(1);
        } else {
          states.currVal = `-${this.state.currVal}`;
          states.display = `-${this.state.currVal}`;
        }
      } else {
        // Update display if currently manipulating prevVal state (ie after using equals operation)
        // eslint-disable-next-line no-lonely-if
        if (this.state.prevVal !== null && this.state.display === this.state.prevVal) {
          if (this.state.prevVal.slice(0, 1) === '-') {
            states.prevVal = this.state.prevVal.slice(1);
            states.display = this.state.prevVal.slice(1);
          } else {
            states.prevVal = `-${this.state.prevVal}`;
            states.display = `-${this.state.prevVal}`;
          }
        }
      }
    } else {
      // This code block addresses actual numbers and the decimal point excluding the plus/minus key
      // This 1st conditional serves as a reset if a number is pressed immediately following "=".
      if (
        this.state.currVal === null &&
        this.state.operator === null &&
        this.state.prevVal !== null
      ) {
        states.currVal = number;
        states.display = number;
        states.prevVal = null;
      }

      if (this.state.currVal === null || this.state.currVal === '0') {
        states.currVal = number;
        states.display = number;
      } else if (this.state.currVal.length < 14) {
        // Keeps the user from overflowing the display
        states.currVal = states.currVal.concat(number);
        states.display = states.currVal.concat(number);
      }
    }
    this.setState({ ...states });
    // Test if there is an active MathKey. If so, remove active class.
    const activeOperator = document.querySelector('div.active');
    if (activeOperator !== null) {
      activeOperator.classList.remove('active');
    }
  }

  operations(operator) {
    let states = { ...this.state };
    // Tests for first operation of a chain.
    if (this.state.prevVal === null) {
      if (operator !== '=' && operator !== '%') {
        document.getElementById(`btn-${operator}`).classList.add('active'); // Equals sign is excluded from active class
      }
      if (operator !== '%') {
        // Percentage performs different types of operations and stores states differently.
        states.operator = operator;
        states.prevVal = this.state.currVal;
        states.currVal = null;
      } else {
        states.prevVal = percentageToDecimal(this.state.currVal);
        states.display = percentageToDecimal(this.state.currVal);
        states.currVal = null;
      }
      this.setState({ ...states });
    }

    /* Checks if no numbers have been clicked since last call
    of operations method to change operator used. */
    if (this.state.currVal === null) {
      const el = document.getElementById(`btn-${this.state.operator}`);
      if (el !== null) {
        el.classList.remove('active');
      }
      if (operator !== '=' && operator !== '%') {
        document.getElementById(`btn-${operator}`).classList.add('active');
      }
      this.setState({ operator });
    }

    // Perform operations
    let result;
    if (this.state.prevVal && this.state.currVal !== null) {
      let activeOperator;
      switch (operator) {
        case '%':
          result = operation(this.state.prevVal, operator, this.state.currVal);
          states = {
            currVal: result,
            display: result
          };
          break;
        case '=':
          result = operation(this.state.prevVal, this.state.operator, this.state.currVal);
          states = {
            operator: null,
            currVal: null,
            display: result,
            prevVal: result
          };
          activeOperator = document.getElementById(`btn-${this.state.operator}`);
          if (activeOperator !== null) {
            activeOperator.classList.remove('active');
          }
          break;
        default:
          document.getElementById(`btn-${operator}`).classList.add('active');
          result = operation(this.state.prevVal, this.state.operator, this.state.currVal);
          states = {
            operator,
            currVal: null,
            display: result,
            prevVal: result
          };
          break;
      }
      if (states.display.search(/\+/g) > 0) {
        // Removes '+' symbol from default JS scientific notation
        states.display = states.display.replace(/\+/g, '');
      }
      if (states.display.length > 16) {
        // Converts display State to Scientific notation if result is more than 16 numbers long.
        const resultLength = states.display.length;
        let trailingZeros;
        let trailingZeroCount = 0;
        let exponents = 0;
        let scientificNotations = 0;
        if (states.display.match(/e/g)) {
          // Matches existing Scientific Notations in display
          scientificNotations = Number(states.display.match(/[0-9]+$/g)[0]);
          // eslint-disable-next-line prefer-destructuring
          states.display = states.display.match(/^[0-9.]+/g)[0];
        } else {
          trailingZeros = states.display.match(/0+$/g);
          trailingZeroCount = trailingZeros === null ? 0 : trailingZeros[0].length;
        }
        exponents = trailingZeroCount + scientificNotations;
        if (trailingZeros !== null) {
          // Scientific notation for number ending in zero(s).
          states.display = scientificNotation(
            states.display.slice(0, resultLength - trailingZeroCount),
            exponents
          );
        } else {
          // Scientific notation for number not neding in a zero.
          states.display = scientificNotation(states.display, exponents);
        }
      }
      this.setState({ ...states });
    } // End complete calculations conditional
  } // End operations method

  handleKeypress(e) {
    const { key } = e;
    const numOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const mathOptions = ['%', '-', '+', '='];
    switch (true) {
      case numOptions.indexOf(key) > -1:
        this.addNum(key);
        break;
      case key === '*':
        this.operations('\u00D7');
        break;
      case key === '/':
        this.operations('\u00F7');
        break;
      case key === 'Enter' || key === 'Return':
        this.operations('=');
        break;
      case mathOptions.indexOf(key) > -1: // all other math operations
        this.operations(key);
        break;
      default:
        console.log('Not a valid keypress');
    }
  }

  /* The handleKeydown method is necessary for logging the escape and delete keys specifically.
   * Not all of the keys can be run through this method, because keydown does not account
   * for different values a key may produce when shift is pressed. Since some of the math
   * operators are on the number keys this would create bugs.
   */
  handleKeydown(e) {
    const { key } = e;
    const clearKeys = ['Escape', 'Delete', 'Backspace'];
    if (clearKeys.indexOf(key) > -1) {
      this.clearDisplay();
    }
  }

  render() {
    const keys = [
      { type: 'clear', value: 'clear' },
      { type: 'number', value: '\u00B1' },
      { type: 'math', value: '%' },
      { type: 'math', value: '\u00D7' },
      { type: 'number', value: '7' },
      { type: 'number', value: '8' },
      { type: 'number', value: '9' },
      { type: 'math', value: '\u00F7' },
      { type: 'number', value: '4' },
      { type: 'number', value: '5' },
      { type: 'number', value: '6' },
      { type: 'math', value: '-' },
      { type: 'number', value: '1' },
      { type: 'number', value: '2' },
      { type: 'number', value: '3' },
      { type: 'math', value: '+' },
      { type: 'number', value: '0' },
      { type: 'number', value: '.' },
      { type: 'math', value: '=' }
    ];

    return (
      <div className="calculator-app-container">
        <div className="calculator">
          <Display display={this.state.display} />
          <div className="calculator-buttons">
            {keys.map(key => (
              <Key
                key={key.value}
                type={key.type}
                value={key.value}
                addNum={this.addNum}
                operations={this.operations}
                clearDisplay={this.clearDisplay}
                display={this.state.display}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
