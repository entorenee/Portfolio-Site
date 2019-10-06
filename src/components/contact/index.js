// @flow
import * as React from 'react'
import { css } from '@emotion/core'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

import themeUtils, { h1, hideElement } from '../theme-utils'
import Card from '../base-components/card'
import Button from '../base-components/button'
import SocialIcon from './social-icon'

const contactSection = css`
  ${themeUtils.margins};
  margin-bottom: 1rem;

  form {
    margin: 0.2rem 0.4rem;
  }
`

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
`

const buttonContainer = css`
  padding-right: 1rem;
  padding-top: 0.3rem;
  display: flex;
  justify-content: flex-end;
`

const cardStyles = css`
  max-width: 350px;
`

const socialData = [
  {
    service: 'twitter',
    link: 'https://twitter.com/dslemay',
    component: (
      <>
        <FaTwitter size={30} />
        <span css={hideElement}>Twitter</span>
      </>
    ),
  },
  {
    service: 'linkedin',
    link: 'https://www.linkedin.com/in/dslemay',
    component: (
      <>
        <FaLinkedin size={30} />
        <span css={hideElement}>LinkedIn</span>
      </>
    ),
  },
  {
    'aria-label': 'GitHub',
    service: 'github',
    link: 'https://github.com/dslemay',
    component: (
      <>
        <FaGithub size={30} />
        <span css={hideElement}>GitHub</span>
      </>
    ),
  },
]

const Contact = () => (
  <section css={contactSection} id='contact'>
    <div>
      <h2 css={h1}>Contact</h2>
      <Card css={cardStyles}>
        <form action='https://formspree.io/daniel@dslemay.com' method='POST'>
          <label css={formLabel} htmlFor='name'>
            <span>Name:</span>
            <input type='text' name='name' placeholder='Your name' />
          </label>
          <label css={formLabel} htmlFor='email'>
            <span>Email:</span>
            <input type='email' name='_replyto' placeholder='Your e-mail' />
          </label>
          <label css={formLabel} htmlFor='message'>
            <span>Message:</span>
            <textarea rows='6' name='message' placeholder='Your message' />
          </label>
          <input
            type='hidden'
            name='_subject'
            value='New contact form submission'
          />
          <input type='hidden' name='_next' value='/thanks' />
          <div css={buttonContainer}>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </Card>
      {socialData.map(social => (
        <SocialIcon key={social.service} link={social.link}>
          {social.component}
        </SocialIcon>
      ))}
    </div>
  </section>
)

export default Contact
