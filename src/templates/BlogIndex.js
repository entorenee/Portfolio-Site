import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { css } from 'emotion';
import themeUtils from '../components/themeUtils';
import BlogPostExcerpt from './BlogPostExcerpt';

const BlogIndexContainer = styled.div`
  ${themeUtils.margins};
  margin-top: 65px;
  padding-top: 1rem;
`;

const PageNavigationLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const deadLink = css`
  color: #666;
  user-select: none;
`;

const RSSContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
`;

const NavLink = ({ test, text, url }) => {
  if (!test) {
    return <Link to={url}>{text}</Link>;
  }
  return <span className={deadLink}>{text}</span>;
};

NavLink.propTypes = {
  test: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const BlogIndex = ({ pathContext }) => {
  // eslint-disable-next-line prettier/prettier
  const {
    group, index, first, last,
  } = pathContext;
  const previousUrl = index - 1 === 1 ? '/blog' : `/page/${(index - 1).toString()}`;
  const nextUrl = `/blog/page/${(index + 1).toString()}`;

  const Posts = group.map(({ node }) => <BlogPostExcerpt key={node.id} node={node} />);

  return (
    <BlogIndexContainer>
      <Helmet title="Blog | Daniel Lemay" />
      <RSSContainer>
        <Link to="/feed.xml">Subscribe to RSS</Link>
      </RSSContainer>
      {Posts}
      <PageNavigationLinks>
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </PageNavigationLinks>
    </BlogIndexContainer>
  );
};

BlogIndex.propTypes = {
  pathContext: PropTypes.shape({
    group: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          postDate: PropTypes.string.isRequired,
          body: PropTypes.shape({
            childMarkdownRemark: PropTypes.shape({
              html: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
          headlineImage: PropTypes.shape({
            description: PropTypes.string,
            file: PropTypes.shape({
              url: PropTypes.string,
            }),
          }),
        }),
      }),
    ),
  }).isRequired,
};

export default BlogIndex;
