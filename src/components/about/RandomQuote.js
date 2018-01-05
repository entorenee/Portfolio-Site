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

const RandomQuote = props => {
  const { slideData: quote } = props;

  return (
    <Card maxWidth="50%">
      <QuoteContainer>
        <div>{quote.quote}</div>
        <div>{quote.attribution}</div>
      </QuoteContainer>
    </Card>
  );
};

export default withSlideshow(RandomQuote, quotesData);
