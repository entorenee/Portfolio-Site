// @flow
import * as React from 'react';
import { css } from 'emotion';
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
  return <span className={deadLink}>{text}</span>;
};

export default BlogNavLink;
