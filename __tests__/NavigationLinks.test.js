import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import NavigationLinks from '../src/components/header/NavigationLinks';

describe('NavigationControls', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <NavigationLinks />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
