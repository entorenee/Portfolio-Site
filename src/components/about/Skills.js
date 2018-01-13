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

const Divider = styled.hr`
  height: 0.2rem;
  margin: 0;
  background-color: ${props => props.theme.darkAccent};
`;

const CardText = styled.p`
  padding: 0 2rem;
  font-size: 1.3rem;
`;

const Skills = props => (
  <GridStyling>
    <Card maxWidth="400px">
      <FaCode size={80} color={props.theme.baseColor} className={IconStyles} />
      <Divider />
      <CardText>
        I build innovative JavaScript applications with cutting edge technologies. I work
        comfortably on the frontend and backend, and specialize on the MERN stack.
      </CardText>
    </Card>
  </GridStyling>
);

Skills.propTypes = {
  theme: PropTypes.shape({
    baseColor: PropTypes.string.isRequired
  }).isRequired
};

export default withTheme(Skills);
