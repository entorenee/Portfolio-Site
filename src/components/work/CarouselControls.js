import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { css } from 'emotion';
import {
  FaAngleLeft,
  FaAngleRight,
  FaPlayCircleO,
  FaPauseCircleO
} from 'react-icons/lib/fa';

const ControlsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0.4rem 0.3rem 0.4rem;

  svg,
  span {
    cursor: pointer;
  }

  svg {
    color: ${props => props.theme.baseColor};
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-between;
  align-items: center;
`;

const SelectorBox = styled.span`
  width: 1.5rem;
  height: 0.8rem;
  border: 1px solid ${props => props.theme.baseColor};
  transition: 500ms background-color;
`;

const selected = css`
  background-color: #2d3b7f;
`;

const CarouselControls = props => (
  <ControlsFlex>
    {props.isPlaying ? (
      <FaPauseCircleO size={30} onClick={() => props.updateIsPlaying()} />
    ) : (
      <FaPlayCircleO size={30} onClick={() => props.updateIsPlaying()} />
    )}
    <ControlsContainer>
      <FaAngleLeft
        size={25}
        onClick={() => props.updateProject('previous', true)}
      />
      {props.projects.map((project, i) => (
        <SelectorBox
          className={props.currIndex === i ? selected : ''}
          onClick={() => props.updateProject(i, true)}
          key={i}
        />
      ))}
      <FaAngleRight
        size={25}
        onClick={() => props.updateProject('next', true)}
      />
    </ControlsContainer>
  </ControlsFlex>
);

CarouselControls.propTypes = {
  updateProject: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  updateIsPlaying: PropTypes.func.isRequired,
  currIndex: PropTypes.number.isRequired,
  projects: PropTypes.array.isRequired
};

export default CarouselControls;
