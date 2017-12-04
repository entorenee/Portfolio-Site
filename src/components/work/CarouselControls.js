import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {
  FaAngleLeft,
  FaAngleRight,
  FaPauseCircleO,
  FaPlayCircleO
} from 'react-icons/lib/fa';

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
      {props.isPlaying ? (
        <FaPauseCircleO size={60} onClick={() => props.updateIsPlaying()} />
      ) : (
        <FaPlayCircleO size={60} onClick={() => props.updateIsPlaying()} />
      )}
      <FaAngleRight size={75} onClick={() => props.updateProject('next')} />
    </ControlsFlex>
  </ControlsContainer>
);

CarouselControls.propTypes = {
  updateProject: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  updateIsPlaying: PropTypes.func.isRequired
};

export default CarouselControls;
