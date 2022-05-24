import React from 'react'
import { render } from '@testing-library/react'

import Contact from '..'

// TODO: Add test for form submission after migrating to Netlify forms
describe('<Contact />', () => {
  it('renders correctly', () => {
    const { container } = render(<Contact />)
    expect(container).toBeTruthy()
  })
})
