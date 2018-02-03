import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import styled from 'react-emotion';
import themeUtils from '../themeUtils';
import Carousel from './Carousel';

const WorkHeader = styled.h1`
  ${themeUtils.margins};
  margin-bottom: 1.6rem;
`;

const Work = props => (
  <section id="work" ref={props.inputRef}>
    <Element name="work" />
    <WorkHeader>Work</WorkHeader>
    <Carousel />
  </section>
);

Work.propTypes = {
  inputRef: PropTypes.func.isRequired
};

export default Work;
