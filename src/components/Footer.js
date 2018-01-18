import React from 'react';
import styled from 'react-emotion';
import { FaCopyright } from 'react-icons/lib/fa';

const FooterWrapper = styled.div`
  padding: 0.4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${props => props.theme.baseColor};
  color: ${props => props.theme.lightAccent};
`;

const getCurrentYear = () => {
  const today = new Date(Date.now());
  return today.getFullYear();
};

const Footer = () => (
  <FooterWrapper>
    <FaCopyright size={18} /> {getCurrentYear()} Daniel Lemay. All Rights Reserved.
  </FooterWrapper>
);

export default Footer;
