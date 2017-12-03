import React from 'react';
import CarouselControls from '../src/components/work/CarouselControls';
import { shallow, mount } from 'enzyme';
import {
  FaAngleLeft,
  FaAngleRight,
  FaPauseCircleO,
  FaPlayCircleO
} from 'react-icons/lib/fa';

describe('CarouselControls', () => {
  let props;
  let mountedCarouselControls;

  const carouselControls = () => {
    if (!mountedCarouselControls) {
      mountedCarouselControls = mount(<CarouselControls {...props} />);
    }
    return mountedCarouselControls;
  };

  beforeEach(() => {
    props = {
      updateProject: jest.fn(),
      isPlaying: undefined
    };
    mountedCarouselControls = undefined;
  });

  it('should render a left arrow', () => {
    expect(carouselControls().find(FaAngleLeft).length).toBe(1);
  });

  it('should render a right arrow', () => {
    expect(carouselControls().find(FaAngleRight).length).toBe(1);
  });

  it('should call updateProject with `previous` when clicking the left arrow', () => {
    carouselControls()
      .find(FaAngleLeft)
      .simulate('click');
    expect(carouselControls().props().updateProject).toBeCalledWith('previous');
  });

  it('should call updateProject with `next` when clicking the right arrow', () => {
    carouselControls()
      .find(FaAngleRight)
      .simulate('click');
    expect(carouselControls().props().updateProject).toBeCalledWith('next');
  });

  describe('when `isPlaying` is false', () => {
    beforeEach(() => {
      props.isPlaying = false;
    });

    it('renders the play icon', () => {
      expect(carouselControls().find(FaPlayCircleO).length).toBe(1);
    });
  });

  describe('when `isPlaying` is true', () => {
    beforeEach(() => {
      props.isPlaying = true;
    });

    it('renders the pause icon', () => {
      expect(carouselControls().find(FaPauseCircleO).length).toBe(1);
    });
  });
});
