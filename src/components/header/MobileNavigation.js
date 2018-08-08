import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from './MenuIcon';
import NavigationLinks from './NavigationLinks';

class MobileNavigation extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { home } = this.props;

    return (
      <div style={{ position: 'relative', height: '65px' }}>
        <MenuIcon isOpen={isOpen} toggleOpen={this.toggleOpen} />
        <NavigationLinks mobile isOpen={isOpen} home={home} />
      </div>
    );
  }
}

MobileNavigation.propTypes = {
  home: PropTypes.bool.isRequired,
};

export default MobileNavigation;
