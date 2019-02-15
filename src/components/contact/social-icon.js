// @flow
import * as React from 'react';
import { css } from '@emotion/core';

import themeUtils from '../theme-utils';

type IconProps = {
  link: string,
  component: React.Node,
};

const socialLink = css`
  color: ${themeUtils.mediumAccent};
  margin-right: 0.5rem;
  transition: color 800ms;

  &:hover {
    color: ${themeUtils.complementaryDark};
  }
`;

const SocialIcon = ({ component, link }: IconProps) => (
  <a css={socialLink} href={link}>
    {component}
  </a>
);

export default SocialIcon;
