import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import { PureCarousel } from '../carousel';
import Work from '..';
import testProps from '../testProps';

// Mock Carousel default for Work integration test
const Carousel = require('../carousel');

Carousel.default = () => <PureCarousel {...testProps} />;

const { slides } = testProps.data.contentfulSlideshow;

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
    getByLabelText('pause');

    // Test next and previous buttons
    fireEvent.click(getByLabelText('next'));
    getByText(slides[1].title);
    fireEvent.click(getByLabelText('previous'));
    getByText(slides[0].title);

    // Test when not playing
    fireEvent.click(getByLabelText('pause'));
    fireEvent.click(getByLabelText('next'));
    getByText(slides[1].title);

    // Test clicking selector boxes
    fireEvent.click(getByTestId('project2'));
    getByText(slides[2].title);
    expect(queryByText(slides[0].title)).toBeNull();
  });
});

describe('<Work />', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Work />);

    expect(container).toBeTruthy();
    getByText('Work');
  });
});
