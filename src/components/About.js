import React from 'react';
import Hero from './Hero';
import AboutCards from './AboutCards';

const { Fragment } = React;

const About = () => (
  <Fragment>
    <Hero />
    <AboutCards />
  </Fragment>
);

export default About;
