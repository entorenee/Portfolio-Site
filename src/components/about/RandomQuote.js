import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withSlideshow from '../withSlideshow';
import Card from '../Card';

import quotesData from '../../assets/js/quotesData';

const QuoteContainer = styled.div`
  position: relative;
  padding: 1rem 1rem 0rem 2rem;

  &::before {
    content: '\\201C';
    font-family: Georgia;
    font-style: bold;
    font-size: 4rem;
    color: ${props => props.theme.baseColor};
    position: absolute;
    top: -1.4rem;
    left: 0.1rem;
  }

  &::after {
    content: '\\201D';
    font-family: Georgia;
    font-style: bold;
    font-size: 4rem;
    color: ${props => props.theme.baseColor};
    position: absolute;
    bottom: -3.6rem;
    right: 0.1rem;
  }
`;

const GridStyling = styled.div`
  grid-area: 3 / 1 / 4 / -1;

  @media (min-width: 700px) {
    grid-column: 2 / span 4;
  }

  @media (min-width: 1000px) {
    grid-area: 2 / 3 / 3 / 5;
  }
`;

const RandomQuote = props => {
  const { slideData: quote } = props;

  return (
    <GridStyling>
      <Card>
        <QuoteContainer>
          <div>{quote.quote}</div>
          <div>{quote.attribution}</div>
        </QuoteContainer>
      </Card>
    </GridStyling>
  );
};

RandomQuote.propTypes = {
  slideData: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    attribution: PropTypes.string.isRequired
  }).isRequired
};

export default withSlideshow(RandomQuote, quotesData);
