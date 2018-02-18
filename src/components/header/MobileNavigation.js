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
    return (
      <div style={{ position: 'relative', height: '65px' }}>
        <MenuIcon isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} />
        <NavigationLinks mobile isOpen={this.state.isOpen} home={this.props.home} />
      </div>
    );
  }
}

MobileNavigation.propTypes = {
  home: PropTypes.bool.isRequired,
};

export default MobileNavigation;
