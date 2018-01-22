import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import { injectGlobal } from 'emotion';
import Header from '../components/header/Header';

// import './index.css';
import theme from './emotionTheme';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  h1 {
    color: #2D3B7F;
  }
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header />
      <div>{children()}</div>
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
