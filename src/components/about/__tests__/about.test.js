import React from 'react';
import { cleanup, render } from 'react-testing-library';

import About from '..';

describe('<About />', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { container } = render(<About />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
