// @flow
/* eslint-disable react/no-danger */
import * as React from 'react';
import { css } from '@emotion/core';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import ArticleHeader from './article-header';
import Layout from '../layouts/main';
import themeUtils from '../components/theme-utils';

const wrapper = css`
  margin-top: 65px;
  padding-top: 2rem;
`;

const content = css`
  ${themeUtils.margins};

  h1,
  h2 {
    color: ${themeUtils.baseColor};
  }

  a {
    color: ${themeUtils.mediumAccent};
    font-weight: 600;
    transition: color 800ms;

    &:hover {
      color: ${themeUtils.complementaryDark};
    }
  }

  li {
    margin-bottom: 0.4rem;
    line-height: 1.5;
  }

  p > img {
    margin: 0 auto;
    display: block;
  }
`;

const pageTitle = css`
  text-align: center;
`;

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        keyQuote: string,
      },
      html: string,
    },
  },
};

const ResourcePage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}: Props) => {
  const { title, keyQuote } = frontmatter;

  return (
    <Layout>
      <div css={wrapper}>
        <Helmet title={`${title} - Daniel Lemay`} />
        <ArticleHeader keyQuote={keyQuote} />
        <div css={content}>
          <h1 css={pageTitle}>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
};

export default ResourcePage;

export const pageQuery = graphql`
  query resourcePageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        keyQuote
      }
      html
    }
  }
`;
