import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const CardWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  margin-bottom: 1.5rem;
  border: 1px solid #ccc
  padding: 0.5rem 0.25rem;
  box-shadow: 5px 5px 5px ${props => props.theme.darkAccent};
  ${props => props.style};
`;

const Card = props => (
  <CardWrapper style={props.style} maxWidth={props.maxWidth}>
    {props.children}
  </CardWrapper>
);

Card.propTypes = {
  maxWidth: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired
};

Card.defaultProps = {
  maxWidth: '',
  style: {}
};

export default Card;
