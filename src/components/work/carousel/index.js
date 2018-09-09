// @flow
import React from 'react';
import { css } from 'emotion';

import Button from '../../base-components/button';
import CarouselControls from './carousel-controls';
import projectSpotlight from './project-spotlight';
import Slideshow from '../../slideshow';
import themeUtils from '../../theme-utils';

const carouselContainer = css`
  ${themeUtils.margins};
  position: relative;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem 0.25rem;
  box-shadow: 3px 3px 5px ${themeUtils.mediumAccent};
`;

const focusImage = css`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`;

const description = css`
  padding: 0.5rem;
`;

const title = css`
  text-align: center;
  margin-bottom: 0.6rem;
`;

const projectLinks = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 700px) {
    justify-content: center;

    a {
      margin-bottom: 0.75rem;
    }
  }
`;

export type Project = {
  title: string,
  image: string,
  projectLink: string,
  githubLink: string,
  description: string,
};

const Carousel = () => (
  <Slideshow slides={projectSpotlight}>
    {({ currIndex, isPlaying, slideData: project, updateIsPlaying, updateProject }) => (
      <div className={carouselContainer}>
        <CarouselControls
          updateProject={updateProject}
          isPlaying={isPlaying}
          updateIsPlaying={updateIsPlaying}
          currIndex={currIndex}
          projects={projectSpotlight}
        />
        <div>
          <h1 className={title}>{project.title}</h1>
          <img className={focusImage} src={project.image} alt={project.title} />
          <div className={description}>
            <div
              dangerouslySetInnerHTML={{ __html: project.description }} // eslint-disable-line react/no-danger, max-len
            />
            <div className={projectLinks}>
              <Button url={project.projectLink}>Link to Live Project</Button>
              <Button url={project.githubLink}>Link to GitHub Repository</Button>
            </div>
          </div>
        </div>
      </div>
    )}
  </Slideshow>
);

export default Carousel;
