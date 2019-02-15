// @flow
import * as React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const deadLink = css`
  color: #666;
  user-select: none;
`;

type Props = {
  test: boolean,
  text: string,
  url: string,
};

const BlogNavLink = ({ test, text, url }: Props) => {
  if (!test) {
    return <Link to={url}>{text}</Link>;
  }
  return <span css={deadLink}>{text}</span>;
};

export default BlogNavLink;
