import React from 'react'
import { render } from '@testing-library/react'

import RelatedContent from '..'

describe('<RelatedContent />', () => {
  const props = {
    cards: [
      {
        excerptText: 'This is a sample excerpt from a previous post',
        headlineText: 'Find Great Ways to Test your Components',
        link: {
          text: 'Read More',
          url: 'blog',
        },
      },
      {
        excerptText: 'This is a sample excerpt from a previoust post',
        headlineText: 'Amazing Headline. Come and Read this Article',
        link: {
          text: 'Read More',
          url: 'blog',
        },
      },
    ],
  }

  it('renders correctly', () => {
    const { container } = render(<RelatedContent {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
