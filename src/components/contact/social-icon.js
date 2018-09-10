// @flow
import * as React from 'react';
import { css } from 'emotion';

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
  <a className={socialLink} href={link}>
    {component}
  </a>
);

export default SocialIcon;
