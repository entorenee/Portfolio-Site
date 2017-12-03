import React, { Component } from 'react';
import styled from 'react-emotion';
import projectSpotlight from './projectSpotlight';
import CarouselControls from './CarouselControls';

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
      isPlaying: false
    };

    this.updateProject = this.updateProject.bind(this);
    this.updateIsPlaying = this.updateIsPlaying.bind(this);
  }

  updateProject(direction) {
    const projectTotal = projectSpotlight.length;
    const newState = { ...this.state };

    if (direction === 'next') {
      this.state.currIndex < projectTotal - 1
        ? newState.currIndex++
        : (newState.currIndex = 0);
    }

    if (direction === 'previous') {
      this.state.currIndex > 0
        ? newState.currIndex--
        : (newState.currIndex = projectTotal - 1);
    }

    this.setState({ ...newState });
  }

  updateIsPlaying() {
    const newState = { ...this.state };
    newState.isPlaying = !this.state.isPlaying;
    this.setState({ ...newState });
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
          />
        </div>
        <Description>
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
          <ProjectLinks>
            <a href={project.projectLink}>Link to Live project</a>
            <a href={project.githubLink}>Link to GitHub Repository</a>
          </ProjectLinks>
        </Description>
      </CarouselContainer>
    );
  }
}

export default Carousel;
