import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { FaChevronRight } from 'react-icons/fa'

import type { PostNode as Props } from './types'
import themeUtils from '../../components/theme-utils'

const postHeaderTitle = css`
  margin-bottom: 0.7rem;
  text-align: center;
`

const postHeaderDate = css`
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  font-weight: bold;
`

const excerptContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const postImage = css`
  margin-right: 1.2rem;
  flex: 0 0 auto;

  @media (min-width: 1000px) {
    max-width: 400px;
  }
`

const readMore = css`
  margin-right: 0.4rem;
`

const divider = css`
  margin: 0.7rem 0 1.5rem 0;
  height: 3px;
  background-color: ${themeUtils.complementaryDark};
`

const BlogPostExcerpt = ({ node }: Props): JSX.Element => {
  const {
    body: {
      childMarkdownRemark: { excerpt },
    },
    fields: { slug },
    postDate,
    title,
  } = node
  const headlineImage = !node.headlineImage ? null : node.headlineImage.file.url
  const headlineAltText = !node.headlineImage ? '' : node.headlineImage.title

  return (
    <div>
      <Link css={{ textDecoration: 'none' }} to={slug}>
        <h2 css={postHeaderTitle}>{title}</h2>
      </Link>
      <div css={postHeaderDate}>{postDate}</div>
      <div css={excerptContainer}>
        {headlineImage && (
          <img css={postImage} src={headlineImage} alt={headlineAltText} />
        )}
        <div
          dangerouslySetInnerHTML={{ __html: excerpt }} // eslint-disable-line react/no-danger
        />
      </div>
      <Link to={slug}>
        <span css={readMore}>Read More</span>
        <FaChevronRight size={15} />
      </Link>
      <hr css={divider} />
    </div>
  )
}

export default BlogPostExcerpt
