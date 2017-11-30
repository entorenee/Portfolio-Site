import React from 'react';
import styled from 'react-emotion';

import headshot from '../../assets/img/headshot.jpg';

const BlurbContainer = styled.div`
  background-color: ${props => props.theme.mediumAccent};
  padding: 1.5rem 0;
`;

const BlurbFlex = styled.div`
  ${props => props.theme.margins};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BlurbText = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    max-width: 100%;
    order: 1;
  }
`;

const ProfilePic = styled.img`
  max-width: 300px;
  max-height: 300px;
  margin: 0 auto;
  border-radius: 50%;
`;

const Blurb = () => (
  <BlurbContainer>
    <BlurbFlex>
      <BlurbText>
        <p>
          <strong>
            My name is Daniel Lemay, and I am a full stack JavaScript developer
            who specializes in dynamic and responsive applications.
          </strong>{' '}
          I love pursuing solutions to complex problems and helping people
          advance their skills. I pay attention to the details and work well
          with numerous stakeholders circumventing competing priorities. Take a
          look at some of my projects and to contact me about available
          opportunities.
        </p>
      </BlurbText>
      <ProfilePic src={headshot} />
    </BlurbFlex>
  </BlurbContainer>
);

export default Blurb;
