import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keyboardHandler } from '../helpers';
import '../style/Strict.css';

class Strict extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.isStrict !== nextProps.isStrict) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const btnElement = this.strictLight;
    if (this.props.isStrict) {
      btnElement.style.backgroundColor = 'red';
    } else {
      btnElement.style.backgroundColor = 'black';
    }
  }

  render() {
    const { toggleStrict } = this.props;
    return (
      <div className="strict-button-wrapper">
        <div
          className="strict-mode-light"
          ref={input => {
            this.strictLight = input;
          }}
        />
        <div
          className="strict-mode-button"
          onClick={() => toggleStrict()}
          onKeyPress={e => {
            if (keyboardHandler(e)) toggleStrict();
          }}
          role="button"
          tabIndex={0}
        />
        STRICT
      </div>
    );
  }
}

Strict.propTypes = {
  toggleStrict: PropTypes.func.isRequired,
  isStrict: PropTypes.bool.isRequired
};

export default Strict;
