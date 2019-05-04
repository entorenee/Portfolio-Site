// @flow
import React from 'react'
import { css } from '@emotion/core'
import { Element } from 'react-scroll'

import themeUtils from '../theme-utils'
import Carousel from './carousel'

const header = css`
  ${themeUtils.margins};
  margin-bottom: 1.6rem;
`

type Props = {
  inputRef: () => void,
}

const Work = ({ inputRef }: Props) => (
  <section id='work' ref={inputRef}>
    <Element name='work' />
    <h1 css={header}>Work</h1>
    <Carousel />
  </section>
)

export default Work
