// @flow
import React from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'gatsby';
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

/*
const rssContainer = css`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
`;
*/

type Props = {
  headline: string,
  metaTitle: string,
  pageContext: {
    group: Array<Post>,
    index: number,
    first: boolean,
    last: boolean,
  },
};

const BlogIndex = ({ headline, metaTitle, pageContext }: Props) => {
  const { group, index, first, last } = pageContext;
  const previousUrl = index - 1 === 1 ? '/blog' : `/page/${(index - 1).toString()}`;
  const nextUrl = `/blog/page/${(index + 1).toString()}`;

  const Posts = group.map(({ node }) => <BlogPostExcerpt key={node.id} node={node} />);

  return (
    <Layout>
      <div css={container}>
        <Helmet title={`${metaTitle} | Daniel Lemay`} />
        {/* TODO: Fix RSS Feed
        <div css={rssContainer}>
          <Link to="/feed.xml">Subscribe to RSS</Link>
        </div>
        */}
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

BlogIndex.defaultProps = {
  metaTitle: 'Blog',
};

export default BlogIndex;
