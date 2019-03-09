// @flow
/* eslint-disable react/no-danger */
import * as React from 'react';
import { css } from '@emotion/core';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'prismjs/themes/prism.css';

import type { TopMetaProps as PostMetaProps } from './post-meta';

import Layout from '../../layouts/main';
import PostMeta from './post-meta';
import { postSlug } from '../../utils/helpers';
import QuoteCard from '../../components/base-components/quote-card';
import RelatedContent from '../../components/base-components/related-content';
import themeUtils from '../../components/theme-utils';
import './style.css';

const wrapper = css`
  margin-top: 65px;
  padding-top: 2rem;
`;

const blogMargins = css`
  ${themeUtils.margins};
  max-width: 800px;
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
  margin: 0 auto 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 90%;

  img,
  p {
    margin-bottom: 0;
  }
`;

const quoteContainer = css`
  margin-right: 0.5rem;

  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const postContainer = css`
  ${blogMargins};

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
  margin-bottom: 1rem;
`;

const relatedPostsContainer = css`
  ${themeUtils.margins};
  margin-bottom: 2rem;
`;

const relatedPostCards = css`
  @media ${themeUtils.tablet} {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    > *:nth-last-child(n + 2) {
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 1.1rem;
    }
  }
`;

const readMoreLink = css`
  display: inline-flex;
  align-items: center;
  margin-left: 0.2rem;

  svg {
    margin-left: 0.2rem;
  }
`;

const BlogIndex = () => (
  <div css={blogIndexLink}>
    <Link to="/blog">
      <FaAngleLeft size={20} />
      Return to Blog Index
    </Link>
  </div>
);

type Props = {
  data: {
    contentfulBlogPost: {
      body: {
        childMarkdownRemark: {
          excerpt: string,
          html: string,
          timeToRead: number,
        },
      },
      headlineImage?: {
        file: {
          url: string,
        },
        title: string,
      },
      headlineImageCaption?: {
        childMarkdownRemark: {
          html: string,
        },
      },
      keyQuote?: {
        childMarkdownRemark: {
          html: string,
        },
      },
      relatedPosts?: {
        body: {
          childMarkdownRemark: {
            excerpt: string,
          },
        },
        postDate: string,
        title: string,
      }[],
      title: string,
    } & PostMetaProps,
  },
};

const ReadMore = () => (
  <span css={readMoreLink}>
    Read more
    <FaAngleRight />
  </span>
);

const BlogPost = ({ data: { contentfulBlogPost } }: Props) => {
  const {
    headlineImage,
    headlineImageCaption,
    keyQuote,
    postCategory,
    postDate,
    postTags,
    relatedPosts,
    title,
  } = contentfulBlogPost;
  const { excerpt, html: body, timeToRead } = contentfulBlogPost.body.childMarkdownRemark;

  const headlineImageSrc = headlineImage ? headlineImage.file.url : null;
  const headlineAltText = headlineImage ? headlineImage.title : null;
  const headlineImageCaptionHtml = headlineImageCaption
    ? headlineImageCaption.childMarkdownRemark.html
    : null;
  const keyQuoteHtml = keyQuote ? keyQuote.childMarkdownRemark.html : null;
  const metaTitle = `${title} - Daniel Lemay`;
  const cards = !relatedPosts
    ? null
    : relatedPosts.map(post => ({
        headlineText: post.title,
        excerptText: post.body.childMarkdownRemark.excerpt,
        link: {
          text: <ReadMore />,
          url: postSlug(post.postDate, post.title),
        },
      }));

  return (
    <Layout>
      <div css={wrapper}>
        <Helmet>
          <title>{metaTitle}</title>
          <meta property="og:type" content="article" />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={excerpt} />
          {headlineImage && <meta property="og:image" content={headlineImageSrc} />}
        </Helmet>
        <BlogIndex />
        <div css={headerContainer}>
          {keyQuote && (
            <div css={quoteContainer}>
              <QuoteCard>
                <div dangerouslySetInnerHTML={{ __html: keyQuoteHtml }} />
              </QuoteCard>
            </div>
          )}
          {headlineImage && (
            <>
              <img src={headlineImageSrc} alt={headlineAltText} />
              {headlineImageCaption && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: headlineImageCaptionHtml,
                  }}
                />
              )}
            </>
          )}
        </div>
        <div css={postContainer}>
          <h1 css={blogTitle}>{title}</h1>
          <PostMeta
            postCategory={postCategory}
            postDate={postDate}
            postTags={postTags}
            timeToRead={timeToRead}
          />
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
        {cards && (
          <div css={relatedPostsContainer}>
            <h2 css={{ textAlign: 'center' }}>Related Posts</h2>
            <RelatedContent css={relatedPostCards} cards={cards} />
          </div>
        )}
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
          excerpt(pruneLength: 300)
          html
          timeToRead
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
        title
      }
      headlineImageCaption {
        childMarkdownRemark {
          html
        }
      }
      postTags {
        tag
        slug
      }
      postCategory {
        category
        slug
      }
      postDate(formatString: "MMMM D, YYYY")
      relatedPosts {
        title
        postDate(formatString: "YYYY/MM/DD")
        body {
          childMarkdownRemark {
            excerpt(pruneLength: 200)
          }
        }
      }
    }
  }
`;
