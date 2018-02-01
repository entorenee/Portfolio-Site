import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ColorPlayButtons from './ColorPlayButtons';
import Counter from './Counter';
import Start from './Start';
import Strict from './Strict';
import PowerButton from './PowerButton';
import simonSound0 from '../sounds/simonSound0.mp3';
import simonSound1 from '../sounds/simonSound1.mp3';
import simonSound2 from '../sounds/simonSound2.mp3';
import simonSound3 from '../sounds/simonSound3.mp3';
import buzzer from '../sounds/buzzer.mp3';
import '../style/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gameOn: false,
      strict: false,
      isPlayersTurn: false,
      buttonPattern: [],
      playerCopyPattern: [],
      moveCount: '--'
    };

    this.toggleGamePower = this.toggleGamePower.bind(this);
    this.toggleStrict = this.toggleStrict.bind(this);
    this.startGame = this.startGame.bind(this);
    this.randomButtonGenerator = this.randomButtonGenerator.bind(this);
    this.computerPlayButtonPattern = this.computerPlayButtonPattern.bind(this);
    this.playerSelectButton = this.playerSelectButton.bind(this);
  }

  toggleGamePower() {
    let powerState = { gameOn: this.state.gameOn };
    if (this.state.gameOn === false) {
      powerState.gameOn = true;
    } else {
      powerState = {
        gameOn: false,
        strict: false,
        isPlayersTurn: false,
        buttonPattern: [],
        playerCopyPattern: [],
        moveCount: '--'
      };
    }
    this.setState({ ...powerState });
  }

  toggleStrict() {
    const strictState = !this.state.strict;
    this.setState({ strict: strictState });
  }

  startGame() {
    if (this.state.gameOn) {
      if (this.state.buttonPattern.length === 0) {
        this.randomButtonGenerator();
      } else {
        this.randomButtonGenerator(true);
      }
    }
  }

  randomButtonGenerator(clear = false) {
    if (typeof clear === 'boolean') {
      const buttonPattern = !clear ? this.state.buttonPattern : [];
      const randomNum = Math.floor(Math.random() * 4);
      buttonPattern.push(randomNum);
      this.setState({
        buttonPattern,
        moveCount: buttonPattern.length
      });
      setTimeout(() => {
        this.computerPlayButtonPattern();
      }, 1200);
    } else {
      console.log('The parameter passed to randomButtonGenerator must be a boolean.');
    }
  }

  computerPlayButtonPattern(count = 0) {
    let counter = count;
    const states = {
      isPlayersTurn: true,
      playerCopyPattern: []
    };
    states.moveCount =
      this.state.moveCount === '! !' ? this.state.buttonPattern.length : this.state.moveCount;
    const activeColors = ['active-green', 'active-red', 'active-yellow', 'active-blue'];
    const pattern = this.state.buttonPattern;
    const id = pattern[counter];
    let sound;
    switch (id) {
      case 0:
        sound = new Audio(simonSound0);
        break;
      case 1:
        sound = new Audio(simonSound1);
        break;
      case 2:
        sound = new Audio(simonSound2);
        break;
      case 3:
        sound = new Audio(simonSound3);
        break;
      default:
        console.warn('Invalid sound id passed!');
    }

    const el = document.getElementById(`btn-${id}`);
    if (this.state.gameOn) {
      el.classList.add(activeColors[id]);
      sound.play();
      setTimeout(() => {
        el.classList.remove(activeColors[id]);
        if (counter < pattern.length - 1) {
          counter += 1;
          this.computerPlayButtonPattern(counter);
        } else {
          this.setState({ ...states });
        }
      }, 800);
    }
  }

  playerSelectButton(button) {
    const states = { playerCopyPattern: this.state.playerCopyPattern };
    const playerIndex = this.state.playerCopyPattern.length;
    if (button === this.state.buttonPattern[playerIndex]) {
      states.playerCopyPattern.push(button);
      if (states.playerCopyPattern.length === this.state.buttonPattern.length) {
        if (this.state.buttonPattern.length === 20) {
          // Determine if the user has won
          states.isPlayersTurn = false;
          states.moveCount = 'WIN!';
          setTimeout(() => {
            this.randomButtonGenerator(true);
          }, 3000);
        } else {
          states.isPlayersTurn = false;
          this.randomButtonGenerator();
        }
      }
      this.setState({ ...states });
    } else {
      // This block handles if an incorrect button is pushed.
      const buzzerSound = new Audio(buzzer);
      if (!this.state.strict) {
        buzzerSound.play();
        setTimeout(() => {
          this.computerPlayButtonPattern();
        }, 2000);
      } else {
        buzzerSound.play();
        this.randomButtonGenerator(true);
      }
      this.setState({
        moveCount: '! !'
      });
    }
  }

  render() {
    const { isPlayersTurn, gameOn, moveCount, strict } = this.state; // eslint-disable-line
    return (
      <div className="simon-app">
        <Helmet title="Simon Game | Daniel Lemay" />
        <div className="game">
          <ColorPlayButtons
            id="0"
            activeClass="active-green"
            sound={new Audio(simonSound0)}
            playerSelectButton={this.playerSelectButton}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <ColorPlayButtons
            id="1"
            activeClass="active-red"
            sound={new Audio(simonSound1)}
            playerSelectButton={this.playerSelectButton}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <ColorPlayButtons
            id="2"
            activeClass="active-yellow"
            sound={new Audio(simonSound2)}
            playerSelectButton={this.playerSelectButton}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <ColorPlayButtons
            id="3"
            activeClass="active-blue"
            sound={new Audio(simonSound3)}
            playerSelectButton={this.playerSelectButton}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <div className="game-control-container">
            <div className="game-control-wrapper">
              <h1>Simon</h1>
              <div className="game-controls">
                <Counter moveCount={String(moveCount)} gameOn={gameOn} />
                <Start startGame={this.startGame} />
                <Strict toggleStrict={this.toggleStrict} isStrict={strict} />
              </div>
              <PowerButton toggleGamePower={this.toggleGamePower} gameOn={gameOn} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
