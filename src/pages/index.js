import React from 'react';
import About from '../components/about/About';
import Work from '../components/work/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const { Fragment } = React;

const IndexPage = () => (
  <Fragment>
    <About />
    <Work />
    <Contact />
    <Footer />
  </Fragment>
);

export default IndexPage;
