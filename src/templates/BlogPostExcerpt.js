// @flow
import * as React from 'react';
import { css } from 'emotion';
import { Link } from 'gatsby';
import { FaChevronRight } from 'react-icons/lib/fa';

import type { Post as Props } from './BlogIndex';
import themeUtils from '../components/theme-utils';
import { longDateFormat, postSlug } from '../utils/helpers';

const postHeaderTitle = css`
  margin-bottom: 0.7rem;
  text-align: center;
`;

const postHeaderDate = css`
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  font-weight: bold;
`;

const postImage = css`
  float: left;
  margin-right: 0.6rem;

  @media (min-width: 700px) {
    max-width: 300px;
  }

  @media (min-width: 1000px) {
    max-width: 400px;
  }
`;

const readMore = css`
  margin-right: 0.4rem;
`;

const divider = css`
  margin: 0.7rem 0 1.5rem 0;
  height: 3px;
  background-color: ${themeUtils.complementaryDark};
`;

const BlogPostExcerpt = ({ node }: Props) => {
  const { title, postDate } = node;
  const { excerpt } = node.body.childMarkdownRemark;
  const headlineImage = !node.headlineImage ? null : node.headlineImage.file.url;
  const headlineAltText = !node.headlineImage ? null : node.headlineImage.description;
  const slug = postSlug(postDate, title);

  return (
    <div>
      <h1 className={postHeaderTitle}>{title}</h1>
      <div className={postHeaderDate}>{longDateFormat(postDate)}</div>
      {headlineImage && <img className={postImage} src={headlineImage} alt={headlineAltText} />}
      <div
        dangerouslySetInnerHTML={{ __html: excerpt }} // eslint-disable-line react/no-danger
      />
      <Link to={`/${slug}`}>
        <span className={readMore}>Read More</span>
        <FaChevronRight size={15} />
      </Link>
      <hr className={divider} />
    </div>
  );
};

export default BlogPostExcerpt;
