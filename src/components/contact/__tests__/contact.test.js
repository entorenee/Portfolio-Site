import React from 'react';
import { cleanup, render } from 'react-testing-library';

import Contact from '..';

afterEach(cleanup);

// TODO: Add test for form submission after migrating to Netlify forms
describe('<Contact />', () => {
  it('renders correctly', () => {
    const { container } = render(<Contact inputRef={jest.fn()} />);
    expect(container).toBeTruthy();
  });
});
