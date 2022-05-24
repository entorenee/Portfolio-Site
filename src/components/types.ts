import { ReactNode } from 'react';

export interface LinkType {
  text: string | ReactNode,
  url: string,
}

export interface FluidImage {
  aspectRatio: number,
  base64: string,
  sizes: string,
  src: string,
  srcSet: string,
}

export interface HeadlineImage {
  description: string,
  // TODO: resolve types after shifting to TS
  gatsbyImage: any,
}
