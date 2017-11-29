import React from 'react';
import styled from 'react-emotion';

const CardWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc
  padding: 0.5rem 0.25rem;
  box-shadow: 5px 5px 5px ${props => props.theme.darkAccent};
`;

const Card = props => <CardWrapper>{props.children}</CardWrapper>;

export default Card;
