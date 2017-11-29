import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { withTheme } from 'emotion-theming';
import Card from './Card';
import { FaLightbulbO, FaCode } from 'react-icons/lib/fa';

const CardContainer = styled.div`
  ${props => props.theme.margins};
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const IconStyles = css`
  margin: 0 auto;
  margin-bottom: 0.5rem;
  display: block;
`;

const Divider = styled.hr`
  height: 0.2rem;
  margin: 0;
  background-color: ${props => props.theme.darkAccent};
`;

const CardText = styled.p`
  padding: 0 2rem;
  font-size: 1.3rem;
`;

const AboutCards = props => (
  <CardContainer>
    <Card>
      <FaCode size={80} color={props.theme.baseColor} className={IconStyles} />
      <Divider />
      <CardText>
        I build innovative JavaScript applications with cutting edge
        technologies. I work comfortably on the frontend and backend, and
        specialize on the MERN stack.
      </CardText>
    </Card>
    <Card>
      <FaLightbulbO
        size={80}
        color={props.theme.baseColor}
        className={IconStyles}
      />
      <Divider />
      <CardText>
        I am a forward thinking person, who loves to learn new things, partake
        in new challenges, and solve complex problems. I would love to talk to
        you about how I may help solve your web worries.
      </CardText>
    </Card>
  </CardContainer>
);

export default withTheme(AboutCards);
