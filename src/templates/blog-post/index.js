// @flow
/* eslint-disable react/no-danger */
import * as React from 'react'
import { css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { FaAngleRight } from 'react-icons/fa'
import 'prismjs/themes/prism.css'

import type { TopMetaProps as PostMetaProps } from './post-meta'
import type { FluidImage } from '../../components/types'

import Layout from '../../layouts/main'
import PostMeta from './post-meta'
import QuoteCard from '../../components/base-components/quote-card'
import RelatedContent from '../../components/base-components/related-content'
import themeUtils from '../../components/theme-utils'
import './style.css'

const wrapper = css`
  margin-top: 65px;
  padding-top: 2rem;
`

const blogMargins = css`
  ${themeUtils.margins};
  max-width: 800px;
`

const headlineImageContainer = css`
  ${themeUtils.margins};
  margin-bottom: 1.5rem;

  img,
  p {
    margin-bottom: 0;
  }
`

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
`

const quoteCardContainer = css`
  p {
    margin-bottom: 0;
  }
`

const blogTitle = css`
  text-align: center;
  margin-bottom: 1rem;
`

const relatedPostsContainer = css`
  ${themeUtils.margins};
  margin-bottom: 2rem;
`

const relatedPostCards = css`
  @media ${themeUtils.tablet} {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    div:nth-last-of-type(n + 2) {
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 1.1rem;
    }
  }
`

const readMoreLink = css`
  display: inline-flex;
  align-items: center;
  margin-left: 0.2rem;

  svg {
    margin-left: 0.2rem;
  }
`

const heroImage = css`
  max-width: 1200px;
  margin: 0 auto;
`

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
        fluid: FluidImage,
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
        fields: {
          slug: string,
        },
        title: string,
      }[],
      title: string,
    } & PostMetaProps,
  },
}

const ReadMore = () => (
  <span css={readMoreLink}>
    Read more
    <FaAngleRight />
  </span>
)

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
  } = contentfulBlogPost
  const {
    excerpt,
    html: body,
    timeToRead,
  } = contentfulBlogPost.body.childMarkdownRemark

  const headlineImageCaptionHtml = headlineImageCaption
    ? headlineImageCaption.childMarkdownRemark.html
    : null
  const keyQuoteHtml = keyQuote ? keyQuote.childMarkdownRemark.html : null
  const metaTitle = `${title} - Daniel Lemay`
  const cards = !relatedPosts
    ? null
    : relatedPosts.map(post => ({
        headlineText: post.title,
        excerptText: post.body.childMarkdownRemark.excerpt,
        link: {
          text: <ReadMore />,
          url: post.fields.slug,
        },
      }))

  return (
    <Layout>
      <div css={wrapper}>
        <Helmet>
          <title>{metaTitle}</title>
          <meta property='og:type' content='article' />
          <meta property='og:title' content={metaTitle} />
          <meta property='og:description' content={excerpt} />
          {headlineImage && (
            <meta
              property='og:image'
              content={`https:${headlineImage.fluid.src}`}
            />
          )}
        </Helmet>
        <div css={blogMargins}>
          <h1 css={blogTitle}>{title}</h1>
          <PostMeta
            postCategory={postCategory}
            postDate={postDate}
            postTags={postTags}
            timeToRead={timeToRead}
          />
        </div>
        {headlineImage && (
          <div css={headlineImageContainer}>
            {headlineImage && (
              <Image
                css={heroImage}
                fluid={headlineImage.fluid}
                alt={headlineImage.title}
              />
            )}
            {headlineImageCaption && (
              <span
                css={{ textAlign: 'center' }}
                dangerouslySetInnerHTML={{
                  __html: headlineImageCaptionHtml,
                }}
              />
            )}
          </div>
        )}
        <div css={postContainer}>
          {keyQuote && (
            <div css={quoteCardContainer}>
              <QuoteCard>
                <div dangerouslySetInnerHTML={{ __html: keyQuoteHtml }} />
              </QuoteCard>
            </div>
          )}
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
  )
}

export default BlogPost

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
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid
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
        fields {
          slug
        }
        body {
          childMarkdownRemark {
            excerpt(pruneLength: 200)
          }
        }
      }
    }
  }
`
