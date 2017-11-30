import React, { Component } from 'react';
import styled from 'react-emotion';
import projectSpotlight from './projectSpotlight';

const CarouselContainer = styled.div`
  ${props => props.theme.margins};
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
  render() {
    const test = projectSpotlight[0];

    return (
      <CarouselContainer>
        <Title>{test.title}</Title>
        <FocusImage src={test.image} />
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
