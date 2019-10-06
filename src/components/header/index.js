// @flow
import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Navigation from './navigation'
import MobileNavigation from './mobile-navigation'
import useMediaQuery from '../hooks/use-media-query'
import themeUtils from '../theme-utils'
import logo from '../../images/logo.png'

const wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  background-color: ${themeUtils.baseColor};
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 65px;
  top: 0;
  left: 0;
`

const logoStyles = css`
  margin: 0.5em 0.5em;
`

const Header = () => {
  const { isMobile } = useMediaQuery()

  return (
    <header css={wrapper}>
      <Link to='/'>
        <img css={logoStyles} src={logo} alt='Logo' />
      </Link>
      {isMobile ? <MobileNavigation /> : <Navigation />}
    </header>
  )
}

export default Header
