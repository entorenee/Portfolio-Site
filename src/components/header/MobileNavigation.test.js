import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import MobileNavigation from '../src/components/header/MobileNavigation';

describe('MobileNavigation', () => {
  it('renders properly', () => {
    const tree = renderer.create(<MobileNavigation home />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('toggleOpen method toggles isOpen boolean state', () => {
    const wrapper = mount(<MobileNavigation home />);
    wrapper.instance().toggleOpen();
    expect(wrapper.state().isOpen).toBe(true);
    wrapper.instance().toggleOpen();
    expect(wrapper.state().isOpen).toBe(false);
  });
});