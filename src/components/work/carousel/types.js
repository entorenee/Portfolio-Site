// @flow
import type { FluidImage } from '../../types';

export type Project = {
  title: string,
  description: {
    description: string,
  },
  projectImage: {
    fluid: FluidImage,
    title: string,
  },
  links: Array<{ text: string, url: string }>,
};
