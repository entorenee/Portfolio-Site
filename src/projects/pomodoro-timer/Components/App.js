import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Counter from './Counter'
import Timer from './Timer'
import '../style/App.css'

class App extends Component {
  state = {
    sessionTime: 25,
    breakTime: 5,
    isRunning: false,
  }

  adjustTimers = (timer, timeDirection) => {
    this.setState(state => {
      const { isRunning } = state
      if (isRunning === false && timeDirection === '+') {
        return { [timer]: state[timer] + 1 }
      }

      if (isRunning === false && timeDirection === '-' && state[timer] > 1) {
        return { [timer]: state[timer] - 1 }
      }
      return {}
    })
  }

  toggleTimer = () => {
    this.setState(state => ({ isRunning: !state.isRunning }))
  }

  render() {
    const { breakTime, isRunning, sessionTime } = this.state

    return (
      <div className='pomodoro-app'>
        <Helmet>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <link
            href='https://fonts.googleapis.com/css?family=Lato:700|Roboto:400i'
            rel='stylesheet'
          />
        </Helmet>
        <h1 id='title'>Pomodoro Timer</h1>
        <div id='counter-control-wrapper'>
          <Counter
            name='sessionTime'
            adjustTimers={this.adjustTimers}
            timerTotal={sessionTime}
          />
          <Counter
            name='breakTime'
            adjustTimers={this.adjustTimers}
            timerTotal={breakTime}
          />
        </div>
        <Timer
          sessionTime={sessionTime}
          breakTime={breakTime}
          isRunning={isRunning}
          toggleTimer={this.toggleTimer}
        />
      </div>
    )
  }
}

export default App
