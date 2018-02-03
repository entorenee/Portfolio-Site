import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import themeUtils from './themeUtils';
import Card from './Card';

const QuoteContainer = styled.div`
  position: relative;
  padding: 1rem 1rem 0rem 2rem;

  &::before {
    content: '\\201C';
    font-family: Georgia;
    font-style: bold;
    font-size: 4rem;
    color: ${themeUtils.complementaryDark};
    position: absolute;
    top: -1.4rem;
    left: 0.1rem;
  }

  &::after {
    content: '\\201D';
    font-family: Georgia;
    font-style: bold;
    font-size: 4rem;
    color: ${themeUtils.complementaryDark};
    position: absolute;
    bottom: -3.6rem;
    right: 0.1rem;
  }
`;

const QuoteCard = props => (
  <Card>
    <QuoteContainer>{props.children}</QuoteContainer>
  </Card>
);

QuoteCard.propTypes = {
  children: PropTypes.node.isRequired
};

export default QuoteCard;
