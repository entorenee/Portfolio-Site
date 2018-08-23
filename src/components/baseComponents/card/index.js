// @flow
import * as React from 'react';
import styled from 'react-emotion';
import themeUtils from '../../themeUtils';

const CardWrapper = styled('div')`
  max-width: ${({ maxWidth }) => maxWidth};
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem 0.25rem;
  box-shadow: 3px 3px 5px ${themeUtils.mediumAccent};
  ${({ style }) => style};
`;

type Props = {
  children: React.Node,
  className: string,
};

const Card = ({ children, className }: Props) => (
  <CardWrapper className={className}>{children}</CardWrapper>
);

Card.defaultProps = {
  className: '',
};

export default Card;
