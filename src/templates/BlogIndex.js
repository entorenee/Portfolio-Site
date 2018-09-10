// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { css } from 'emotion';

import BlogNavLink from './blog-nav-link';
import BlogPostExcerpt from './BlogPostExcerpt';
import Layout from '../layouts/main';
import themeUtils from '../components/theme-utils';

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

export type Post = {
  node: {
    id: string,
    title: string,
    postDate: string,
    body: {
      childMarkdownRemark: {
        excerpt: string,
        html: string,
      },
    },
    headlineImage?: {
      description: string,
      file: {
        url: string,
      },
    },
  },
};

type Props = {
  pageContext: {
    group: Array<Post>,
    index: number,
    first: boolean,
    last: boolean,
  },
};

const BlogIndex = ({ pageContext }: Props) => {
  const { group, index, first, last } = pageContext;
  const previousUrl = index - 1 === 1 ? '/blog' : `/page/${(index - 1).toString()}`;
  const nextUrl = `/blog/page/${(index + 1).toString()}`;

  const Posts = group.map(({ node }) => <BlogPostExcerpt key={node.id} node={node} />);

  return (
    <Layout>
      <div className={container}>
        <Helmet title="Blog | Daniel Lemay" />
        <div className={rssContainer}>
          <Link to="/feed.xml">Subscribe to RSS</Link>
        </div>
        {Posts}
        <div className={navigationLinks}>
          <BlogNavLink test={first} url={previousUrl} text="Go to Previous Page" />
          <BlogNavLink test={last} url={nextUrl} text="Go to Next Page" />
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;
