import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { css } from 'emotion';
import { FaAngleLeft, FaAngleRight, FaPlayCircle, FaPauseCircle } from 'react-icons/lib/fa';
import themeUtils from '../themeUtils';
import { keyboardHandler } from '../../utils/helpers';

const ControlsFlex = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: 0 0.4rem 0.3rem 0.4rem;

  svg,
  span {
    cursor: pointer;
  }

  svg {
    color: ${themeUtils.complementaryDark};
  }
`;

const ControlsContainer = styled('div')`
  display: flex;
  width: 13rem;
  justify-content: space-between;
  align-items: center;
`;

const SelectorBox = styled('span')`
  width: 1.5rem;
  height: 0.8rem;
  border: 1px solid ${themeUtils.complementaryDark};
  transition: 500ms background-color;
`;

const selected = css`
  background-color: #9a8956;
`;

const CarouselControls = ({ currIndex, isPlaying, projects, updateIsPlaying, updateProject }) => (
  <ControlsFlex>
    {isPlaying ? (
      <FaPauseCircle
        size={30}
        onClick={() => updateIsPlaying()}
        onKeyPress={e => {
          if (keyboardHandler(e)) updateIsPlaying();
        }}
        role="button"
        tabIndex={0}
      />
    ) : (
      <FaPlayCircle
        size={30}
        onClick={() => updateIsPlaying()}
        onKeyPress={e => {
          if (keyboardHandler(e)) updateIsPlaying();
        }}
        role="button"
        tabIndex={0}
      />
    )}
    <ControlsContainer>
      <FaAngleLeft
        size={25}
        onClick={() => updateProject('previous', true)}
        onKeyPress={e => {
          if (keyboardHandler(e)) updateProject('previous', true);
        }}
        role="button"
        tabIndex={0}
      />
      {projects.map((project, i) => (
        <SelectorBox
          className={currIndex === i ? selected : ''}
          onClick={() => updateProject(i, true)}
          onKeyPress={e => {
            if (keyboardHandler(e)) updateProject(i, true);
          }}
          role="button"
          tabIndex={0}
          key={project.title}
        />
      ))}
      <FaAngleRight
        size={25}
        onClick={() => updateProject('next', true)}
        onKeyPress={e => {
          if (keyboardHandler(e)) updateProject('next', true);
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
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarouselControls;
