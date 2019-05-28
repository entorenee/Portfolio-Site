// @flow
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import {
  FaAngleLeft,
  FaAngleRight,
  FaPlayCircle,
  FaPauseCircle,
} from 'react-icons/fa'

import themeUtils from '../../theme-utils'
import type { Project } from './types'

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
`

const Button = styled('button')`
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
`

const controlsContainer = css`
  display: flex;
  width: 13rem;
  justify-content: space-between;
  align-items: center;
`

const SelectorBox = styled('span')`
  width: 1.5rem;
  height: 0.8rem;
  display: block;
  background-color: ${({ selected }) => (selected ? '#9a8956' : '')};
  border: 1px solid ${themeUtils.complementaryDark};
  transition: 500ms background-color;
`

type Props = {
  currIndex: number,
  isPlaying: boolean,
  projects: Array<Project>,
  setIsPlaying: boolean => void,
  updateProject: (direction: 'previous' | 'next' | number) => void,
}

const CarouselControls = ({
  currIndex,
  isPlaying,
  projects,
  setIsPlaying,
  updateProject,
}: Props) => (
  <div css={wrapper}>
    <Button
      type='button'
      aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? <FaPauseCircle size={30} /> : <FaPlayCircle size={30} />}
    </Button>
    <div css={controlsContainer}>
      <Button
        aria-label='go to previous project'
        onClick={() => updateProject('previous')}
      >
        <FaAngleLeft size={25} />
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
      <Button
        aria-label='go to next project'
        onClick={() => updateProject('next')}
      >
        <FaAngleRight size={25} />
      </Button>
    </div>
  </div>
)

export default CarouselControls
