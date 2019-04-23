import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { keyboardHandler } from '../helpers';
import '../style/Cell.css';

class Cell extends Component {
  shouldComponentUpdate(nextProps) {
    const { cellValue } = this.props;

    if (nextProps.cellValue !== cellValue) {
      return true;
    }
    return false;
  }

  render() {
    const { cellValue, id, playerSelectCell } = this.props;
    const cellDisplay = cellValue !== 'E' ? cellValue : '';
    if (cellValue === 'X') {
      this.cell.classList.add('x-marker');
    }
    if (cellValue === 'O') {
      this.cell.classList.add('o-marker');
    }
    return (
      <td className={`cells cell-${id}`}>
        <div
          ref={input => {
            this.cell = input;
          }}
          onClick={() => playerSelectCell(cellValue, id)}
          onKeyPress={e => {
            if (keyboardHandler(e)) playerSelectCell(cellValue, id);
          }}
          role="button"
          tabIndex={0}
        >
          {cellDisplay}
        </div>
      </td>
    );
  }
}

Cell.propTypes = {
  id: PropTypes.string.isRequired,
  cellValue: PropTypes.string.isRequired,
  playerSelectCell: PropTypes.func.isRequired,
};

export default Cell;
