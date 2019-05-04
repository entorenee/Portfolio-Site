// @flow
import React, { useState } from 'react'
import { css } from '@emotion/core'

import MenuIcon from './menu-icon'
import Navigation from '../navigation'

const iconContainer = css`
  position: relative;
  height: 65px;
`

type Props = {
  home: boolean,
}

const MobileNavigation = ({ home }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div css={iconContainer}>
      <MenuIcon isOpen={isOpen} toggleOpen={toggleOpen} />
      <Navigation mobile isOpen={isOpen} home={home} />
    </div>
  )
}

export default MobileNavigation
