import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { FaAngleLeft, FaAngleRight, FaPauseCircleO } from 'react-icons/lib/fa';

const ControlsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(204, 204, 204, 0);
  z-index: 3;
  transition: background-color 800ms

  svg {
    opacity: 0;
    transition: opacity 800ms;
    color: ${props => props.theme.baseColor}
    cursor: pointer;
    z-index: 4;
  }

  &:hover {
    background-color: rgba(204, 204, 204, 0.5);

    svg {
      opacity: 1;
    }
  }
`;

const ControlsFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarouselControls = props => (
  <ControlsContainer>
    <ControlsFlex>
      <FaAngleLeft size={75} onClick={() => props.updateProject('previous')} />
      <FaPauseCircleO size={60} />
      <FaAngleRight size={75} onClick={() => props.updateProject('next')} />
    </ControlsFlex>
  </ControlsContainer>
);

CarouselControls.PropTypes = {
  updateProject: PropTypes.func
};

export default CarouselControls;
