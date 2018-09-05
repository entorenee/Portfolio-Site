import React from 'react';
import { cleanup, render } from 'react-testing-library';

import Footer from '..';

afterEach(cleanup);

describe('<Footer />', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<Footer />);
    expect(getByLabelText('copyright')).toBeTruthy();
  });
});
