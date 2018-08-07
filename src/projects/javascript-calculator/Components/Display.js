import React from 'react';
import PropTypes from 'prop-types';
import '../style/Display.css';

const Display = ({ display }) => <div className="display-field">{display}</div>;

Display.propTypes = {
  display: PropTypes.string.isRequired,
};

export default Display;
