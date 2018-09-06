// @flow
import * as React from 'react';
import { css } from 'emotion';
import { Element } from 'react-scroll';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/lib/fa';

import themeUtils from '../theme-utils';
import Card from '../base-components/card';
import Button from '../base-components/button';
import SocialIcon from './social-icon';

const contactSection = css`
  ${themeUtils.margins};
  margin-bottom: 1rem;

  form {
    margin: 0.2rem 0.4rem;
  }
`;

const formLabel = css`
  display: block;

  input,
  textarea {
    width: 100%;
    outline: none;
    display: block;
    margin-bottom: 0.5rem;
    padding: 0.2rem 1rem;
    box-sizing: border-box;
    border-radius: 5px;
    border: ${themeUtils.lightAccent} solid 2px;
    transition: border 800ms;

    &:focus {
      border: ${themeUtils.complementaryDark} solid 2px;
    }
  }

  textarea {
    resize: vertical;
  }

  span {
    font-style: italic;
  }
`;

const buttonContainer = css`
  padding-right: 1rem;
  padding-top: 0.3rem;
  display: flex;
  justify-content: flex-end;
`;

const cardStyles = css`
  max-width: 350px;
`;

const socialData = [
  {
    service: 'twitter',
    link: 'https://twitter.com/dslemay',
    component: <FaTwitter aria-label="Twitter" size={30} />,
  },
  {
    service: 'linkedin',
    link: 'https://www.linkedin.com/in/dslemay',
    component: <FaLinkedin aria-label="LinkedIn" size={30} />,
  },
  {
    service: 'github',
    link: 'https://github.com/dslemay',
    component: <FaGithub aria-label="Github" size={30} />,
  },
];

type ContactProps = {
  inputRef: () => void,
};

const Contact = ({ inputRef }: ContactProps) => (
  <section className={contactSection} id="contact">
    <div ref={inputRef}>
      <Element name="contact" />
      <h1>Contact</h1>
      <Card className={cardStyles}>
        <form action="https://formspree.io/daniel@dslemay.com" method="POST">
          <label className={formLabel} htmlFor="name">
            <span>Name:</span>
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label className={formLabel} htmlFor="email">
            <span>Email:</span>
            <input type="email" name="_replyto" placeholder="Your e-mail" />
          </label>
          <label className={formLabel} htmlFor="message">
            <span>Message:</span>
            <textarea rows="6" name="message" placeholder="Your message" />
          </label>
          <input type="hidden" name="_subject" value="New contact form submission" />
          <input type="hidden" name="_next" value="/thanks" />
          <div className={buttonContainer}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
      {socialData.map(social => (
        <SocialIcon key={social.service} link={social.link} component={social.component} />
      ))}
    </div>
  </section>
);

export default Contact;
