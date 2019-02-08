import React from 'react';
import { render } from 'react-testing-library';

import Footer from '..';

describe('<Footer />', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<Footer />);
    expect(getByLabelText('copyright')).toBeTruthy();
  });
});
