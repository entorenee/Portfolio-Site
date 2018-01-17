import React from 'react';
import About from '../components/about/About';
import Work from '../components/work/Work';
import Contact from '../components/Contact';

const { Fragment } = React;

const IndexPage = () => (
  <Fragment>
    <About />
    <Work />
    <Contact />
  </Fragment>
);

export default IndexPage;
