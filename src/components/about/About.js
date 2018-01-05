import React from 'react';
import Hero from './Hero';
import AboutCards from './AboutCards';
import Blurb from './Blurb';
import RandomQuote from './RandomQuote';

const { Fragment } = React;

const About = () => (
  <Fragment>
    <Hero />
    <AboutCards />
    <Blurb />
    <RandomQuote />
  </Fragment>
);

export default About;
