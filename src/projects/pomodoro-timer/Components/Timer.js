import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { keyboardHandler } from '../helpers';
import '../style/Timer.css';
import play from '../img/play.png';
import pause from '../img/pause.png';
import bell from '../bell.mp3';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.countdownTimer = this.countdownTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.state = {
      /* countdown timers are stored in state in ms as they are directly
      manipulated by the timer method. */
      sessionCountdown: props.sessionTime * 60000,
      breakCountdown: props.breakTime * 60000,
      currTimer: 'Session'
    };
  }

  componentDidMount() {
    this.bell = new Audio(bell);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.sessionTime !== nextProps.sessionTime) {
      const states = { sessionCountdown: nextProps.sessionTime * 60000 };
      if (this.state.currTimer === 'Session') {
        states.minutes = nextProps.sessionTime;
        states.seconds = '00';
      }
      this.setState({ ...states });
    }
    if (this.props.breakTime !== nextProps.breakTime) {
      const states = { breakCountdown: nextProps.breakTime * 60000 };
      if (this.state.currTimer === 'Break') {
        states.minutes = nextProps.breakTime;
        states.seconds = '00';
      }
      this.setState({ ...states });
    }
    if (this.props.isRunning === false && nextProps.isRunning === true) {
      this.countdownTimer(this.state.currTimer);
      this.playBtn.src = pause;
    }
    if (this.props.isRunning === true && nextProps.isRunning === false) {
      this.pauseTimer();
      this.playBtn.src = play;
    }
  }

  componentDidUpdate() {
    if (this.state.sessionCountdown === 0) {
      this.pauseTimer(this.state.intervalId);
      this.bell.play();
      const states = {
        currTimer: 'Break',
        breakCountdown: this.props.breakTime * 60000,
        sessionCountdown: this.props.sessionTime * 60000
      };
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ ...states });
      this.countdownTimer('Break');
    }
    if (this.state.breakCountdown === 0) {
      this.pauseTimer(this.state.intervalId);
      this.bell.play();
      const states = {
        currTimer: 'Session',
        breakCountdown: this.props.breakTime * 60000,
        sessionCountdown: this.props.sessionTime * 60000
      };
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ ...states });
      this.countdownTimer('Session');
    }
  }

  countdownTimer(timerName) {
    const intervalId = setInterval(() => {
      const states = {};
      if (timerName === 'Session') {
        states.sessionCountdown = this.state.sessionCountdown - 1000;
      } else {
        states.breakCountdown = this.state.breakCountdown - 1000;
      }
      this.setState({ ...states });
    }, 1000);
    this.setState({ intervalId });
  }

  pauseTimer() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { currTimer, sessionCountdown, breakCountdown } = this.state;
    const { toggleTimer } = this.props;
    let seconds;
    const countdown = currTimer === 'Session' ? sessionCountdown : breakCountdown;
    const minutes = Math.floor((countdown / 60000) % 60);
    seconds = Math.floor((countdown / 1000) % 60);
    if (seconds < 10) {
      seconds = `0${String(seconds)}`;
    }
    const title = `${minutes}:${seconds} Pomodoro ${currTimer}`;
    return (
      <div
        className="timer-countdown"
        onClick={() => toggleTimer()}
        onKeyPress={e => {
          if (keyboardHandler(e)) toggleTimer();
        }}
        role="button"
        tabIndex={0}
      >
        <Helmet title={title} />
        <h2>{currTimer}</h2>
        <span>
          {minutes} : {seconds}
        </span>
        <img
          className="play-pause-btn"
          src={play}
          alt="Play pause button"
          ref={input => {
            this.playBtn = input;
          }}
        />
      </div>
    );
  }
}

Timer.propTypes = {
  sessionTime: PropTypes.number.isRequired,
  breakTime: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  toggleTimer: PropTypes.func.isRequired
};

export default Timer;
