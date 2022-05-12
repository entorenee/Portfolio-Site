import React, { ReactNode } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import themeUtils from '../../theme-utils'

const buttonStyles = css`
  background-color: ${themeUtils.complementaryLight};
  color: ${themeUtils.baseColor};
  padding: 0.2rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${themeUtils.baseColor};
  }
`

interface ButtonProps {
  'aria-label'?: string
  children: ReactNode
  type?: 'button' | 'submit'
  url?: string
}

const Button = ({
  'aria-label': ariaLabel,
  children,
  type = 'button',
  url,
}: ButtonProps): JSX.Element => {
  if (!url)
    return (
      <button type={type} aria-label={ariaLabel} css={buttonStyles}>
        {children}
      </button>
    )

  return url.substring(0, 1) === '/' ? (
    <Link css={buttonStyles} to={url}>
      {children}
    </Link>
  ) : (
    <a css={buttonStyles} href={url} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export default Button
