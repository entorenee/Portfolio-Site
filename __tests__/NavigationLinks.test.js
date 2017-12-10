import React from 'react';
import NavigationLinks from '../src/components/header/NavigationLinks';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

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
