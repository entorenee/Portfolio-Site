// @flow
import * as React from 'react';
import classNames from 'classnames';
import { css } from 'emotion';
import themeUtils from '../../themeUtils';

const cardStyles = css`
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem 0.25rem;
  box-shadow: 3px 3px 5px ${themeUtils.mediumAccent};
`;

type Props = {
  children: React.Node,
  className: string,
};

const Card = ({ children, className }: Props) => (
  <div className={classNames(cardStyles, className)}>{children}</div>
);

Card.defaultProps = {
  className: '',
};

export default Card;
