import React from 'react';
import renderer from 'react-test-renderer';
import NavigationLinks from '../src/components/header/NavigationLinks';

describe('NavigationControls', () => {
  it('renders properly', () => {
    const tree = renderer.create(<NavigationLinks home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
