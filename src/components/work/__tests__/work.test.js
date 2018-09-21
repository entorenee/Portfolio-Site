import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import { PureCarousel } from '../carousel';
import Work from '..';
import testProps from '../testProps';

// Mock Carousel default for Work integration test
const Carousel = require('../carousel');

Carousel.default = () => <PureCarousel {...testProps} />;

const { slides } = testProps.data.contentfulSlideshow;

afterEach(cleanup);

describe('<Carousel />', () => {
  it('Navigation controls work properly', () => {
    const { getByLabelText, getByTestId, getByText, queryByText } = render(
      <PureCarousel {...testProps} />,
    );

    // Test play pause buttons
    fireEvent.click(getByLabelText('pause'));
    const play = getByLabelText('play');
    expect(play).toBeTruthy();
    fireEvent.click(play);
    expect(getByLabelText('pause')).toBeTruthy();

    // Test next and previous buttons
    fireEvent.click(getByLabelText('next'));
    expect(getByText(slides[1].title)).toBeTruthy();
    fireEvent.click(getByLabelText('previous'));
    expect(getByText(slides[0].title)).toBeTruthy();

    // Test when not playing
    fireEvent.click(getByLabelText('pause'));
    fireEvent.click(getByLabelText('next'));
    expect(getByText(slides[1].title)).toBeTruthy();

    // Test clicking selector boxes
    fireEvent.click(getByTestId('project2'));
    expect(getByText(slides[2].title)).toBeTruthy();
    expect(queryByText(slides[0].title)).toBeNull();
  });
});

describe('<Work />', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Work />);

    expect(container).toBeTruthy();
    expect(getByText('Work')).toBeTruthy();
  });
});
