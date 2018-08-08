import React from 'react';
import { mount } from 'enzyme';
import { FaAngleLeft, FaAngleRight, FaPlayCircle, FaPauseCircle } from 'react-icons/lib/fa';
import CarouselControls from '../src/components/work/CarouselControls';

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
      isPlaying: true,
      updateIsPlaying: jest.fn(),
      currIndex: 0,
      projects: [
        {
          title: 'Sample Project',
          image: 'project image',
          description: 'Hello I am the description',
          projectLink: 'http://dslemay.com',
          githubLink: 'https://github.com/dslemay',
        },
      ],
    };
    mountedCarouselControls = undefined;
  });

  it('should render a left arrow', () => {
    expect(carouselControls().find(FaAngleLeft).length).toBe(1);
  });

  it('should render a right arrow', () => {
    expect(carouselControls().find(FaAngleRight).length).toBe(1);
  });

  it('should call updateProject with `previous` and `true` when clicking the left arrow', () => {
    carouselControls()
      .find(FaAngleLeft)
      .simulate('click');
    expect(carouselControls().props().updateProject).toBeCalledWith('previous', true);
  });

  it('should call updateProject with `next` and `true` when clicking the right arrow', () => {
    carouselControls()
      .find(FaAngleRight)
      .simulate('click');
    expect(carouselControls().props().updateProject).toBeCalledWith('next', true);
  });

  describe('when `isPlaying` is false', () => {
    beforeEach(() => {
      props.isPlaying = false;
      props.updateIsPlaying = jest.fn();
    });

    it('renders the play icon', () => {
      expect(carouselControls().find(FaPlayCircle).length).toBe(1);
    });

    it('calls updateIsPlaying function when clicking the play button', () => {
      carouselControls()
        .find(FaPlayCircle)
        .simulate('click');
      expect(carouselControls().props().updateIsPlaying).toBeCalled();
    });
  });

  describe('when `isPlaying` is true', () => {
    beforeEach(() => {
      props.isPlaying = true;
    });

    it('renders the pause icon', () => {
      expect(carouselControls().find(FaPauseCircle).length).toBe(1);
    });

    it('calls updateIsPlaying function when clicking the pause button', () => {
      carouselControls()
        .find(FaPauseCircle)
        .simulate('click');
      expect(carouselControls().props().updateIsPlaying).toBeCalled();
    });
  });
});
