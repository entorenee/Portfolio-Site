// @flow
import React from 'react';
import { css } from '@emotion/core';
import { FaCode } from 'react-icons/fa';
import themeUtils from '../theme-utils';
import Card from '../base-components/card';

const IconStyles = css`
  margin: 0 auto;
  margin-bottom: 0.5rem;
  display: block;
`;

const gridStyles = css`
  grid-area: 4 / 1 / 5 / -1;

  @media (min-width: 700px) {
    grid-area: 2 / 4 / 3 / -1;
  }

  @media (min-width: 1000px) {
    grid-area: 1 /5 / -1 / -1;
  }
`;

const cardStyles = css`
  max-width: 400px;
`;

const headerContainer = css`
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg,
  h1 {
    margin: 0;
  }
`;

const divider = css`
  height: 0.2rem;
  margin-bottom: 0.7rem;
  background-color: ${themeUtils.complementaryLight};
`;

const skillsList = css`
  padding: 0 2rem;

  li {
    margin-bottom: 0.4rem;
    line-height: 1.3;
  }
`;

const Skills = () => (
  <div css={gridStyles}>
    <Card css={cardStyles}>
      <div css={headerContainer}>
        <FaCode size={80} color={themeUtils.baseColor} css={IconStyles} />
        <h1>Skills</h1>
      </div>
      <hr css={divider} />
      <ul css={skillsList}>
        <li>Cutting edge web technologies including React, GraphQL, and CSS Grid</li>
        <li>Responsive Web Design</li>
        <li>Backend experience with APIs, Node, Express, and MongoDB</li>
        <li>Experience working in large and diverse teams</li>
        <li>Clear Communication and direction to reach end goals</li>
      </ul>
    </Card>
  </div>
);

export default Skills;
