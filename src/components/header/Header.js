import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'react-emotion';
import NavigationLinks from './NavigationLinks';
import MobileNavigation from './MobileNavigation';

import logo from '../../assets/img/logo.png';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  background-color: ${props => props.theme.baseColor};
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 65px;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  margin: 0.5em 0.5em;
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobile: true
    };
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  componentDidMount() {
    const mql = window.matchMedia('(max-width: 450px)');
    mql.addListener(this.handleSizeChange);
    this.handleSizeChange(mql);
  }

  handleSizeChange(evt) {
    if (evt.matches && !this.state.mobile) {
      this.setState({ mobile: true });
    }
    if (!evt.matches && this.state.mobile) {
      this.setState({ mobile: false });
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            scroll.scrollToTop();
          }}
        >
          <Logo src={logo} />
        </a>
        {this.state.mobile ? <MobileNavigation /> : <NavigationLinks />}
      </HeaderWrapper>
    );
  }
}

export default Header;
