import React from 'react';
import MobileCarouselControls from '../src/components/work/MobileCarouselControls';
import { mount } from 'enzyme';
import { FaAngleLeft, FaAngleRight } from 'react-icons/lib/fa';

describe('MobileCarouselControls', () => {
  let props;
  let mountedCarouselControls;

  const carouselControls = () => {
    if (!mountedCarouselControls) {
      mountedCarouselControls = mount(<MobileCarouselControls {...props} />);
    }
    return mountedCarouselControls;
  };

  beforeEach(() => {
    props = {
      updateProject: jest.fn(),
      isPlaying: true,
      currIndex: 0,
      projects: ['project1', 'project2']
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
    expect(carouselControls().props().updateProject).toBeCalledWith(
      'previous',
      true
    );
  });

  it('should call updateProject with `next` and `true` when clicking the right arrow', () => {
    carouselControls()
      .find(FaAngleRight)
      .simulate('click');
    expect(carouselControls().props().updateProject).toBeCalledWith(
      'next',
      true
    );
  });
});
