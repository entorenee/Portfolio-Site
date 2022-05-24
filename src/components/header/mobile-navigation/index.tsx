import React, { useState } from 'react'
import { css } from '@emotion/core'

import MenuIcon from './menu-icon'
import Navigation from '../navigation'

const iconContainer = css`
  position: relative;
  height: 65px;
`

const MobileNavigation = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = (): void => setIsOpen(!isOpen)

  return (
    <div css={iconContainer}>
      <MenuIcon isOpen={isOpen} toggleOpen={toggleOpen} />
      <Navigation mobile isOpen={isOpen} />
    </div>
  )
}

export default MobileNavigation
