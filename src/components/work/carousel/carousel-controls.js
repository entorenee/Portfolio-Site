// @flow
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { FaAngleLeft, FaAngleRight, FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

import type { Project } from '.';
import themeUtils from '../../theme-utils';

const wrapper = css`
  display: flex;
  justify-content: space-between;
  margin: 0 0.4rem 0.3rem 0.4rem;

  svg,
  div {
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
  setIsPlaying: boolean => void,
  updateProject: (direction: 'previous' | 'next' | number) => void,
};

const CarouselControls = ({
  currIndex,
  isPlaying,
  projects,
  setIsPlaying,
  updateProject,
}: Props) => (
  <div css={wrapper}>
    <Button type="button" onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying ? (
        <FaPauseCircle aria-label="pause slideshow" size={30} />
      ) : (
        <FaPlayCircle aria-label="play slideshow" size={30} />
      )}
    </Button>
    <div css={controlsContainer}>
      <Button onClick={() => updateProject('previous')}>
        <FaAngleLeft aria-label="go to previous project" size={25} />
      </Button>
      {projects.map((project, i) => (
        <Button
          key={project.title}
          aria-label={`View Project Summary: ${project.title}`}
          data-testid={`project${i}`}
          onClick={() => updateProject(i)}
        >
          <SelectorBox selected={currIndex === i} />
        </Button>
      ))}
      <Button onClick={() => updateProject('next')}>
        <FaAngleRight aria-label="go to next project" size={25} />
      </Button>
    </div>
  </div>
);

export default CarouselControls;
