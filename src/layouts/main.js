// @flow
import * as React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';
import favicon from './favicon-32x32.png';

import './index.css';

type Props = {
  children: React.ChildrenArray<React.Node>,
};

const TemplateWrapper = ({ children }: Props) => (
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

export default TemplateWrapper;
