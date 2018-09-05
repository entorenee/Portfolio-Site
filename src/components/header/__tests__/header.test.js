import React from 'react';
import { cleanup, render } from 'react-testing-library';

import Navigation from '../navigation';

afterEach(cleanup);

describe('<Navigation />', () => {
  it('renders correctly', () => {
    const { container } = render(<Navigation home />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
