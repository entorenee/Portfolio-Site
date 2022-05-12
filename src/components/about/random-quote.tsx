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

interface Quote {
  attribution: string
  quote: string
}

interface Props {
  data: {
    contentfulSlideshow: {
      slides: Quote[]
    }
  }
}

export const PureRandomQuote = ({
  data: {
    contentfulSlideshow: { slides },
  },
}: Props): JSX.Element => {
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

const RandomQuote = (): JSX.Element => (
  <StaticQuery
    query={query}
    render={(data): JSX.Element => <PureRandomQuote data={data} />}
  />
)

export default RandomQuote
