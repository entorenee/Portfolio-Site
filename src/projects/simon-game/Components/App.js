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
  state = {
    gameOn: false,
    strict: false,
    isPlayersTurn: false,
    buttonPattern: [],
    playerCopyPattern: [],
    moveCount: '--',
  };

  componentDidMount() {
    this.buzzerSound = new Audio(buzzer);
    this.buttonSounds = [
      new Audio(simonSound0),
      new Audio(simonSound1),
      new Audio(simonSound2),
      new Audio(simonSound3),
    ];
  }

  toggleGamePower = () => {
    const { gameOn } = this.state;
    let powerState = { gameOn };
    if (gameOn === false) {
      powerState.gameOn = true;
    } else {
      powerState = {
        gameOn: false,
        strict: false,
        isPlayersTurn: false,
        buttonPattern: [],
        playerCopyPattern: [],
        moveCount: '--',
      };
    }
    this.setState({ ...powerState });
  };

  toggleStrict = () => {
    const { strict } = this.state;
    this.setState({ strict: !strict });
  };

  startGame = () => {
    const { buttonPattern, gameOn } = this.state;
    if (gameOn) {
      if (buttonPattern.length === 0) {
        this.randomButtonGenerator();
      } else {
        this.randomButtonGenerator(true);
      }
    }
  };

  randomButtonGenerator = (clear = false) => {
    const { buttonPattern: prevPattern } = this.state;
    if (typeof clear === 'boolean') {
      const buttonPattern = !clear ? prevPattern : [];
      const randomNum = Math.floor(Math.random() * 4);
      buttonPattern.push(randomNum);
      this.setState({
        buttonPattern,
        moveCount: buttonPattern.length,
      });
      setTimeout(() => {
        this.computerPlayButtonPattern();
      }, 1200);
    }
  };

  computerPlayButtonPattern = (count = 0) => {
    const { buttonPattern, gameOn, moveCount } = this.state;
    let counter = count;
    const states = {
      isPlayersTurn: true,
      playerCopyPattern: [],
    };
    states.moveCount = moveCount === '! !' ? buttonPattern.length : moveCount;
    const activeColors = ['active-green', 'active-red', 'active-yellow', 'active-blue'];
    const pattern = buttonPattern;
    const id = pattern[counter];

    const el = document.getElementById(`btn-${id}`);
    if (gameOn) {
      el.classList.add(activeColors[id]);
      this.buttonSounds[id].play();
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
  };

  playerSelectButton = button => {
    const { buttonPattern, playerCopyPattern, strict } = this.state;
    const states = { playerCopyPattern };
    const playerIndex = playerCopyPattern.length;
    if (button === buttonPattern[playerIndex]) {
      states.playerCopyPattern.push(button);
      if (states.playerCopyPattern.length === buttonPattern.length) {
        if (buttonPattern.length === 20) {
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
      if (!strict) {
        this.buzzerSound.play();
        setTimeout(() => {
          this.computerPlayButtonPattern();
        }, 2000);
      } else {
        this.buzzerSound.play();
        this.randomButtonGenerator(true);
      }
      this.setState({
        moveCount: '! !',
      });
    }
  };

  render() {
    const { isPlayersTurn, gameOn, moveCount, strict } = this.state; // eslint-disable-line
    return (
      <div className="simon-app">
        <Helmet>
          <title>Simon Game | Daniel Lemay</title>
          <link href="https://fonts.googleapis.com/css?family=Ultra" rel="stylesheet" />
        </Helmet>
        <div className="game">
          <ColorPlayButtons
            id="0"
            activeClass="active-green"
            playerSelectButton={this.playerSelectButton}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <ColorPlayButtons
            id="1"
            activeClass="active-red"
            playerSelectButton={this.playerSelectButton}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <ColorPlayButtons
            id="2"
            activeClass="active-yellow"
            playerSelectButton={this.playerSelectButton}
            isPlayersTurn={isPlayersTurn}
            gameOn={gameOn}
          />
          <ColorPlayButtons
            id="3"
            activeClass="active-blue"
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
