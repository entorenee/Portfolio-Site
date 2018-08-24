// @flow
import React from 'react';
import { css } from 'emotion';
import { FaCopyright } from 'react-icons/lib/fa';

import themeUtils from '../themeUtils';

const wrapper = css`
  padding: 0.4rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${themeUtils.baseColor};
  color: ${themeUtils.lightAccent};
`;

const getCurrentYear = () => {
  const today = new Date(Date.now());
  return today.getFullYear();
};

const Footer = () => (
  <footer className={wrapper}>
    <div>
      <FaCopyright size={18} /> {getCurrentYear()} Daniel Lemay. All Rights Reserved.
    </div>
    <a href="https://www.contentful.com/" rel="nofollow noopener noreferrer" target="_blank">
      <img
        src="https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg"
        style={{ maxWidth: '100px', width: '100px', marginBottom: 0 }}
        alt="Powered by Contentful"
      />
    </a>
  </footer>
);

export default Footer;
