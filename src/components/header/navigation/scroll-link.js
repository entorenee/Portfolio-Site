import React from 'react';
import PropTypes from 'prop-types';
import { ScrollLink as scrollLink } from 'react-scroll';

const Link = props => {
  const { children, href, ...rest } = props;
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default scrollLink(Link);
