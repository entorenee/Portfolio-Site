// @flow
import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import type { LinkType } from '../../types'
import Card from '../card'

type CardProps = {
  excerptText: string,
  headlineText: string,
  link: LinkType,
}

export type Props = {
  cards: CardProps[],
  className?: string,
}

const wrapper = css`
  display: flex;
  margin: 0 -1rem 2.4rem -1rem;
  justify-content: center;

  & > * {
    margin: 0 1rem;
    max-width: 30rem;
    flex: 1 0 30%;
  }
`

const excerptCard = css`
  padding: 1rem 0.75rem;
`

const RelatedContent = ({ cards, className }: Props) => (
  <div className={className} css={wrapper}>
    {cards.map(({ excerptText, headlineText, link }) => (
      <Card key={headlineText} css={excerptCard}>
        <h3>{headlineText}</h3>
        <p>
          {excerptText} <Link to={`/${link.url}`}>{link.text}</Link>
        </p>
      </Card>
    ))}
  </div>
)

RelatedContent.defaultProps = {
  className: '',
}

export default RelatedContent
