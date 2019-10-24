// @flow
import React from 'react'
import { css } from '@emotion/core'

const wrapper = css`
  grid-area: 2 / 1 / 3 / -1;

  @media (min-width: 700px) {
    grid-area: 2 / 1 / 3 / span 3;
  }

  @media (min-width: 1000px) {
    grid-area: 3 / 1 / 4 / span 4;
  }
`

const Blurb = () => (
  <div css={wrapper}>
    <p>
      <strong>
        My name is Daniel Lemay, and I am a JavaScript developer specializing in
        React.
        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      </strong>{' '}
      I focus on building responsive and accessible front-end applications using
      modern web technologies. I have experience leading teams and breaking down
      business requirements into development approaches. I also organize various
      community events focused on helping people to learn web development and
      emerging technologies such as GraphQL.
    </p>
  </div>
)

export default Blurb
