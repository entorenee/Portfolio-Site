import React from 'react';
import { cleanup, render } from 'react-testing-library';

import Card from '..';

describe('<Card />', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { container } = render(
      <Card>
        <div>Hello World</div>
      </Card>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
