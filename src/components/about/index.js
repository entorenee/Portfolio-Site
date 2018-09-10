// @flow
import React from 'react';
import { css } from 'emotion';
import { Element } from 'react-scroll';

import Hero from './hero';
import Skills from './skills';
import Blurb from './blurb';
import RandomQuote from './random-quote';
import themeUtils from '../theme-utils';
import headshot from '../../assets/img/headshot.jpg';

const wrapper = css`
  ${themeUtils.margins};
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template: repeat(3, auto) / repeat(6, 1fr);
  grid-gap: 20px;

  @media (max-width: 700px) {
    grid-gap: 10px;
  }
`;

const avatar = css`
  margin: 0 auto;
  border-radius: 50%;
  max-width: 150px;
  max-height: 150px;
  grid-area: 1 / 1 / 2 / 3;
  align-self: center;

  @media (min-width: 700px) {
    max-width: 175px;
    max-height: 175px;
  }

  @media (min-width: 1000px) {
    max-width: 250px;
    max-height: 250px;
  }
`;

const header = css`
  font-size: 3rem;
  justify-self: center;
  align-self: center;
  grid-area: 1 / 4 / 2 / span 3;
  color: ${themeUtils.baseColor};

  @media (min-width: 700px) {
    grid-column: 5 / span 2;
  }

  @media (min-width: 1000px) {
    grid-column: 3 / span 2;
    font-size: 4rem;
  }
`;

type Props = {
  inputRef: () => void,
};

const About = ({ inputRef }: Props) => (
  <section id="about" ref={inputRef}>
    <Hero />
    <Element name="about" />
    <div className={wrapper}>
      <img className={avatar} src={headshot} alt="Profile of Daniel Lemay" />
      <h1 className={header}>About</h1>
      <RandomQuote />
      <Skills />
      <Blurb />
    </div>
  </section>
);

export default About;
