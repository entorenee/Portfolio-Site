// @flow
import * as React from 'react';
import { css } from 'emotion';

import MenuIcon from './menu-icon';
import Navigation from '../navigation';

const iconContainer = css`
  position: relative;
  height: 65px;
`;

type Props = {
  home: boolean,
};

type State = {
  isOpen: boolean,
};

class MobileNavigation extends React.Component<Props, State> {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { home } = this.props;

    return (
      <div className={iconContainer}>
        <MenuIcon isOpen={isOpen} toggleOpen={this.toggleOpen} />
        <Navigation mobile isOpen={isOpen} home={home} />
      </div>
    );
  }
}

export default MobileNavigation;
