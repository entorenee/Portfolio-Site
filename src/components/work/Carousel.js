import React from 'react';
import styled from 'react-emotion';
import themeUtils from '../themeUtils';
import Slideshow from '../Slideshow';
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

const Carousel = () => (
  <Slideshow slides={projectSpotlight}>
    {({ currIndex, isPlaying, slideData: project, updateIsPlaying, updateProject }) => (
      <CarouselContainer>
        <CarouselControls
          updateProject={updateProject}
          isPlaying={isPlaying}
          updateIsPlaying={updateIsPlaying}
          currIndex={currIndex}
          projects={projectSpotlight}
        />
        <div>
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
    )}
  </Slideshow>
);

export default Carousel;
