import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { css } from 'emotion';
import { FaAngleLeft, FaAngleRight, FaPlayCircleO, FaPauseCircleO } from 'react-icons/lib/fa';
import { keyboardHandler } from '../../utils/helpers';

const ControlsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0.4rem 0.3rem 0.4rem;

  svg,
  span {
    cursor: pointer;
  }

  svg {
    color: ${props => props.theme.complementaryDark};
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  width: 13rem;
  justify-content: space-between;
  align-items: center;
`;

const SelectorBox = styled.span`
  width: 1.5rem;
  height: 0.8rem;
  border: 1px solid ${props => props.theme.complementaryDark};
  transition: 500ms background-color;
`;

const selected = css`
  background-color: #9a8956;
`;

const CarouselControls = props => (
  <ControlsFlex>
    {props.isPlaying ? (
      <FaPauseCircleO
        size={30}
        onClick={() => props.updateIsPlaying()}
        onKeyPress={e => {
          if (keyboardHandler(e)) props.updateIsPlaying();
        }}
        role="button"
        tabIndex={0}
      />
    ) : (
      <FaPlayCircleO
        size={30}
        onClick={() => props.updateIsPlaying()}
        onKeyPress={e => {
          if (keyboardHandler(e)) props.updateIsPlaying();
        }}
        role="button"
        tabIndex={0}
      />
    )}
    <ControlsContainer>
      <FaAngleLeft
        size={25}
        onClick={() => props.updateProject('previous', true)}
        onKeyPress={e => {
          if (keyboardHandler(e)) props.updateProject('previous', true);
        }}
        role="button"
        tabIndex={0}
      />
      {props.projects.map((project, i) => (
        <SelectorBox
          className={props.currIndex === i ? selected : ''}
          onClick={() => props.updateProject(i, true)}
          onKeyPress={e => {
            if (keyboardHandler(e)) props.updateProject(i, true);
          }}
          role="button"
          tabIndex={0}
          key={project.title}
        />
      ))}
      <FaAngleRight
        size={25}
        onClick={() => props.updateProject('next', true)}
        onKeyPress={e => {
          if (keyboardHandler(e)) props.updateProject('next', true);
        }}
        role="button"
        tabIndex={0}
      />
    </ControlsContainer>
  </ControlsFlex>
);

CarouselControls.propTypes = {
  updateProject: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  updateIsPlaying: PropTypes.func.isRequired,
  currIndex: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CarouselControls;
