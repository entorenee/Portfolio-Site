import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Header from '..'

// @ts-ignore
window.___navigate = jest.fn()

describe('<Header /> mobile view', () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }))
  })

  it('renders correctly', () => {
    const { container, getByLabelText } = render(<Header />)

    expect(container).toBeTruthy()
    getByLabelText('menu')
  })

  it('the mobile icon toggles open states on click', () => {
    const { getByLabelText } = render(<Header />)

    const menu = getByLabelText('menu')
    expect(menu).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(menu)
    expect(menu).toHaveAttribute('aria-expanded', 'true')
  })
})

describe('<Header /> non-mobile view', () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }))
  })

  it('renders correctly', () => {
    const { container, getByAltText } = render(<Header />)

    const logo = getByAltText('Logo')
    fireEvent.click(logo)

    expect(container).toBeTruthy()
    expect(logo).toBeTruthy()
  })
})
