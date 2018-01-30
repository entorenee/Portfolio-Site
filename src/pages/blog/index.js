import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { postSlug } from '../../utils/helpers';

const BlogLink = ({ node }) => {
  const { title, postDate } = node;
  const slug = postSlug(postDate, title);
  return (
    <li>
      <Link to={slug}>{title}</Link>
    </li>
  );
};

BlogLink.propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};

const BlogIndex = ({ data: { allContentfulBlogPost: { edges } } }) => {
  const Posts = edges.map(edge => <BlogLink key={edge.node.id} node={edge.node} />);

  return <div style={{ marginTop: '70px' }}>{Posts}</div>;
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allContentfulBlogPost: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            postDate: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
          }).isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          postDate(formatString: "YYYY/MM/DD")
          id
        }
      }
    }
  }
`;
