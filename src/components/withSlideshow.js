import React, { Component } from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withSlideshow(WrappedComponent, arr, timerLength = 5000) {
  class WithSlideshow extends Component {
    constructor() {
      super();
      this.state = {
        currIndex: 0,
        isPlaying: false,
        intervalId: undefined
      };

      this.updateProject = this.updateProject.bind(this);
      this.updateIsPlaying = this.updateIsPlaying.bind(this);
    }

    componentDidMount() {
      this.updateIsPlaying();
    }

    componentWillUnmount() {
      clearInterval(this.state.intervalId);
    }

    updateProject(direction, reset = false) {
      const projectTotal = arr.length;
      let { currIndex: newIndex } = this.state;

      if (direction === 'next') {
        this.state.currIndex < projectTotal - 1 // eslint-disable-line no-unused-expressions
          ? (newIndex += 1)
          : (newIndex = 0);
      }

      if (direction === 'previous') {
        this.state.currIndex > 0 // eslint-disable-line no-unused-expressions
          ? (newIndex -= 1)
          : (newIndex = projectTotal - 1);
      }

      if (typeof direction === 'number') {
        newIndex = direction;
      }

      if (this.state.isPlaying && reset) {
        this.resetIntervalTimer();
      }

      this.setState({ currIndex: newIndex });
    }

    updateIsPlaying() {
      const newState = { ...this.state };
      newState.isPlaying = !this.state.isPlaying;

      if (newState.isPlaying) {
        newState.intervalId = setInterval(() => this.updateProject('next'), timerLength);
      } else {
        newState.intervalId = clearInterval(this.state.intervalId);
      }

      this.setState({ ...newState });
    }

    resetIntervalTimer() {
      clearInterval(this.state.intervalId);
      const intervalId = setInterval(() => this.updateProject('next'), timerLength);
      this.setState({ intervalId });
    }

    render() {
      return (
        <WrappedComponent
          currIndex={this.state.currIndex}
          slideData={arr[this.state.currIndex]}
          isPlaying={this.state.isPlaying}
          intervalId={this.state.intervalId}
          updateProject={this.updateProject}
          updateIsPlaying={this.updateIsPlaying}
          {...this.props}
        />
      );
    }
  }

  WithSlideshow.displayName = `WithSlideShow(${getDisplayName(WrappedComponent)})`; // eslint-disable-line prettier/prettier
  return WithSlideshow;
}

export default withSlideshow;
