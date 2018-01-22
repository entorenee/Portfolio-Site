import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Element } from 'react-scroll';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/lib/fa';
import Card from './Card';
import Button from './Button';

const ContactSection = styled.section`
  ${props => props.theme.margins};
  margin-bottom: 1rem;

  form {
    margin: 0.2rem 0.4rem;
  }
`;

const FormLabel = styled.label`
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
    border: ${props => props.theme.lightAccent} solid 2px;
    transition: border 800ms;

    &:focus {
      border: ${props => props.theme.complementaryDark} solid 2px;
    }
  }

  textarea {
    resize: vertical;
  }

  span {
    font-style: italic;
  }
`;

const ButtonContainer = styled.div`
  padding-right: 1rem;
  padding-top: 0.3rem;
  display: flex;
  justify-content: flex-end;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.mediumAccent};
  margin-right: 0.5rem;
  transition: color 800ms;

  &:hover {
    color: ${props => props.theme.complementaryDark};
  }
`;

const SocialIcon = props => <SocialLink href={props.link}>{props.component}</SocialLink>;

SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired
};

const socialData = [
  {
    service: 'twitter',
    link: 'https://twitter.com/dslemay',
    component: <FaTwitter size={30} />
  },
  {
    service: 'linkedin',
    link: 'https://www.linkedin.com/in/dslemay',
    component: <FaLinkedin size={30} />
  },
  {
    service: 'github',
    link: 'https://github.com/dslemay',
    component: <FaGithub size={30} />
  }
];

const Contact = () => (
  <ContactSection id="contact">
    <Element name="contact" />
    <h1>Contact</h1>
    <Card maxWidth="350px">
      <form action="https://formspree.io/daniel@dslemay.com" method="POST">
        <FormLabel htmlFor="name">
          <span>Name:</span>
          <input type="text" name="name" placeholder="Your name" />
        </FormLabel>
        <FormLabel htmlFor="email">
          <span>Email:</span>
          <input type="email" name="_replyto" placeholder="Your e-mail" />
        </FormLabel>
        <FormLabel htmlFor="message">
          <span>Message:</span>
          <textarea rows="6" name="message" placeholder="Your message" />
        </FormLabel>
        <input type="hidden" name="_subject" value="New contact form submission" />
        {/*
        TODO: Create and add Thank you redirect page
        <input type="hidden" name="_next" value="{{ site.url}}/thanks.html" />
        */}
        <ButtonContainer>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
      </form>
    </Card>
    {socialData.map(social => (
      <SocialIcon key={social.service} link={social.link} component={social.component} />
    ))}
  </ContactSection>
);

export default Contact;
