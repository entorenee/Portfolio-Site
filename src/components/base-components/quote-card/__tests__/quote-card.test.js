import React from 'react'
import { render } from 'react-testing-library'

import QuoteCard from '..'

describe('<QuoteCard />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <QuoteCard>
        <p>Inspiring quotes are amazing!</p>
      </QuoteCard>,
    )
    expect(container).toMatchSnapshot()
  })
})
