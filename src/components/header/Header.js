import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import NavigationLinks from './NavigationLinks';
import MenuIcon from './MenuIcon';
import MobileNavigation from './MobileNavigation';

import logo from '../../assets/img/logo.png';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  background-color: ${props => props.theme.baseColor};
  z-index: 10;
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
    var mql = window.matchMedia('(max-width: 450px)');
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
      <div
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: 10
        }}
      >
        <HeaderWrapper>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          {this.state.mobile ? <MobileNavigation /> : <NavigationLinks />}
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;
