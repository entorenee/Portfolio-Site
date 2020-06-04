// @flow
import React from 'react'
import { css } from '@emotion/core'
import { graphql, StaticQuery } from 'gatsby'

import useSlideshow from '../hooks/use-slideshow'
import QuoteCard from '../base-components/quote-card'

const gridStyles = css`
  grid-area: 3 / 1 / 4 / -1;

  @media (min-width: 700px) {
    grid-column: 2 / span 4;
  }

  @media (min-width: 1000px) {
    grid-area: 2 / 3 / 3 / 5;
  }
`

const attribution = css`
  margin-left: 1rem;
`

type Quote = {
  attribution: string,
  quote: string,
}

type Props = {
  data: {
    contentfulSlideshow: {
      slides: Array<Quote>,
    },
  },
}

export const PureRandomQuote = ({
  data: {
    contentfulSlideshow: { slides },
  },
}: Props) => {
  const { currIndex } = useSlideshow(slides)
  const quote = slides[currIndex]

  return (
    <div css={gridStyles} data-testid='random-quote'>
      <QuoteCard>
        <div>{quote.quote}</div>
        <div css={attribution}>{`~${quote.attribution}`}</div>
      </QuoteCard>
    </div>
  )
}

const query = graphql`
  {
    contentfulSlideshow(group: { eq: "quotes" }) {
      slides {
        ... on ContentfulQuote {
          quote
          attribution
        }
      }
    }
  }
`

const RandomQuote = () => (
  <StaticQuery
    query={query}
    render={(data) => <PureRandomQuote data={data} />}
  />
)

export default RandomQuote
