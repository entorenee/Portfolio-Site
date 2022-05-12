import React, { ReactNode } from 'react'
import { css } from '@emotion/core'

import themeUtils from '../theme-utils'

interface IconProps {
  children: ReactNode
  link: string
}

const socialLink = css`
  color: ${themeUtils.mediumAccent};
  margin-right: 0.5rem;
  transition: color 800ms;

  &:hover {
    color: ${themeUtils.complementaryDark};
  }
`

const SocialIcon = ({ children, link }: IconProps): JSX.Element => (
  <a css={socialLink} href={link}>
    {children}
  </a>
)

export default SocialIcon
