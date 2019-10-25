// @flow
import React from 'react'
import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'

import type { HeadlineImage } from '../types'
import themeUtils, { h1 } from '../theme-utils'

import BlogExcerpt from './blog-excerpt'

type BlogPostExcerpt = {
  fields: {
    slug: string,
  },
  title: string,
  image: HeadlineImage,
  body: {
    childMarkdownRemark: {
      excerpt: string,
    },
  },
}

type GqlQuery = {
  allContentfulBlogPost: {
    nodes: BlogPostExcerpt[],
  },
}

const query = graphql`
  query blogHomepage {
    allContentfulBlogPost(limit: 6, sort: { fields: postDate, order: DESC }) {
      nodes {
        fields {
          slug
        }
        image: headlineImage {
          description
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        title
        body {
          childMarkdownRemark {
            excerpt(pruneLength: 300)
          }
        }
      }
    }
  }
`

const wrapper = css`
  ${themeUtils.margins};
  margin-bottom: 2rem;
`

const blogListContainer = css`
  display: flex;
  flex-wrap: wrap;

  @media ${themeUtils.tablet} {
    flex-direction: column;
    align-items: center;
  }
`

const excerptCard = css`
  flex: 0 1 calc(50% - 1rem);
  margin: 1rem 0.5rem;
  max-width: 500px;

  @media ${themeUtils.mobile} {
    flex: 0 0 100%;
  }
`

const HomepageBlogList = () => {
  const data: GqlQuery = useStaticQuery(query)
  const { nodes } = data.allContentfulBlogPost

  return (
    <div css={wrapper}>
      <h2 css={h1}>Recent Blog Posts</h2>
      <div css={blogListContainer}>
        {nodes.map(({ fields, title, image, body }) => (
          <BlogExcerpt
            key={title}
            css={excerptCard}
            url={fields.slug}
            headline={title}
            image={image}
            excerpt={body.childMarkdownRemark.excerpt}
          />
        ))}
      </div>
    </div>
  )
}

export default HomepageBlogList
