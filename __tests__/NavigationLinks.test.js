import React from 'react';
import { Router } from '@reach/router';
import renderer from 'react-test-renderer';
import NavigationLinks from '../src/components/header/NavigationLinks';

describe('NavigationControls', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <Router>
          <NavigationLinks home />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
