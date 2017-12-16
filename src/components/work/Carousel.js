import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import projectSpotlight from './projectSpotlight';
import CarouselControls from './CarouselControls';
import Button from '../Button.js';

const { Fragment } = React;

const CarouselContainer = styled.div`
  ${props => props.theme.margins};
  position: relative;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc
  padding: 0.5rem 0.25rem;
  box-shadow: 5px 5px 5px ${props => props.theme.darkAccent};
`;

const FocusImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`;

const Description = styled.div`
  padding: 0.5rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Carousel extends Component {
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

  updateProject(direction, reset = false) {
    const projectTotal = projectSpotlight.length;
    let { currIndex: newIndex } = this.state;

    if (direction === 'next') {
      this.state.currIndex < projectTotal - 1 ? newIndex++ : (newIndex = 0);
    }

    if (direction === 'previous') {
      this.state.currIndex > 0 ? newIndex-- : (newIndex = projectTotal - 1);
    }

    if (this.state.isPlaying && reset) {
      this.resetIntervalTimer();
    }

    this.setState({ currIndex: newIndex });
  }

  updateIsPlaying() {
    const newState = { ...this.state };
    const { timerLength } = this.props;
    newState.isPlaying = !this.state.isPlaying;

    if (newState.isPlaying) {
      newState.intervalId = setInterval(
        () => this.updateProject('next'),
        timerLength
      );
    } else {
      newState.intervalId = clearInterval(this.state.intervalId);
    }

    this.setState({ ...newState });
  }

  resetIntervalTimer() {
    const { timerLength } = this.props;
    clearInterval(this.state.intervalId);
    const intervalId = setInterval(
      () => this.updateProject('next'),
      timerLength
    );
    this.setState({ intervalId });
  }

  render() {
    const project = projectSpotlight[this.state.currIndex];

    return (
      <CarouselContainer>
        <Title>{project.title}</Title>
        <div style={{ position: 'relative' }}>
          <FocusImage src={project.image} />
          <CarouselControls
            updateProject={this.updateProject}
            isPlaying={this.state.isPlaying}
            updateIsPlaying={this.updateIsPlaying}
          />
        </div>
        <Description>
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
          <ProjectLinks>
            <Button href={project.projectLink}>Link to Live Project</Button>
            <Button href={project.githubLink}>Link to GitHub Repository</Button>
          </ProjectLinks>
        </Description>
      </CarouselContainer>
    );
  }
}

Carousel.defaultProps = {
  timerLength: 5000
};

Carousel.propTypes = {
  timerLength: PropTypes.number.isRequired
};

export default Carousel;
