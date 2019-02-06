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

const description =
  'Daniel Lemay is a full stack JavaScript developer, based out of Portland Oregon, specializing in responsive web applications using cutting edge technologies.';
const url = typeof window !== 'undefined' ? window.location.href : undefined;
const title = 'Daniel Lemay | JavaScript Developer';

const TemplateWrapper = ({ children }: Props) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
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
