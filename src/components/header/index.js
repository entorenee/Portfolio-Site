// @flow
import React, { Component } from 'react';
import { Link } from 'gatsby';
import { animateScroll as scroll } from 'react-scroll';
import { css } from 'emotion';

import Navigation from './navigation';
import MobileNavigation from './mobile-navigation';
import themeUtils from '../themeUtils';
import logo from '../../assets/img/logo.png';

const wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  background-color: ${themeUtils.baseColor};
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 65px;
  top: 0;
  left: 0;
`;

const logoStyles = css`
  margin: 0.5em 0.5em;
`;

type State = {
  isMobile: boolean,
};

class Header extends Component<{}, State> {
  path: string;

  state = {
    isMobile: true,
  };

  componentDidMount() {
    const mql = window.matchMedia('(max-width: 450px)');
    mql.addListener(this.handleSizeChange);
    this.handleSizeChange(mql);
    this.path = window.location.pathname;
  }

  handleSizeChange = evt => {
    const { isMobile } = this.state;

    if (evt.matches && !isMobile) {
      this.setState({ isMobile: true });
    }
    if (!evt.matches && isMobile) {
      this.setState({ isMobile: false });
    }
  };

  render() {
    const { isMobile } = this.state;

    const home = this.path === '/';

    return (
      <header className={wrapper}>
        <Link
          to="/"
          onClick={e => {
            if (home) {
              e.preventDefault();
              scroll.scrollToTop();
            }
          }}
        >
          <img className={logoStyles} src={logo} alt="Logo" />
        </Link>
        {isMobile ? <MobileNavigation home={home} /> : <Navigation home={home} />}
      </header>
    );
  }
}

export default Header;
