import React from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';
import styled from 'react-emotion';

import logo from '../assets/logo.png';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  background-color: ${props => props.theme.baseColor};
`;

const Logo = styled.img`
  margin: 0.5em 0.5em;
`;

const NavigationLinks = styled.ul`
  margin-bottom: 0;
  margin-right: 2.5em;

  a {
    color: ${props => props.theme.lightAccent};
  }
`;

const LinkStyle = css`
  margin-right: 2.5em;
  text-decoration: none;
`;

const NavLink = props => (
  <Link to={props.to} className={LinkStyle}>
    {props.text}
  </Link>
);

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <Logo src={logo} />
    </Link>
    <NavigationLinks>
      <NavLink to="/about" text="About" />
      <NavLink to="/work" text="Work" />
      <NavLink to="/contact" text="Contact" />
      <NavLink to="/blog" text="Blog" />
    </NavigationLinks>
  </HeaderWrapper>
);

export default Header;
