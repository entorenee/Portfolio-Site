// @flow
import React from 'react';
import classNames from 'classnames';
import { css } from 'emotion';
import { Link } from 'gatsby';

import NavLink, { desktopLinks, mobileLinks } from './nav-link';
import themeUtils from '../../theme-utils';

const wrapper = css`
  margin-bottom: 0;
  margin-right: 0;
  background-color: ${themeUtils.baseColor};

  a {
    color: ${themeUtils.lightAccent};
    cursor: pointer;
    transition: color 500ms;

    &:visited {
      color: ${themeUtils.lightAccent};
    }

    &:hover {
      color: ${themeUtils.complementaryDark};
    }
  }
`;

const mobileLinksBase = css`
  position: absolute;
  right: 0px;
  padding: 0 1em;
  padding-top: 0.5em;
  transition: all 800ms;
  z-index: 9;

  a {
    margin-bottom: 0.75em;
  }
`;

const mobileLinksOpen = css`
  ${mobileLinksBase};
  top: 63px;
  opacity: 1;
`;

const mobileLinksClosed = css`
  ${mobileLinksBase};
  top: -100px;
  opacity: 0;
`;

type Props = {
  home: boolean,
  isOpen: boolean,
  mobile: boolean,
};

const NavigationLinks = ({ home, isOpen, mobile }: Props) => (
  <nav
    className={classNames(wrapper, {
      [mobileLinksOpen]: mobile && isOpen,
      [mobileLinksClosed]: mobile && !isOpen,
    })}
  >
    <NavLink to="about" text="About" mobile={mobile} homePage={home} />
    <NavLink to="work" text="Work" mobile={mobile} homePage={home} />
    <NavLink to="contact" text="Contact" mobile={mobile} homePage={home} />
    <Link to="/blog" className={mobile ? mobileLinks : desktopLinks}>
      Blog
    </Link>
  </nav>
);

NavigationLinks.defaultProps = {
  mobile: false,
  isOpen: false,
};

export default NavigationLinks;
