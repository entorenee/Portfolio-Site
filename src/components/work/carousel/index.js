// @flow
import React from 'react';
import { css } from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import type { Project } from './types';

import Button from '../../base-components/button';
import CarouselControls from './carousel-controls';
import useSlideshow from '../../hooks/use-slideshow';
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
  max-width: 800px;
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
}: Props) => {
  const { currIndex, isPlaying, setIsPlaying, updateSlide } = useSlideshow(slides);
  const project = slides[currIndex];

  return (
    <div css={carouselContainer}>
      <CarouselControls
        updateProject={updateSlide}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currIndex={currIndex}
        projects={slides}
      />
      <div>
        <h1 css={title}>{project.title}</h1>
        <Image
          css={focusImage}
          fluid={project.projectImage.fluid}
          alt={project.projectImage.title}
        />
        <div css={description}>
          <p>{project.description.description}</p>
          <div css={projectLinks}>
            {project.links.map(link => (
              <Button key={link.url} url={link.url}>
                {link.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
            fluid {
              ...GatsbyContentfulFluid
            }
            title
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
const Carousel = () => <StaticQuery query={query} render={data => <PureCarousel data={data} />} />;

export default Carousel;
