import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { css } from 'emotion';
import Link from 'gatsby-link';
import { FaChevronRight } from 'react-icons/fa';
import themeUtils from '../components/themeUtils';
import { postSlug } from '../utils/helpers';

// Converts YYYY-MM-DD to Month Day, Year
const longDateFormat = date => {
  const dateArr = date.split('/');
  let monthNum = dateArr[1];
  monthNum = `0${monthNum - 1}`.slice(-1);
  let dayNum = dateArr[2];
  dayNum = parseInt(dayNum, 10);
  const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${monthArr[monthNum]} ${dayNum}, ${dateArr[0]}`;
};

const createPostExcerpt = post => {
  const regex = /<p>.+<\/p>/g;
  return post
    .match(regex)
    .slice(0, 2)
    .join('');
};

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

const PostImage = styled.img`
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

const PostDivider = styled.hr`
  margin: 0.7rem 0 1.5rem 0;
  height: 3px;
  background-color: ${themeUtils.complementaryDark};
`;

const BlogPostExcerpt = ({ node }) => {
  const { title, postDate } = node;
  const { html: body } = node.body.childMarkdownRemark;
  const headlineImage = !node.headlineImage ? null : node.headlineImage.file.url;
  const headlineAltText = headlineImage ? node.headlineImage.description : null;
  const slug = postSlug(postDate, title);
  const excerpt = createPostExcerpt(body);

  return (
    <div>
      <h1 className={postHeaderTitle}>{title}</h1>
      <div className={postHeaderDate}>{longDateFormat(postDate)}</div>
      {headlineImage && <PostImage src={headlineImage} alt={headlineAltText} />}
      <div
        dangerouslySetInnerHTML={{ __html: excerpt }} // eslint-disable-line react/no-danger
      />
      <Link to={`/${slug}`}>
        <span className={readMore}>Read More</span>
        <FaChevronRight size={15} />
      </Link>
      <PostDivider />
    </div>
  );
};

BlogPostExcerpt.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    headlineImage: PropTypes.shape({
      description: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default BlogPostExcerpt;
