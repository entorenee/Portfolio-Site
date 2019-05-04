// @flow
import * as React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import { CATEGORY_BASE, TAG_BASE } from './url-base'
import themeUtils from '../../components/theme-utils'

const wrapper = css`
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 0.3rem;
  }
`

const categoryTagContainer = css`
  display: flex;
  flex-wrap: wrap;
  margin: -0.2rem -1.5rem;

  span {
    margin: 0.2rem 1.5rem;
  }

  a {
    padding: 0 0.6rem;
  }
`

const tags = css`
  a:nth-last-of-type(n + 2) {
    border-right: 1px solid ${themeUtils.baseColor};
  }
`

type Tag = {
  tag: string,
  slug: string,
}

// Meta Props which exist at top level
export type TopMetaProps = {
  postCategory: {
    category: string,
    slug: string,
  },
  postDate: string,
  postTags: Tag[],
}

type Props = TopMetaProps & { timeToRead: number }

const PostMeta = ({ postCategory, postDate, postTags, timeToRead }: Props) => (
  <div css={wrapper}>
    <p>{`${timeToRead} min read · ${postDate}`}</p>
    <div css={categoryTagContainer}>
      <span>
        Category:{' '}
        <Link to={`${CATEGORY_BASE}/${postCategory.slug}`}>
          {postCategory.category}
        </Link>
      </span>
      <span css={tags}>
        {'Tagged with: '}
        {postTags.map(({ tag, slug }) => (
          <React.Fragment key={tag}>
            <Link to={`${TAG_BASE}/${slug}`}>{tag}</Link>
          </React.Fragment>
        ))}
      </span>
    </div>
  </div>
)

export default PostMeta
