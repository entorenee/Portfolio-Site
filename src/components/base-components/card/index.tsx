import React, { ReactNode } from 'react'
import { css } from '@emotion/core'

import themeUtils from '../../theme-utils'

const cardStyles = css`
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem 0.25rem;
  box-shadow: 3px 3px 5px ${themeUtils.mediumAccent};
`

interface CardProps {
  children: ReactNode
  className?: string
}

const Card = ({ children, className = '' }: CardProps): JSX.Element => (
  <div className={className} css={cardStyles}>
    {children}
  </div>
)

export default Card
