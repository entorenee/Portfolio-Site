import React from 'react';
import PropTypes from 'prop-types';
import '../style/Timer.css';
import play from '../img/play.png';
import pause from '../img/pause.png';

class Timer extends React.Component {
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
      this.props.sound.play();
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
      this.props.sound.play();
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
    let seconds;
    const countdown =
      this.state.currTimer === 'Session' ? this.state.sessionCountdown : this.state.breakCountdown;
    const minutes = Math.floor((countdown / 60000) % 60);
    seconds = Math.floor((countdown / 1000) % 60);
    if (seconds < 10) {
      seconds = `0${String(seconds)}`;
    }
    const title = `${minutes}:${seconds} Pomodoro ${this.state.currTimer}`;
    document.title = title;
    return (
      <button className="timer-countdown" onClick={() => this.props.toggleTimer()}>
        <h2>{this.state.currTimer}</h2>
        <span>
          {minutes} : {seconds}
        </span>
        <img
          className="play-pause-btn"
          src={play}
          alt="Play pause button"
          ref={input => (this.playBtn = input)} // eslint-disable-line no-return-assign
        />
      </button>
    );
  }
}

Timer.propTypes = {
  sessionTime: PropTypes.number.isRequired,
  breakTime: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  toggleTimer: PropTypes.func.isRequired,
  sound: PropTypes.shape({
    play: PropTypes.func.isRequired
  }).isRequired
};

export default Timer;
