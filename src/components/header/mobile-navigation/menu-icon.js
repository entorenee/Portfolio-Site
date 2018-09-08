// @flow
import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import themeUtils from '../../theme-utils';

const iconContainer = css`
  position: relative;
  right: 25px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const icon = css`
  position: relative;
  height: 20px;
  width: 30px;
  cursor: pointer;
  z-index: 10;
`;

const MenuLine = css`
  background-color: ${themeUtils.lightAccent};
  height: 3px;
  width: 100%;
  border-radius: 2px;
  position: absolute;
  left: 0;
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const Line1 = styled('span')`
  ${MenuLine};
  top: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(10px) translateY(-50%) rotate(-135deg)' : '')};
`;

const Line2 = styled('span')`
  ${MenuLine};
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: ${({ isOpen }) => (isOpen ? '0' : '')};
`;

const Line3 = styled('span')`
  ${MenuLine};
  bottom: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(-10px) translateY(50%) rotate(135deg)' : '')};
`;

type Props = {
  isOpen: boolean,
  toggleOpen: () => void,
};

const MenuIcon = ({ isOpen, toggleOpen }: Props) => (
  <div className={iconContainer} onClick={() => toggleOpen()}>
    <div className={icon}>
      <Line1 isOpen={isOpen} />
      <Line2 isOpen={isOpen} />
      <Line3 isOpen={isOpen} />
    </div>
  </div>
);

export default MenuIcon;
