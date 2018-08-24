import React from 'react';
import { cleanup, render } from 'react-testing-library';

import Footer from '..';

describe('<Footer />', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
