import React from 'react';
import MenuIcon from '../src/components/header/MenuIcon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('MenuIcon', () => {
  let props;
  let mountedMenuIcon;

  const menuIcon = () => {
    if (!mountedMenuIcon) {
      mountedMenuIcon = mount(<MenuIcon {...props} />);
    }
    return mountedMenuIcon;
  };

  beforeEach(() => {
    props = {
      toggleOpen: jest.fn(),
      isOpen: false
    };

    mountedMenuIcon = undefined;
  });

  it('calls toggleOpen fn when clicking the div containing the icon', () => {
    menuIcon()
      .find('div')
      .first()
      .simulate('click');
    expect(menuIcon().props().toggleOpen).toBeCalled();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<MenuIcon {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
