// @flow
import * as React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';
import themeUtils from '../../theme-utils';

const buttonStyles = css`
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
      /* eslint-disable-next-line react/button-has-type */
      <button type={type} className={buttonStyles}>
        {children}
      </button>
    );

  return url.substring(0, 1) === '/' ? (
    <Link className={buttonStyles} to={url}>
      {children}
    </Link>
  ) : (
    <a className={buttonStyles} href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

Button.defaultProps = {
  type: 'button',
  url: undefined,
};

export default Button;
