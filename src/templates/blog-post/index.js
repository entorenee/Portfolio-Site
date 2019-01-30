// @flow
import * as React from 'react';
import { css } from 'emotion';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { FaAngleLeft } from 'react-icons/fa';
import 'prismjs/themes/prism.css';

import Layout from '../../layouts/main';
import themeUtils from '../../components/theme-utils';
import QuoteCard from '../../components/base-components/quote-card';
import './style.css';

const wrapper = css`
  margin-top: 65px;
  padding-top: 2rem;
`;

const blogIndexLink = css`
  ${themeUtils.margins};
  margin-bottom: 0.7rem;

  a {
    svg {
      margin-right: 0.3rem;
    }
  }
`;

const headerContainer = css`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
`;

const quoteContainer = css`
  margin-right: 0.5rem;

  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const postContainer = css`
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

const blogTitle = css`
  text-align: center;
`;

const BlogIndex = () => (
  <div className={blogIndexLink}>
    <Link to="/blog">
      <FaAngleLeft size={20} />
      Return to Blog Index
    </Link>
  </div>
);

type Props = {
  data: {
    contentfulBlogPost: {
      title: string,
      body: {
        childMarkdownRemark: {
          html: string,
        },
      },
      headlineImage?: {
        description: string,
        file: {
          url: string,
        },
      },
      keyQuote?: {
        childMarkdownRemark: {
          html: string,
        },
      },
    },
  },
};

const BlogPost = ({ data: { contentfulBlogPost } }: Props) => {
  const { title } = contentfulBlogPost;
  const { html: body } = contentfulBlogPost.body.childMarkdownRemark;

  const headlineImage = !contentfulBlogPost.headlineImage
    ? null
    : contentfulBlogPost.headlineImage.file.url;

  const headlineAltText = !contentfulBlogPost.headlineImage
    ? null
    : contentfulBlogPost.headlineImage.description;

  const keyQuote = !contentfulBlogPost.keyQuote
    ? null
    : contentfulBlogPost.keyQuote.childMarkdownRemark.html;

  return (
    <Layout>
      <div className={wrapper}>
        <Helmet title={`${title} - Daniel Lemay`} />
        <BlogIndex />
        <div className={headerContainer}>
          {keyQuote && (
            <div className={quoteContainer}>
              <QuoteCard>
                <div
                  dangerouslySetInnerHTML={{ __html: keyQuote }} // eslint-disable-line react/no-danger, max-len
                />
              </QuoteCard>
            </div>
          )}
          {headlineImage && <img src={headlineImage} alt={headlineAltText} />}
        </div>
        <div className={postContainer}>
          <h1 className={blogTitle}>{title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: body }} // eslint-disable-line react/no-danger
          />
        </div>
      </div>
    </Layout>
  );
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
