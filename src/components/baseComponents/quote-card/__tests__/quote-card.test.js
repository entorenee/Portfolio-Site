import React from 'react';
import { cleanup, render } from 'react-testing-library';

import QuoteCard from '..';

describe('<QuoteCard />', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { container } = render(
      <QuoteCard>
        <p>Inspiring quotes are amazing!</p>
      </QuoteCard>,
    );
    expect(container).toMatchSnapshot();
  });
});
