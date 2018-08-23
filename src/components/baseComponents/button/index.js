// @flow
import * as React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';
import themeUtils from '../../themeUtils';

const ButtonStyles = css`
  background-color: ${themeUtils.complementaryLight};
  color: ${themeUtils.baseColor};
  padding: 0.2rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${themeUtils.baseColor};
  }
`;

type Props = {
  children: React.Node,
  type: 'button' | 'submit',
  url?: string,
};

const Button = ({ children, type, url }: Props) => {
  if (!url)
    return (
      <button type={type} className={ButtonStyles}>
        {children}
      </button>
    );

  return url.substring(0, 1) === '/' ? (
    <Link className={ButtonStyles} to={url}>
      {children}
    </Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

Button.defaultProps = {
  type: 'button',
  url: undefined,
};

export default Button;
