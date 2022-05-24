import React, { ReactNode } from 'react'
import { css } from '@emotion/core'

import themeUtils from '../../theme-utils'
import Card from '../card'

const container = css`
  position: relative;
  padding: 1rem 1rem 0rem 2rem;

  &::before {
    content: '\\201C';
    font-family: Georgia;
    font-style: bold;
    font-size: 4rem;
    color: ${themeUtils.complementaryDark};
    position: absolute;
    top: -1.4rem;
    left: 0.1rem;
  }

  &::after {
    content: '\\201D';
    font-family: Georgia;
    font-style: bold;
    font-size: 4rem;
    color: ${themeUtils.complementaryDark};
    position: absolute;
    bottom: -3.6rem;
    right: 0.1rem;
  }
`

interface QuoteCardProps {
  children: ReactNode
}

const QuoteCard = ({ children }: QuoteCardProps): JSX.Element => (
  <Card>
    <div css={container}>{children}</div>
  </Card>
)

export default QuoteCard
