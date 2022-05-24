import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import themeUtils from '../theme-utils'

export const desktopLinks = css`
  margin-right: 1.5em;
  text-decoration: none;
  display: inline;
`

export const mobileLinks = css`
  margin-right: 0;
  text-decoration: none;
  display: block;
`

const wrapper = css`
  margin-bottom: 0;
  margin-right: 0;
  background-color: ${themeUtils.baseColor};

  a {
    color: ${themeUtils.lightAccent};
    cursor: pointer;
    transition: color 500ms;

    &:visited {
      color: ${themeUtils.lightAccent};
    }

    &:hover {
      color: ${themeUtils.complementaryDark};
    }
  }
`

const mobileLinksBase = css`
  position: absolute;
  right: 0px;
  padding: 0 1em;
  padding-top: 0.5em;
  transition: all 800ms;
  z-index: 9;

  a {
    margin-bottom: 0.75em;
  }
`

const mobileLinksOpen = css`
  ${mobileLinksBase};
  top: 63px;
  opacity: 1;
`

const mobileLinksClosed = css`
  ${mobileLinksBase};
  top: -100px;
  opacity: 0;
`

interface NavigationProps {
  isOpen?: boolean
  mobile?: boolean
}

const Navigation = ({
  isOpen = false,
  mobile = false,
}: NavigationProps): JSX.Element => {
  const linkStyles = mobile ? mobileLinks : desktopLinks

  return (
    <nav
      css={[wrapper, mobile && (isOpen ? mobileLinksOpen : mobileLinksClosed)]}
    >
      <Link to='/graphql' css={linkStyles}>
        GraphQL
      </Link>
      <Link to='/blog' css={linkStyles}>
        Blog
      </Link>
    </nav>
  )
}

export default Navigation
