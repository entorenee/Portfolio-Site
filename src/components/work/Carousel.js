import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Hammer from 'hammerjs';
import themeUtils from '../themeUtils';
import withSlideshow from '../withSlideshow';
import projectSpotlight from './projectSpotlight';
import CarouselControls from './CarouselControls';
import Button from '../Button';

const CarouselContainer = styled.div`
  ${themeUtils.margins};
  position: relative;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem 0.25rem;
  box-shadow: 3px 3px 5px ${themeUtils.mediumAccent};
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

  @media (max-width: 700px) {
    justify-content: center;

    a {
      margin-bottom: 0.75rem;
    }
  }
`;

class Carousel extends Component {
  componentDidMount() {
    const { updateIsPlaying, updateProject } = this.props;
    const hammer = Hammer(this.projectCarousel);
    hammer.on('swipe', evt => {
      switch (evt.offsetDirection) {
        case 2:
          updateProject('next', true);
          break;
        case 4:
          updateProject('previous', true);
          break;
        default:
      }
    });
    hammer.on('tap', () => {
      updateIsPlaying();
    });
  }

  render() {
    const { currIndex, isPlaying, slideData: project, updateIsPlaying, updateProject } = this.props;

    return (
      <CarouselContainer>
        <CarouselControls
          updateProject={updateProject}
          isPlaying={isPlaying}
          updateIsPlaying={updateIsPlaying}
          currIndex={currIndex}
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
              <Button href={project.githubLink}>Link to GitHub Repository</Button>
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
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  updateProject: PropTypes.func.isRequired,
  updateIsPlaying: PropTypes.func.isRequired,
};

export default withSlideshow(Carousel, projectSpotlight, 8000);
