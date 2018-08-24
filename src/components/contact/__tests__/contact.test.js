import React from 'react';
import { cleanup, render } from 'react-testing-library';

import Contact from '..';

describe('<Contact />', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { container } = render(<Contact inputRef={jest.fn()} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
