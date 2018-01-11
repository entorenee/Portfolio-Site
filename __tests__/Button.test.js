import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../src/components/Button';

describe('Button', () => {
  it('should render an anchor element if passed an href property', () => {
    const wrapper = mount(<Button href="http://dslemay.com" />);
    expect(wrapper.find('a').length).toBe(1);
  });

  it('renders properly when passed an href property', () => {
    const tree = renderer.create(<Button href="http://dslemay.com" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render an anchor element if passed a to property', () => {
    const wrapper = mount(<Button to="http://dslemay.com" />);
    expect(wrapper.find('MockedLink').length).toBe(1);
  });

  it('renders properly when passed a to property', () => {
    const tree = renderer.create(<Button to="http://dslemay.com" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a basic button if not passed any props', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.find('button').length).toBe(1);
  });
});
