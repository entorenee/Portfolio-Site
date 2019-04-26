import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Cell from './Cell';
import MarkerSelector from './MarkerSelector';
import '../style/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cellValues: ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'], // Used to track who controls each space.
      currPlayer: 'X',
      player: '',
      computer: '',
      gameOver: false,
    };

    this.playerSelectCell = this.playerSelectCell.bind(this);
    this.checkWinningCombos = this.checkWinningCombos.bind(this);
    this.computerSelectCell = this.computerSelectCell.bind(this);
    this.playerSelectMarker = this.playerSelectMarker.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
  }

  componentDidUpdate() {
    const { cellValues, computer, currPlayer, gameOver } = this.state;
    const winnerInfo = this.gameWinner;
    // Necessary to change to previous player as state has already changed to new player
    const player = currPlayer === 'X' ? 'O' : 'X';
    if (this.checkWinningCombos(cellValues, player) && gameOver === false) {
      winnerInfo.innerHTML = `${player} WON!`;
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ gameOver: true });
      this.clearBoard();
    } else if (cellValues.indexOf('E') === -1 && gameOver === false) {
      winnerInfo.innerHTML = "IT'S A TIE!";
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ gameOver: true });
      this.clearBoard();
    } else if (currPlayer === computer && cellValues.indexOf('E') > -1 && gameOver === false) {
      this.computerSelectCell();
    }
  }

  clearBoard() {
    setTimeout(() => {
      const winnerInfo = this.gameWinner;
      const cells = document.querySelectorAll('td');
      const states = {
        cellValues: ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
        currPlayer: 'X',
        gameOver: false,
      };
      winnerInfo.innerHTML = '';
      for (let i = 0; i < cells.length; i += 1) {
        cells[i].classList.remove('o-marker', 'x-marker');
      }
      this.setState({ ...states });
    }, 3000);
  }

  playerSelectMarker(marker) {
    const states = {};
    const computer = marker === 'X' ? 'O' : 'X';
    states.player = marker;
    states.computer = computer;
    document.getElementById('playerSelect').style.display = 'none';
    this.setState({ ...states });
  }

  playerSelectCell(cellValue, cellId) {
    const { computer, currPlayer, gameOver, player } = this.state;

    if (cellValue === 'E' && currPlayer === player && gameOver === false) {
      const states = { ...this.state };
      states.cellValues[cellId] = currPlayer;
      states.currPlayer = computer;

      this.setState({ ...states });
    }
  }

  computerSelectCell() {
    const { cellValues, computer, player } = this.state;

    function checkForPotentialWinOrBlock(cells, playerToken) {
      const winningCombos = [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6'],
      ];

      for (let i = 0; i < winningCombos.length; i += 1) {
        const controlled = [];
        let trueCount = 0;
        for (let j = 0; j < 3; j += 1) {
          const value = winningCombos[i][j];
          if (cells[value] === playerToken) {
            controlled.push(true);
            trueCount += 1;
          } else {
            controlled.push(false);
          }
        } // End winningCombos subarray for loop
        const index = controlled.indexOf(false);
        if (trueCount === 2 && cells[winningCombos[i][index]] === 'E') {
          return winningCombos[i][index];
        }
      } // End winningCombos for loop
      return null;
    }

    function randomCell(cells) {
      let cell;
      let blankCell = false;

      while (!blankCell) {
        cell = Math.floor(Math.random() * 8);
        if (cells[cell] === 'E') {
          blankCell = true;
        }
      }
      return cell;
    }

    const states = { ...this.state };
    const selectWin = checkForPotentialWinOrBlock(cellValues, computer);
    const blockWin = checkForPotentialWinOrBlock(cellValues, player);
    if (typeof selectWin === 'string') {
      states.cellValues[selectWin] = computer;
      states.currPlayer = player;
    } else if (typeof blockWin === 'string') {
      states.cellValues[blockWin] = computer;
      states.currPlayer = player;
    } else {
      const emptyCell = randomCell(cellValues);
      states.cellValues[emptyCell] = computer;
      states.currPlayer = player;
    }

    this.setState({ ...states });
  }

  // eslint-disable-next-line class-methods-use-this
  checkWinningCombos(cellValues, currPlayer) {
    const winningCombos = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
    ];
    for (let i = 0; i < winningCombos.length; i += 1) {
      const arr = winningCombos[i];
      if (
        cellValues[arr[0]] === currPlayer &&
        cellValues[arr[1]] === currPlayer &&
        cellValues[arr[2]] === currPlayer
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    const { cellValues } = this.state;
    return (
      <div className="ttt-game-wrapper">
        <Helmet>
          <title>Tic Tac Toe Game | Daniel Lemay</title>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <link
            href="https://fonts.googleapis.com/css?family=Bitter:400i|Indie+Flower"
            rel="stylesheet"
          />
        </Helmet>
        <MarkerSelector playerSelectMarker={this.playerSelectMarker} />
        <div
          ref={input => {
            this.gameWinner = input;
          }}
          className="ttt-game-winner"
        />
        <table className="ttt-game-board">
          <tbody>
            <tr>
              <Cell id="0" cellValue={cellValues[0]} playerSelectCell={this.playerSelectCell} />
              <Cell id="1" cellValue={cellValues[1]} playerSelectCell={this.playerSelectCell} />
              <Cell id="2" cellValue={cellValues[2]} playerSelectCell={this.playerSelectCell} />
            </tr>
            <tr>
              <Cell id="3" cellValue={cellValues[3]} playerSelectCell={this.playerSelectCell} />
              <Cell id="4" cellValue={cellValues[4]} playerSelectCell={this.playerSelectCell} />
              <Cell id="5" cellValue={cellValues[5]} playerSelectCell={this.playerSelectCell} />
            </tr>
            <tr>
              <Cell id="6" cellValue={cellValues[6]} playerSelectCell={this.playerSelectCell} />
              <Cell id="7" cellValue={cellValues[7]} playerSelectCell={this.playerSelectCell} />
              <Cell id="8" cellValue={cellValues[8]} playerSelectCell={this.playerSelectCell} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
