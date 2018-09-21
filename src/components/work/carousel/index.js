// @flow
import React from 'react';
import { css } from 'emotion';
import { StaticQuery, graphql } from 'gatsby';

import Button from '../../base-components/button';
import CarouselControls from './carousel-controls';
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
  description: {
    description: string,
  },
  projectImage: {
    file: {
      url: string,
    },
    description: string,
  },
  links: Array<{ text: string, url: string }>,
};

type Props = {
  data: {
    contentfulSlideshow: {
      slides: Array<Project>,
    },
  },
};

export const PureCarousel = ({
  data: {
    contentfulSlideshow: { slides },
  },
}: Props) => (
  <Slideshow slides={slides}>
    {({ currIndex, isPlaying, slideData: project, updateIsPlaying, updateProject }) => (
      <div className={carouselContainer}>
        <CarouselControls
          updateProject={updateProject}
          isPlaying={isPlaying}
          updateIsPlaying={updateIsPlaying}
          currIndex={currIndex}
          projects={slides}
        />
        <div>
          <h1 className={title}>{project.title}</h1>
          <img
            className={focusImage}
            src={project.projectImage.file.url}
            alt={project.projectImage.description}
          />
          <div className={description}>
            <p>{project.description.description}</p>
            <div className={projectLinks}>
              {project.links.map(link => (
                <Button key={link.url} url={link.url}>
                  {link.text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </Slideshow>
);

const query = graphql`
  {
    contentfulSlideshow(group: { eq: "work" }) {
      slides {
        ... on ContentfulWorkShowcase {
          title
          description {
            description
          }
          projectImage {
            file {
              url
            }
            description
          }
          links {
            text
            url
          }
        }
      }
    }
  }
`;

export default () => <StaticQuery query={query} render={data => <PureCarousel data={data} />} />;
