import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import themeUtils from '../../theme-utils'

interface MenuIconProps {
  isOpen: boolean
  toggleOpen: () => void
}

type LineProps = Pick<MenuIconProps, 'isOpen'>

const iconContainer = css`
  position: relative;
  right: 25px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${themeUtils.baseColor};
  border: none;
`

const icon = css`
  position: relative;
  height: 20px;
  width: 30px;
  cursor: pointer;
  z-index: 10;
`

const MenuLine = css`
  background-color: ${themeUtils.lightAccent};
  height: 3px;
  width: 100%;
  border-radius: 2px;
  position: absolute;
  left: 0;
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const Line1 = styled('span')<LineProps>`
  ${MenuLine};
  top: 0;
  transform: ${({ isOpen }): string =>
    isOpen ? 'translateY(10px) translateY(-50%) rotate(-135deg)' : ''};
`

const Line2 = styled('span')<LineProps>`
  ${MenuLine};
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: ${({ isOpen }): string => (isOpen ? '0' : '')};
`

const Line3 = styled('span')<LineProps>`
  ${MenuLine};
  bottom: 0;
  transform: ${({ isOpen }): string =>
    isOpen ? 'translateY(-10px) translateY(50%) rotate(135deg)' : ''};
`

const MenuIcon = ({ isOpen, toggleOpen }: MenuIconProps): JSX.Element => (
  <button
    aria-label='menu'
    aria-expanded={isOpen}
    css={iconContainer}
    onClick={():void => toggleOpen()}
    type='button'
  >
    <div css={icon}>
      <Line1 isOpen={isOpen} />
      <Line2 isOpen={isOpen} />
      <Line3 isOpen={isOpen} />
    </div>
  </button>
)

export default MenuIcon
