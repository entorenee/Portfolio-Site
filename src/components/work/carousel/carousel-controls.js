// @flow
import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { FaAngleLeft, FaAngleRight, FaPlayCircle, FaPauseCircle } from 'react-icons/lib/fa';

import type { Project } from '.';
import themeUtils from '../../theme-utils';

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

const Button = styled('button')`
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
`;

const controlsContainer = css`
  display: flex;
  width: 13rem;
  justify-content: space-between;
  align-items: center;
`;

const SelectorBox = styled('div')`
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
    <Button type="button" onClick={() => updateIsPlaying()}>
      {isPlaying ? (
        <FaPauseCircle aria-label="pause" size={30} />
      ) : (
        <FaPlayCircle aria-label="play" size={30} />
      )}
    </Button>
    <div className={controlsContainer}>
      <Button onClick={() => updateProject('previous', true)}>
        <FaAngleLeft aria-label="previous" size={25} />
      </Button>
      {projects.map((project, i) => (
        <Button key={project.title} onClick={() => updateProject(i, true)}>
          <SelectorBox selected={currIndex === i} />
        </Button>
      ))}
      <Button onClick={() => updateProject('next', true)}>
        <FaAngleRight aria-label="next" size={25} />
      </Button>
    </div>
  </div>
);

export default CarouselControls;
