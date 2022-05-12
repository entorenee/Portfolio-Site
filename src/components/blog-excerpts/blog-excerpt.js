// @flow
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import type { HeadlineImage } from '../types'
import Card from '../base-components/card'

type Props = {
  className?: string,
  excerpt: string,
  headline: string,
  image?: HeadlineImage,
  url: string,
}

const BlogExcerpt = ({ className, excerpt, headline, image, url }: Props) => (
  <Card css={{ padding: '1rem' }} className={className}>
    {image && (
      <GatsbyImage
        css={{ marginBottom: '1rem' }}
        alt={image.description}
        image={image.gatsbyImage}
      />
    )}
    <Link to={url} css={{ textDecoration: 'none' }}>
      <h3 css={{ marginBottom: '1rem' }}>{headline}</h3>
    </Link>
    <p>{excerpt}</p>
  </Card>
)

BlogExcerpt.defaultProps = {
  className: '',
  image: undefined,
}

export default BlogExcerpt
