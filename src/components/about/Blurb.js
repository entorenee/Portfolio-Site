import React from 'react';
import styled from 'react-emotion';

const BlurbContainer = styled.div`
  grid-area: 2 / 1 / 3 / -1;

  @media (min-width: 700px) {
    grid-area: 2 / 1 / 3 / span 3;
  }

  @media (min-width: 1000px) {
    grid-area: 3 / 1 / 4 / span 4;
  }
`;

const Blurb = () => (
  <BlurbContainer>
    <p>
      <strong>
        My name is Daniel Lemay, and I am a full stack JavaScript developer who specializes in
        dynamic and responsive applications.
      </strong>{' '}
      I love pursuing solutions to complex problems and helping people advance their skills. I pay
      attention to the details and work well with numerous stakeholders circumventing competing
      priorities. Take a look at some of my projects and to contact me about available
      opportunities.
    </p>
  </BlurbContainer>
);

export default Blurb;
