// @flow
import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';

import ScrollLink from '../../../ScrollLink';

export const desktopLinks = css`
  margin-right: 1.5em;
  text-decoration: none;
  display: inline;
`;

export const mobileLinks = css`
  margin-right: 0;
  text-decoration: none;
  display: block;
`;

type Props = {
  homePage: boolean,
  mobile: boolean,
  text: string,
  to: string,
};

const NavLink = ({ homePage, mobile, text, to }: Props) => {
  if (homePage) {
    return (
      <ScrollLink
        to={to}
        href={`#${to}`} // Needed for accessibility of react-scroll implementation
        className={mobile ? mobileLinks : desktopLinks}
        smooth
        offset={-80}
        duration={1000}
      >
        {text}
      </ScrollLink>
    );
  }
  return (
    <Link to={`/#${to}`} className={mobile ? mobileLinks : desktopLinks}>
      {text}
    </Link>
  );
};

NavLink.defaultProps = {
  mobile: false,
};

export default NavLink;
