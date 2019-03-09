// @flow
import type { Node } from 'react';

export type LinkType = {
  text: string | Node,
  url: string,
};

export type FluidImage = {
  aspectRatio: number,
  base64: string,
  sizes: string,
  src: string,
  srcSet: string,
};
