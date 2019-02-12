// @flow
import React from 'react';
import { css } from '@emotion/core';

const wrapper = css`
  grid-area: 2 / 1 / 3 / -1;

  @media (min-width: 700px) {
    grid-area: 2 / 1 / 3 / span 3;
  }

  @media (min-width: 1000px) {
    grid-area: 3 / 1 / 4 / span 4;
  }
`;

const Blurb = () => (
  <div css={wrapper}>
    <p>
      <strong>
        My name is Daniel Lemay, and I am a JavaScript developer specializing in React.
      </strong>{' '}
      I focus on building responsive and accessible front-end applications using modern web
      technologies that are a pleasure to use. I pay attention to the details and work well with
      numerous stakeholders to complete projects. Take a look at some of my projects below and to
      contact me about available opportunities.
    </p>
  </div>
);

export default Blurb;
