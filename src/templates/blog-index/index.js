// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';

import type { Post } from './types';
import BlogNavLink from './blog-nav-link';
import BlogPostExcerpt from './blog-post-excerpt';
import Layout from '../../layouts/main';
import themeUtils from '../../components/theme-utils';

const container = css`
  ${themeUtils.margins};
  margin-top: 65px;
  padding-top: 1rem;
`;

const navigationLinks = css`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const rssContainer = css`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
`;

type Props = {
  pageContext: {
    additionalContext: {
      headline: string,
    },
    first: boolean,
    group: Array<Post>,
    index: number,
    last: boolean,
    pathPrefix: string,
  },
};

const BlogIndex = ({ pageContext }: Props) => {
  const {
    additionalContext: { headline },
    first,
    group,
    index,
    last,
    pathPrefix,
  } = pageContext;
  const previousUrl = index - 1 === 1 ? pathPrefix : `${pathPrefix}/page/${(index - 1).toString()}`;
  const nextUrl = `${pathPrefix}/page/${(index + 1).toString()}`;

  const Posts = group.map((data: Post) => {
    const { node } = data;

    if (node) {
      // Structure for posts from all posts query
      return <BlogPostExcerpt key={node.id} node={node} />;
    }
    // Structure for category and tag queries
    return <BlogPostExcerpt key={data.id} node={data} />;
  });

  return (
    <Layout>
      <div css={container}>
        <Helmet title={`${headline} | Daniel Lemay`} />
        <div css={rssContainer}>
          <a href="/feed.xml">Subscribe to RSS</a>
        </div>
        <h1>{headline}</h1>
        {Posts}
        <div css={navigationLinks}>
          <BlogNavLink test={first} url={previousUrl} text="Go to Previous Page" />
          <BlogNavLink test={last} url={nextUrl} text="Go to Next Page" />
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;
