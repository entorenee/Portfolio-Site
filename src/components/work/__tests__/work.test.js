/* eslint-disable react/display-name */
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { PureCarousel } from '../carousel'
import testProps from '../testProps'

import Work from '..'

// Mock Carousel default for Work integration test
const Carousel = require('../carousel')

Carousel.default = () => <PureCarousel {...testProps} />

const { slides } = testProps.data.contentfulSlideshow

describe('<Carousel />', () => {
  it('Navigation controls work properly', () => {
    const { getByLabelText, getByTestId, getByText, queryByText } = render(
      <PureCarousel {...testProps} />,
    )

    // Test play pause buttons
    fireEvent.click(getByLabelText(/pause slideshow/i))
    const play = getByLabelText(/play slideshow/i)
    expect(play).toBeTruthy()
    fireEvent.click(play)
    getByLabelText(/pause slideshow/i)

    // Test next and previous buttons
    fireEvent.click(getByLabelText(/go to next project/i))
    getByText(slides[1].title)
    fireEvent.click(getByLabelText(/go to previous project/i))
    getByText(slides[0].title)

    // Test when not playing
    fireEvent.click(getByLabelText(/pause slideshow/i))
    fireEvent.click(getByLabelText(/go to next project/i))
    getByText(slides[1].title)

    // Test clicking selector boxes
    fireEvent.click(getByTestId('project2'))
    getByText(slides[2].title)
    expect(queryByText(slides[0].title)).toBeNull()
  })
})

describe('<Work />', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Work />)

    expect(container).toBeTruthy()
    getByText('Work')
  })
})
