import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { keyboardHandler } from '../helpers';
import '../style/Strict.css';

const Strict = props => {
  const { isStrict, toggleStrict } = props;
  return (
    <div className="strict-button-wrapper">
      <div className={classnames('strict-mode-light', { strict: isStrict })} />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
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
};

Strict.propTypes = {
  toggleStrict: PropTypes.func.isRequired,
  isStrict: PropTypes.bool.isRequired,
};

export default Strict;
