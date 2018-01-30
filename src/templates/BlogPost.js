import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = props => {
  const { title } = props.data.contentfulBlogPost;
  return <div style={{ marginTop: '70px' }}>{title}</div>;
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
    }
  }
`;
