import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keyboardHandler } from '../helpers';
import '../style/PowerButton.css';

class PowerButton extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.gameOn !== nextProps.gameOn) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const powerButton = this.togglePower.classList;
    if (!this.props.gameOn) {
      powerButton.remove('power-on');
    } else {
      powerButton.add('power-on');
    }
  }

  render() {
    const { toggleGamePower } = this.props;
    return (
      <div className="power-button-wrapper">
        <span className="power-identifiers">OFF</span>
        <div
          className="toggle-power"
          onClick={() => toggleGamePower()}
          onKeyPress={e => {
            if (keyboardHandler(e)) toggleGamePower();
          }}
          role="button"
          tabIndex={0}
        >
          <span
            className="toggle-power-button"
            ref={input => {
              this.togglePower = input;
            }}
          />
        </div>
        <span className="power-identifiers">ON</span>
      </div>
    );
  }
}

PowerButton.propTypes = {
  toggleGamePower: PropTypes.func.isRequired,
  gameOn: PropTypes.bool.isRequired,
};

export default PowerButton;
