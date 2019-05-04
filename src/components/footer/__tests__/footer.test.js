import React from 'react'
import { render } from 'react-testing-library'

import Footer from '..'

describe('<Footer />', () => {
  it('renders correctly', () => {
    const year = new Date().getFullYear()
    const { getByLabelText, getByText } = render(<Footer />)

    getByLabelText('copyright')
    getByText(new RegExp(year))
  })
})
