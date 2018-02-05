import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

import './index.css';

const TemplateWrapper = ({ children, history }) => (
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
    <Header path={history.location.pathname} />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  }).isRequired
};

export default TemplateWrapper;
