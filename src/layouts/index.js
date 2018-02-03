import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  h1 {
    color: #2D3B7F;
  }
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Daniel Lemay | Full Stack JavaScript Developer"
      meta={[
        {
          name: 'description',
          content:
            'Daniel Lemay is a full stack JavaScript developer, based out of Portland Oregon, specializing in responsive web applications using cutting edge technologies.'
        },
        {
          name: 'keywords',
          content:
            'javascript, web development, developer, Portland, Oregon, front-end, full stack, back-end, react'
        }
      ]}
    />
    <Header />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired
};

export default TemplateWrapper;
