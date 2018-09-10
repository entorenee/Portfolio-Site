import React from 'react';
import { cleanup, render } from 'react-testing-library';

import About from '..';

afterEach(cleanup);

describe('<About />', () => {
  it('renders correctly', () => {
    const { container, getByTestId, getByText } = render(<About />);

    expect(container).toBeTruthy();
    expect(getByTestId('random-quote')).toBeTruthy();
    expect(getByText('Skills')).toBeTruthy();
  });
});
