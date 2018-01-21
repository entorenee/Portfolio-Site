import React from 'react';
import PropTypes from 'prop-types';
import { ScrollLink } from 'react-scroll';

const Link = props => (
  <a href={props.href} {...props}>
    {props.children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ScrollLink(Link);
