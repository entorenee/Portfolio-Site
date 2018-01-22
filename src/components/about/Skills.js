import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { css } from 'emotion';
import { withTheme } from 'emotion-theming';
import { FaCode } from 'react-icons/lib/fa';
import Card from '../Card';

const IconStyles = css`
  margin: 0 auto;
  margin-bottom: 0.5rem;
  display: block;
`;

const GridStyling = styled.div`
  grid-area: 4 / 1 / 5 / -1;

  @media (min-width: 700px) {
    grid-area: 2 / 4 / 3 / -1;
  }

  @media (min-width: 1000px) {
    grid-area: 1 /5 / -1 / -1;
  }
`;

const HeaderFlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg,
  h1 {
    margin: 0;
  }
`;

const Divider = styled.hr`
  height: 0.2rem;
  margin-bottom: 0.7rem;
  background-color: ${props => props.theme.complementaryLight};
`;

const SkillsList = styled.ul`
  padding: 0 2rem;

  li {
    margin-bottom: 0.4rem;
    line-height: 1.3;
  }
`;

const Skills = props => (
  <GridStyling>
    <Card maxWidth="400px">
      <HeaderFlexContainer>
        <FaCode size={80} color={props.theme.baseColor} className={IconStyles} />
        <h1>Skills</h1>
      </HeaderFlexContainer>
      <Divider />
      <SkillsList>
        <li>Responsive Web Design</li>
        <li>Cutting edge web technologies including React, Redux, CSS Grid</li>
        <li>Backend experience with APIs, Node, Express, and MongoDB</li>
        <li>Experience working in large and diverse teams</li>
        <li>Clear Communication and direction to reach end goals</li>
      </SkillsList>
    </Card>
  </GridStyling>
);

Skills.propTypes = {
  theme: PropTypes.shape({
    baseColor: PropTypes.string.isRequired
  }).isRequired
};

export default withTheme(Skills);
