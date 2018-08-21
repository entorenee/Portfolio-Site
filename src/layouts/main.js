import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import favicon from './favicon-32x32.png';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Daniel Lemay | Full Stack JavaScript Developer</title>
      <meta
        name="description"
        content="Daniel Lemay is a full stack JavaScript developer, based out of Portland Oregon, specializing in responsive web applications using cutting edge technologies." // eslint-disable-line max-len
      />
      <meta
        name="keywords"
        content="javascript, web development, developer, Portland, Oregon, front-end, full stack, back-end, react" // eslint-disable-line max-len
      />
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default TemplateWrapper;
