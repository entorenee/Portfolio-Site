import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import Carousel from '../carousel';

afterEach(cleanup);

describe('<Carousel />', () => {
  it('Navigation controls work properly', () => {
    const { getByLabelText, getByText } = render(<Carousel />);

    // Test play pause buttons
    fireEvent.click(getByLabelText('pause'));
    const play = getByLabelText('play');
    expect(play).toBeTruthy();
    fireEvent.click(play);
    expect(getByLabelText('pause')).toBeTruthy();

    // Test next and previous buttons
    fireEvent.click(getByLabelText('next'));
    expect(getByText('Simon Game')).toBeTruthy();
    fireEvent.click(getByLabelText('previous'));
    expect(getByText('Wanderful')).toBeTruthy();
  });
});
