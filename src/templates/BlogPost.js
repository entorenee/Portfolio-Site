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
  max-width: 90%;
  margin: 0 auto;
`;

const QuoteContainer = styled.div`
  margin-right: 0.5rem;

  @media (min-width: 1000px) {
    max-width: 50%;
  }
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
    line-height: 1.5;
  }

  pre {
    background-color: #faf8f0;
    padding: 1rem;

    code {
      color: black;
    }
  }

  code {
    padding: 0.2rem;
    font-family: Monaco, monospace;
    background-color: #faf8f0;
    color: red;
  }

  p > img {
    margin: 0 auto;
    display: block;
  }

  blockquote {
    position: relative;
    padding: 1rem 1rem 0rem 2rem;

    &::before {
      content: '\\201C';
      font-family: Georgia;
      font-style: bold;
      font-size: 4rem;
      color: ${themeUtils.complementaryDark};
      position: absolute;
      top: -1.4rem;
      left: 0.1rem;
    }

    &::after {
      content: '\\201D';
      font-family: Georgia;
      font-style: bold;
      font-size: 4rem;
      color: ${themeUtils.complementaryDark};
      position: absolute;
      bottom: -3.6rem;
      right: 0.1rem;
    }
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
    : props.data.contentfulBlogPost.keyQuote.childMarkdownRemark.html;

  return (
    <PostContainer>
      <Helmet title={`${title} - Daniel Lemay`} />
      <BlogIndex />
      <PostHeaderContainer>
        {keyQuote && (
          <QuoteContainer>
            <QuoteCard>
              <div
                dangerouslySetInnerHTML={{ __html: keyQuote }} // eslint-disable-line react/no-danger, max-len
              />
            </QuoteCard>
          </QuoteContainer>
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
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string
        })
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
        childMarkdownRemark {
          html
        }
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
