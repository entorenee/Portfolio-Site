import React from 'react'
import { render } from '@testing-library/react'

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
