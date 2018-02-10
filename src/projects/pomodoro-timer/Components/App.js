import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Counter from './Counter';
import Timer from './Timer';
import '../style/App.css';

class App extends Component {
  constructor() {
    super();
    this.adjustTimers = this.adjustTimers.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);

    this.state = {
      sessionTime: 25,
      breakTime: 5,
      isRunning: false
    };
  }

  adjustTimers(timer, timeDirection) {
    const states = { ...this.state };
    if (this.state.isRunning === false && timeDirection === '+') {
      states[timer] += 1;
    }
    if (this.state.isRunning === false && timeDirection === '-' && states[timer] > 1) {
      states[timer] -= 1;
    }
    this.setState({ ...states });
  }

  toggleTimer() {
    const timerBool = !this.state.isRunning;
    this.setState({ isRunning: timerBool });
  }

  render() {
    return (
      <div className="pomodoro-app">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:700|Roboto:400i"
            rel="stylesheet"
          />
        </Helmet>
        <h1 id="title">Pomodoro Timer</h1>
        <div id="counter-control-wrapper">
          <Counter
            name="sessionTime"
            adjustTimers={this.adjustTimers}
            timerTotal={this.state.sessionTime}
          />
          <Counter
            name="breakTime"
            adjustTimers={this.adjustTimers}
            timerTotal={this.state.breakTime}
          />
        </div>
        <Timer
          sessionTime={this.state.sessionTime}
          breakTime={this.state.breakTime}
          isRunning={this.state.isRunning}
          toggleTimer={this.toggleTimer}
        />
      </div>
    );
  }
}

export default App;
