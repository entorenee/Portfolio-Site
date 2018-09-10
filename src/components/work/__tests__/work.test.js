import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import Carousel from '../carousel';
import projects from '../carousel/project-spotlight';
import Work from '..';

afterEach(cleanup);

describe('<Carousel />', () => {
  it('Navigation controls work properly', () => {
    const { getByLabelText, getByTestId, getByText, queryByText } = render(<Carousel />);

    // Test play pause buttons
    fireEvent.click(getByLabelText('pause'));
    const play = getByLabelText('play');
    expect(play).toBeTruthy();
    fireEvent.click(play);
    expect(getByLabelText('pause')).toBeTruthy();

    // Test next and previous buttons
    fireEvent.click(getByLabelText('next'));
    expect(getByText(projects[1].title)).toBeTruthy();
    fireEvent.click(getByLabelText('previous'));
    expect(getByText(projects[0].title)).toBeTruthy();

    // Test when not playing
    fireEvent.click(getByLabelText('pause'));
    fireEvent.click(getByLabelText('next'));
    expect(getByText(projects[1].title)).toBeTruthy();

    // Test clicking selector boxes
    fireEvent.click(getByTestId('project3'));
    expect(getByText(projects[3].title)).toBeTruthy();
    expect(queryByText(projects[0].title)).toBeNull();
  });
});

describe('<Work />', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Work />);

    expect(container).toBeTruthy();
    expect(getByText('Work')).toBeTruthy();
  });
});
