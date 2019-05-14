// @flow
import * as React from 'react'
import { css } from '@emotion/core'

import themeUtils from '../theme-utils'

type IconProps = {
  children: React.Node,
  link: string,
}

const socialLink = css`
  color: ${themeUtils.mediumAccent};
  margin-right: 0.5rem;
  transition: color 800ms;

  &:hover {
    color: ${themeUtils.complementaryDark};
  }
`

const SocialIcon = ({ children, link }: IconProps) => (
  <a css={socialLink} href={link}>
    {children}
  </a>
)

export default SocialIcon
