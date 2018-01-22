import React from 'react';
import { Element } from 'react-scroll';
import styled from 'react-emotion';
import Carousel from './Carousel';

const WorkHeader = styled.h1`
  ${props => props.theme.margins};
  margin-bottom: 1.6rem;
`;

const Work = () => (
  <section id="work">
    <Element name="work" />
    <WorkHeader>Work</WorkHeader>
    <Carousel />
  </section>
);

export default Work;
