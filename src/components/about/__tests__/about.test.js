import React from 'react';
import { act, cleanup, render } from 'react-testing-library';

import About from '..';
import { PureRandomQuote } from '../random-quote';
import testProps from '../testProps';

const RandomQuote = require('../random-quote');

RandomQuote.default = () => <PureRandomQuote {...testProps} />;

const { slides: quotes } = testProps.data.contentfulSlideshow;

afterEach(cleanup);
jest.useFakeTimers();

describe('<About />', () => {
  it('renders correctly', () => {
    const { container, getByTestId, getByText, queryByText } = render(<About />);

    expect(container).toBeTruthy();
    expect(getByTestId('random-quote')).toBeTruthy();
    expect(getByText('Skills')).toBeTruthy();
    expect(getByText(quotes[0].quote)).toBeTruthy();

    // Quote slideshow runs on a timer
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(queryByText(quotes[0].quote)).toBeNull();
    expect(getByText(quotes[1].quote)).toBeTruthy();
  });
});
