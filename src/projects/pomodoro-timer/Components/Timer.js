import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import { keyboardHandler } from '../helpers'
import '../style/Timer.css'
import play from '../img/play.png'
import pause from '../img/pause.png'
import bell from '../bell.mp3'

class Timer extends Component {
  static propTypes = {
    sessionTime: PropTypes.number.isRequired,
    breakTime: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    toggleTimer: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      /* countdown timers are stored in state in ms as they are directly
      manipulated by the timer method. */
      sessionCountdown: props.sessionTime * 60000,
      breakCountdown: props.breakTime * 60000,
      currTimer: 'Session',
    }
  }

  componentDidMount() {
    this.bell = new Audio(bell)
  }

  componentWillReceiveProps(nextProps) {
    const { breakTime, isRunning, sessionTime } = this.props
    const { currTimer } = this.state

    if (sessionTime !== nextProps.sessionTime) {
      this.setState({ sessionCountdown: nextProps.sessionTime * 60000 })
    }
    if (breakTime !== nextProps.breakTime) {
      this.setState({ breakCountdown: nextProps.breakTime * 60000 })
    }
    if (isRunning === false && nextProps.isRunning === true) {
      this.countdownTimer(currTimer)
    }
    if (isRunning === true && nextProps.isRunning === false) {
      this.pauseTimer()
    }
  }

  componentDidUpdate() {
    const { breakCountdown, sessionCountdown } = this.state

    if (sessionCountdown === 0 || breakCountdown === 0) {
      this.switchTimer()
    }
  }

  countdownTimer = timerName => {
    const stateManaged =
      timerName === 'Session' ? 'sessionCountdown' : 'breakCountdown'

    const intervalId = setInterval(() => {
      this.setState(state => ({
        [stateManaged]: state[stateManaged] - 1000,
      }))
    }, 1000)
    this.setState({ intervalId })
  }

  pauseTimer = () => {
    const { intervalId } = this.state

    clearInterval(intervalId)
  }

  switchTimer = () => {
    const { currTimer, intervalId } = this.state
    const newTimer = currTimer === 'Session' ? 'Break' : 'Session'

    this.pauseTimer(intervalId)
    this.bell.play()
    this.setState((state, props) => ({
      currTimer: newTimer,
      breakCountdown: props.breakTime * 60000,
      sessionCountdown: props.sessionTime * 60000,
    }))
    this.countdownTimer(newTimer)
  }

  render() {
    const { currTimer, sessionCountdown, breakCountdown } = this.state
    const { isRunning, toggleTimer } = this.props
    let seconds
    const countdown =
      currTimer === 'Session' ? sessionCountdown : breakCountdown
    const minutes = Math.floor((countdown / 60000) % 60)
    seconds = Math.floor((countdown / 1000) % 60)
    if (seconds < 10) {
      seconds = `0${String(seconds)}`
    }
    const title = `${minutes}:${seconds} Pomodoro ${currTimer}`
    return (
      <div
        className='timer-countdown'
        onClick={() => toggleTimer()}
        onKeyPress={e => {
          if (keyboardHandler(e)) toggleTimer()
        }}
        role='button'
        tabIndex={0}
      >
        <Helmet title={title} />
        <h2>{currTimer}</h2>
        <span>
          {minutes} : {seconds}
        </span>
        <img
          className='play-pause-btn'
          src={isRunning ? pause : play}
          alt='Play pause button'
          ref={input => {
            this.playBtn = input
          }}
        />
      </div>
    )
  }
}

export default Timer
