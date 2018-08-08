import React from 'react';
import PropTypes from 'prop-types';

import updateSlideshow from './stateUpdaters';

class Slideshow extends React.Component {
  static defaultProps = {
    timerLength: 5000,
  };

  state = {
    currIndex: 0,
    isPlaying: false,
    intervalId: undefined,
  };

  componentDidMount() {
    this.updateIsPlaying();
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  updateProject = (direction, reset = false) => {
    const { isPlaying } = this.state;

    if (isPlaying && reset) {
      this.resetIntervalTimer();
    }

    this.setState((prevState, props) => updateSlideshow(prevState, props, direction));
  };

  updateIsPlaying = () => {
    const { timerLength } = this.props;

    this.setState(prevState => {
      const { isPlaying, intervalId: prevIntervalId } = prevState;
      let intervalId;

      if (!isPlaying) {
        intervalId = setInterval(() => this.updateProject('next'), timerLength);
      } else {
        intervalId = clearInterval(prevIntervalId);
      }

      return { intervalId, isPlaying: !isPlaying };
    });
  };

  resetIntervalTimer = () => {
    const { intervalId: intervalState } = this.state;
    const { timerLength } = this.props;

    clearInterval(intervalState);
    const intervalId = setInterval(() => this.updateProject('next'), timerLength);
    this.setState({ intervalId });
  };

  render() {
    const { children, slides } = this.props;
    const { currIndex } = this.state;

    return children({
      ...this.state,
      updateProject: this.updateProject,
      updateIsPlaying: this.updateIsPlaying,
      slideData: slides[currIndex],
    });
  }
}

Slideshow.propTypes = {
  children: PropTypes.func.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  timerLength: PropTypes.number,
};

export default Slideshow;
