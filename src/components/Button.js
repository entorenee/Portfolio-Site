import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { css } from 'emotion';

const ButtonStyles = props => css`
  display: block;
  background-color: ${props.theme.complementaryLight};
  color: ${props.theme.baseColor};
  padding: 0.2rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
`;

const AnchorTag = styled.a`
  ${ButtonStyles};
`;

const LinkTag = styled(Link)`
  ${ButtonStyles};
`;

const BasicButton = styled.button`
  ${ButtonStyles};
`;

const Button = props => {
  if (props.href) {
    return (
      <AnchorTag href={props.href} target="_blank">
        {props.children}
      </AnchorTag>
    );
  }

  if (props.to) {
    return <LinkTag to={props.to}>{props.children}</LinkTag>;
  }

  return <BasicButton type={props.type}>{props.children}</BasicButton>;
};

Button.defaultProps = {
  type: 'button'
};

Button.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit'])
};

export default Button;
