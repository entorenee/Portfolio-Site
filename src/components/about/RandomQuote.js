import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import Slideshow from '../Slideshow';
import QuoteCard from '../QuoteCard';

import quotesData from '../../assets/js/quotesData';

const GridStyling = styled.div`
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
      <GridStyling>
        <QuoteCard>
          <div>{quote.quote}</div>
          <div className={attribution}>{`~${quote.attribution}`}</div>
        </QuoteCard>
      </GridStyling>
    )}
  </Slideshow>
);

export default RandomQuote;
