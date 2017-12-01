import React, { Component } from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import projectSpotlight from './projectSpotlight';
import { FaAngleLeft, FaAngleRight, FaPauseCircleO } from 'react-icons/lib/fa';

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

const ControlsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(204, 204, 204, 0);
  z-index: 3;
  transition: background-color 800ms

  svg {
    opacity: 0;
    transition: opacity 800ms;
    color: ${props => props.theme.baseColor}
    z-index: 4;
  }

  &:hover {
    background-color: rgba(204, 204, 204, 0.5);

    svg {
      opacity: 1;
    }
  }

`;

const ControlsFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarouselControls = props => (
  <ControlsContainer>
    <ControlsFlex>
      <FaAngleLeft size={75} />
      <FaPauseCircleO size={60} />
      <FaAngleRight size={75} />
    </ControlsFlex>
  </ControlsContainer>
);

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
  render() {
    const test = projectSpotlight[0];

    return (
      <CarouselContainer>
        <Title>{test.title}</Title>
        <div style={{ position: 'relative' }}>
          <FocusImage src={test.image} />
          <CarouselControls />
        </div>
        <Description>
          <div dangerouslySetInnerHTML={{ __html: test.description }} />
          <ProjectLinks>
            <a href={test.projectLink}>Link to Live project</a>
            <a href={test.githubLink}>Link to GitHub Repository</a>
          </ProjectLinks>
        </Description>
      </CarouselContainer>
    );
  }
}

export default Carousel;
