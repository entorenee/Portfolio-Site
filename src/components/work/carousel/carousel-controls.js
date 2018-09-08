// @flow
import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { FaAngleLeft, FaAngleRight, FaPlayCircle, FaPauseCircle } from 'react-icons/lib/fa';

import type { Project } from '.';
import themeUtils from '../../theme-utils';
import { keyboardHandler } from '../../../utils/helpers';

const wrapper = css`
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

const controlsContainer = css`
  display: flex;
  width: 13rem;
  justify-content: space-between;
  align-items: center;
`;

const SelectorBox = styled('span')`
  width: 1.5rem;
  height: 0.8rem;
  background-color: ${({ selected }) => (selected ? '#9a8956' : '')};
  border: 1px solid ${themeUtils.complementaryDark};
  transition: 500ms background-color;
`;

type Props = {
  currIndex: number,
  isPlaying: boolean,
  projects: Array<Project>,
  updateIsPlaying: () => void,
  updateProject: (direction: 'previous' | 'next' | number, reset: boolean) => void,
};

const CarouselControls = ({
  currIndex,
  isPlaying,
  projects,
  updateIsPlaying,
  updateProject,
}: Props) => (
  <div className={wrapper}>
    {isPlaying ? (
      <FaPauseCircle
        aria-label="pause"
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
        aria-label="play"
        size={30}
        onClick={() => updateIsPlaying()}
        onKeyPress={e => {
          if (keyboardHandler(e)) updateIsPlaying();
        }}
        role="button"
        tabIndex={0}
      />
    )}
    <div className={controlsContainer}>
      <FaAngleLeft
        aria-label="previous"
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
          onClick={() => updateProject(i, true)}
          onKeyPress={e => {
            if (keyboardHandler(e)) updateProject(i, true);
          }}
          role="button"
          selected={currIndex === i}
          tabIndex={0}
          key={project.title}
        />
      ))}
      <FaAngleRight
        aria-label="next"
        size={25}
        onClick={() => updateProject('next', true)}
        onKeyPress={e => {
          if (keyboardHandler(e)) updateProject('next', true);
        }}
        role="button"
        tabIndex={0}
      />
    </div>
  </div>
);

export default CarouselControls;
