/* eslint-disable react/display-name */
/* eslint @typescript-eslint/no-require-imports: "warn", @typescript-eslint/no-var-requires: "warn" */
import React from 'react'
import { act, render } from '@testing-library/react'

import { PureRandomQuote } from '../random-quote'
import testProps from '../testProps'

import About from '..'

const RandomQuote = require('../random-quote')

RandomQuote.default = () => <PureRandomQuote {...testProps} />

const { slides: quotes } = testProps.data.contentfulSlideshow

jest.useFakeTimers()

describe('<About />', () => {
  it('renders correctly', () => {
    const { container, getByTestId, getByText, queryByText } = render(<About />)

    expect(container).toBeTruthy()
    getByTestId('random-quote')
    getByText('Skills')
    getByText(quotes[0].quote)

    // Quote slideshow runs on a timer
    act(() => {
      jest.advanceTimersByTime(5000)
    })
    expect(queryByText(quotes[0].quote)).toBeNull()
    getByText(quotes[1].quote)
  })
})
