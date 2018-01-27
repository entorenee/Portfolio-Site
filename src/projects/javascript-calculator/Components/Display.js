import React from 'react';
import PropTypes from 'prop-types';
import '../style/Display.css';

const Display = props => <div className="display-field">{props.display}</div>;

Display.propTypes = {
  display: PropTypes.string.isRequired
};

export default Display;
