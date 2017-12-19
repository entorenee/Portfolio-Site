import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const CardWrapper = styled.div`
  max-width: ${props => (props.maxWidth ? props.maxWidth : '')};
  margin: 0 auto;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc
  padding: 0.5rem 0.25rem;
  box-shadow: 5px 5px 5px ${props => props.theme.darkAccent};
`;

const Card = props => (
  <CardWrapper maxWidth={props.maxWidth}>{props.children}</CardWrapper>
);

Card.propTypes = {
  maxWidth: PropTypes.string
};

export default Card;
