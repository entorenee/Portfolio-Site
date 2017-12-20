import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { css } from 'emotion';
import { FaAngleLeft, FaAngleRight } from 'react-icons/lib/fa';

const ControlsContainer = styled.div`
  display: flex;
  max-width: 50%;
  margin: auto;
  margin-top: 0.3rem;
  justify-content: space-between;
  align-items: center;
`;

const SelectorBox = styled.span`
  width: 1.5rem;
  height: 0.8rem;
  border: 1px solid ${props => props.theme.baseColor};
  transition: 500ms background-color;
`;

const selected = css`
  background-color: #2d3b7f;
`;

const MobileCarouselControls = props => (
  <ControlsContainer>
    <FaAngleLeft
      size={25}
      onClick={() => props.updateProject('previous', true)}
    />
    {props.projects.map((project, i) => (
      <SelectorBox
        className={props.currIndex === i ? selected : ''}
        onClick={() => props.updateProject(i, true)}
        key={i}
      />
    ))}
    <FaAngleRight size={25} onClick={() => props.updateProject('next', true)} />
  </ControlsContainer>
);

MobileCarouselControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  updateProject: PropTypes.func.isRequired,
  currIndex: PropTypes.number.isRequired,
  projects: PropTypes.array.isRequired
};

export default MobileCarouselControls;
