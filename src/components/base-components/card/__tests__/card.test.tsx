import React from 'react'
import { render } from '@testing-library/react'

import Card from '..'

describe('<Card />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Card>
        <div>Hello World</div>
      </Card>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
