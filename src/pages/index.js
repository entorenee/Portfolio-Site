import React from 'react';
import Link from 'gatsby-link';
import About from '../components/about/About';
import Work from '../components/work/Work';

const { Fragment } = React;

const IndexPage = () => (
  <Fragment>
    <About />
    <Work />
  </Fragment>
);

export default IndexPage;
