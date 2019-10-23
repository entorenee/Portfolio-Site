// @flow
import React from 'react'
import { css } from '@emotion/core'

import themeUtils from '../theme-utils'
import Carousel from './carousel'

const header = css`
  ${themeUtils.margins};
  margin-bottom: 1.6rem;
`

const Work = () => (
  <section id='work'>
    <h1 css={header}>Work</h1>
    <Carousel />
  </section>
)

export default Work
