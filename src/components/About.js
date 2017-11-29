import React from 'react';
import Hero from './Hero';
import AboutCards from './AboutCards';
import Blurb from './Blurb';

const { Fragment } = React;

const About = () => (
  <Fragment>
    <Hero />
    <AboutCards />
    <Blurb />
  </Fragment>
);

export default About;
