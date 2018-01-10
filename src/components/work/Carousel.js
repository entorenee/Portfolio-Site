import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Hammer from 'hammerjs';
import withSlideshow from '../withSlideshow';
import projectSpotlight from './projectSpotlight';
import CarouselControls from './CarouselControls';
import Button from '../Button';

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
  margin-bottom: 0.6rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 450px) {
    justify-content: center;

    a:first-child {
      margin-bottom: 0.75rem;
    }
  }
`;

class Carousel extends Component {
  componentDidMount() {
    const hammer = Hammer(this.projectCarousel);
    hammer.on('swipe', evt => {
      switch (evt.offsetDirection) {
        case 2:
          this.props.updateProject('next', true);
          break;
        case 4:
          this.props.updateProject('previous', true);
          break;
        default:
      }
    });
    hammer.on('tap', () => {
      this.props.updateIsPlaying();
    });
  }

  render() {
    const { slideData: project } = this.props;

    return (
      <CarouselContainer>
        <CarouselControls
          updateProject={this.props.updateProject}
          isPlaying={this.props.isPlaying}
          updateIsPlaying={this.props.updateIsPlaying}
          currIndex={this.props.currIndex}
          projects={projectSpotlight}
        />
        <div
          ref={input => (this.projectCarousel = input)} // eslint-disable-line no-return-assign
        >
          <Title>{project.title}</Title>
          <FocusImage src={project.image} />
          <Description>
            <div
              dangerouslySetInnerHTML={{ __html: project.description }} // eslint-disable-line react/no-danger, max-len
            />
            <ProjectLinks>
              <Button href={project.projectLink}>Link to Live Project</Button>
              <Button href={project.githubLink}>
                Link to GitHub Repository
              </Button>
            </ProjectLinks>
          </Description>
        </div>
      </CarouselContainer>
    );
  }
}

Carousel.propTypes = {
  currIndex: PropTypes.number.isRequired,
  slideData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    description: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  updateProject: PropTypes.func.isRequired,
  updateIsPlaying: PropTypes.func.isRequired
};

export default withSlideshow(Carousel, projectSpotlight);
