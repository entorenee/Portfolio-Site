import React from 'react'
import { render } from 'react-testing-library'

import Button from '..'

describe('<Button />', () => {
  it('renders a button correctly', () => {
    const { container } = render(<Button>Click me</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders an internal link correctly', () => {
    const { container } = render(<Button url='/about'>About</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders an anchor link correctly', () => {
    const { container } = render(
      <Button url='https://github.com/dlsemay'>My Github</Button>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
