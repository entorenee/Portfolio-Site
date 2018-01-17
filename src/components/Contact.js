import React from 'react';
import styled from 'react-emotion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/lib/fa';
import Card from './Card';
import Button from './Button';

const ContactSection = styled.section`
  ${props => props.theme.margins};

  form {
    margin: 0.2rem 0.4rem;
  }
`;

const FormLabel = styled.label`
  display: block;

  input,
  textarea {
    outline: none;
    display: block;
    margin-bottom: 0.5rem;
    padding: 0.2rem 1rem;
    box-sizing: border-box;
    border-radius: 5px;
    border: ${props => props.theme.mediumAccent} solid 2px;
    transition: border 800ms;

    &:focus {
      border: ${props => props.theme.baseColor} solid 2px;
    }
  }

  span {
    font-style: italic;
  }
`;

const Contact = () => (
  <ContactSection id="contact">
    <h1>Contact</h1>
    <Card maxWidth="300px">
      <form action="https://formspree.io/daniel@dslemay.com" method="POST">
        <div>
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
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  </ContactSection>
);

export default Contact;
