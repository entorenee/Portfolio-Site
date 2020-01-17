// @flow
import React from 'react'
import { css } from '@emotion/core'
import { FaCopyright } from 'react-icons/fa'

import themeUtils from '../theme-utils'

const wrapper = css`
  padding: 0.4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${themeUtils.baseColor};
  color: ${themeUtils.lightAccent};
`

const getCurrentYear = () => {
  const today = new Date(Date.now())
  return today.getFullYear()
}

const Footer = () => (
  <footer css={wrapper}>
    <FaCopyright
      aria-label='copyright'
      css={{ marginRight: '0.5rem' }}
      size={18}
    />{' '}
    {getCurrentYear()} Daniel Lemay. All Rights Reserved.
  </footer>
)

export default Footer
