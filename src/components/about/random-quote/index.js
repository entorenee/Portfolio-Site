// @flow
import React from 'react';
import { css } from 'emotion';

import Slideshow from '../../slideshow';
import QuoteCard from '../../base-components/quote-card';

import quotesData from '../../../assets/js/quotesData';

const gridStyles = css`
  grid-area: 3 / 1 / 4 / -1;

  @media (min-width: 700px) {
    grid-column: 2 / span 4;
  }

  @media (min-width: 1000px) {
    grid-area: 2 / 3 / 3 / 5;
  }
`;

const attribution = css`
  margin-left: 1rem;
`;

const RandomQuote = () => (
  <Slideshow slides={quotesData}>
    {({ slideData: quote }) => (
      <div className={gridStyles}>
        <QuoteCard>
          <div>{quote.quote}</div>
          <div className={attribution}>{`~${quote.attribution}`}</div>
        </QuoteCard>
      </div>
    )}
  </Slideshow>
);

export default RandomQuote;
