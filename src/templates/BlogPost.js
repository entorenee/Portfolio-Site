import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { FaAngleLeft } from 'react-icons/lib/fa';
import themeUtils from '../components/themeUtils';
import QuoteCard from '../components/QuoteCard';

const PostContainer = styled.div`
  margin-top: 65px;
  padding-top: 2rem;
`;

const BlogIndexLink = styled.div`
  ${themeUtils.margins};
  margin-bottom: 0.7rem;

  a {
    svg {
      margin-right: 0.3rem;
    }
  }
`;

const PostHeaderContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const BlogBodyContainer = styled.div`
  ${themeUtils.margins};

  h2 {
    color: ${themeUtils.baseColor};
  }

  a {
    color: ${themeUtils.mediumAccent};
    transition: color 800ms;

    &:hover {
      color: ${themeUtils.complementaryDark};
    }
  }

  li {
    margin-bottom: 0.4rem;
    line-height: 1.3;
  }
`;

const BlogTitle = styled.h1`
  text-align: center;
`;

const BlogIndex = () => (
  <BlogIndexLink>
    <Link to="/blog">
      <FaAngleLeft size={20} />Return to Blog Index
    </Link>
  </BlogIndexLink>
);

const BlogPost = props => {
  const { title } = props.data.contentfulBlogPost;
  const { html: body } = props.data.contentfulBlogPost.body.childMarkdownRemark;

  const headlineImage = !props.data.contentfulBlogPost.headlineImage
    ? null
    : props.data.contentfulBlogPost.headlineImage.file.url;

  const headlineAltText = headlineImage
    ? props.data.contentfulBlogPost.headlineImage.description
    : null;

  const keyQuote = !props.data.contentfulBlogPost.keyQuote
    ? null
    : props.data.contentfulBlogPost.keyQuote.keyQuote;

  return (
    <PostContainer>
      <Helmet title={`${title} - Daniel Lemay`} />
      <BlogIndex />
      <PostHeaderContainer>
        {keyQuote && (
          <div style={{ maxWidth: '50%' }}>
            <QuoteCard>
              <p>{keyQuote}</p>
            </QuoteCard>
          </div>
        )}
        {headlineImage && <img src={headlineImage} alt={headlineAltText} />}
      </PostHeaderContainer>
      <BlogBodyContainer>
        <BlogTitle>{title}</BlogTitle>
        <div
          dangerouslySetInnerHTML={{ __html: body }} // eslint-disable-line react/no-danger
        />
      </BlogBodyContainer>
    </PostContainer>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string.isRequired
        }).isRequired
      }).isRequired,
      headlineImage: PropTypes.shape({
        description: PropTypes.string,
        file: PropTypes.shape({
          url: PropTypes.string
        })
      }),
      keyQuote: PropTypes.shape({
        keyQuote: PropTypes.string
      })
    }).isRequired
  }).isRequired
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      keyQuote {
        keyQuote
      }
      headlineImage {
        description
        file {
          url
        }
      }
    }
  }
`;
