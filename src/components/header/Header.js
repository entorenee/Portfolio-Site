import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'react-emotion';
import NavigationLinks from './NavigationLinks';
import MobileNavigation from './MobileNavigation';
import themeUtils from '../themeUtils';
import logo from '../../assets/img/logo.png';

const HeaderWrapper = styled.div`
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

const Logo = styled.img`
  margin: 0.5em 0.5em;
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobile: true,
    };
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  componentDidMount() {
    const mql = window.matchMedia('(max-width: 450px)');
    mql.addListener(this.handleSizeChange);
    this.handleSizeChange(mql);
  }

  handleSizeChange(evt) {
    const { mobile } = this.state;

    if (evt.matches && !mobile) {
      this.setState({ mobile: true });
    }
    if (!evt.matches && mobile) {
      this.setState({ mobile: false });
    }
  }

  render() {
    const { path } = this.props;
    const { mobile } = this.state;

    const home = path === '/';

    return (
      <HeaderWrapper>
        <Link
          to="/"
          onClick={e => {
            if (home) {
              e.preventDefault();
              scroll.scrollToTop();
            }
          }}
        >
          <Logo src={logo} />
        </Link>
        {mobile ? <MobileNavigation home={home} /> : <NavigationLinks home={home} />}
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Header;
