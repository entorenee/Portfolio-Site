import React from 'react';
import { mount } from 'enzyme';
import Slideshow from '..';
import projectSpotlight from '../../work/carousel/project-spotlight';

describe('Slideshow', () => {
  let mountedSlideshow;

  const slideshow = () => {
    if (!mountedSlideshow) {
      mountedSlideshow = mount(<Slideshow slides={projectSpotlight}>{() => <div />}</Slideshow>);
    }
    return mountedSlideshow;
  };

  beforeEach(() => {
    mountedSlideshow = undefined;
  });

  it('should have a default `currIndex` state of 0', () => {
    expect(slideshow().state().currIndex).toBe(0);
  });

  it('should have a default `isPlaying` state of true', () => {
    expect(slideshow().state().isPlaying).toBe(true);
  });

  describe('updateProject method', () => {
    it('increments the `currIndex` state when passed the `next` argument', () => {
      const wrapper = slideshow();
      wrapper.instance().updateProject('next');
      expect(wrapper.state().currIndex).toBe(1);
    });

    it('decrements the `currIndex` state when passed the `previous` argument', () => {
      const projectLength = projectSpotlight.length - 1;
      const wrapper = slideshow();
      wrapper.instance().updateProject('previous');
      expect(wrapper.state().currIndex).toBe(projectLength);
    });

    it('sets the `currIndex` state to a specific number when `direction` is a number', () => {
      const wrapper = slideshow();
      wrapper.instance().updateProject(2);
      expect(wrapper.state().currIndex).toBe(2);
    });
  });

  describe('updateIsPlaying method', () => {
    it('sets `isPlaying` state to true and intervalId to be defined when prevState is false', () => {
      const wrapper = slideshow();
      wrapper.instance().setState({ isPlaying: false, intervalId: undefined });
      wrapper.instance().updateIsPlaying();
      expect(wrapper.state().isPlaying).toBe(true);
      expect(wrapper.state().intervalId).toBeDefined();
    });

    it('sets `isPlaying` state to false and intervalId to be undefined when prevState is true', () => {
      const wrapper = slideshow();
      wrapper.instance().updateIsPlaying();
      expect(wrapper.state().isPlaying).toBe(false);
      expect(wrapper.state().intervalId).toBeUndefined();
    });
  });

  describe('resetIntervalTimer method', () => {
    it('is called when isPlaying is `true` and the user clicks the right arrow', () => {
      const wrapper = slideshow();
      const spy = jest.spyOn(wrapper.instance(), 'resetIntervalTimer');
      wrapper.update();
      wrapper.instance().updateProject('next', true);
      expect(spy).toBeCalled();
    });

    it('is called when isPlaying is `true` and the user clicks the left arrow', () => {
      const wrapper = slideshow();
      const spy = jest.spyOn(wrapper.instance(), 'resetIntervalTimer');
      wrapper.update();
      wrapper.instance().updateProject('previous', true);
      expect(spy).toBeCalled();
    });

    it('resets the setInterval and ID for carousel progression upon being called', () => {
      const wrapper = slideshow();
      const oldIntervalId = wrapper.state().intervalId;
      wrapper.instance().resetIntervalTimer();
      expect(wrapper.state().intervalId).not.toBe(oldIntervalId);
    });

    it('is not called when isPlaying is `false` and the user clicks the right arrow', () => {
      const wrapper = slideshow();
      const spy = jest.spyOn(wrapper.instance(), 'resetIntervalTimer');
      wrapper.update();
      wrapper.instance().setState({ isPlaying: false, intervalId: undefined });
      wrapper.instance().updateProject('next', true);
      expect(spy).not.toBeCalled();
    });

    it('is not called when isPlaying is `false` and the user clicks the left arrow', () => {
      const wrapper = slideshow();
      const spy = jest.spyOn(wrapper.instance(), 'resetIntervalTimer');
      wrapper.update();
      wrapper.instance().setState({ isPlaying: false, intervalId: undefined });
      wrapper.instance().updateProject('previous', true);
      expect(spy).not.toBeCalled();
    });
  });
});

describe('projectSpotlight', () => {
  it('should be an array', () => {
    expect(Array.isArray(projectSpotlight)).toBe(true);
  });

  it('should have at least one item', () => {
    expect(projectSpotlight.length).toBeGreaterThan(0);
  });

  it('should be an array of objects', () => {
    projectSpotlight.map(project => expect(typeof project).toBe('object'));
  });

  it('should contain a defined title key', () => {
    projectSpotlight.map(project => {
      expect(Object.prototype.hasOwnProperty.call(project, 'title')).toBe(true);
      return expect(project.title).toBeTruthy();
    });
  });

  it('should contain a defined image key', () => {
    projectSpotlight.map(project => {
      expect(Object.prototype.hasOwnProperty.call(project, 'image')).toBe(true);
      return expect(project.image).toBeTruthy();
    });
  });

  it('should contain a defined projectLink key', () => {
    projectSpotlight.map(project => {
      expect(Object.prototype.hasOwnProperty.call(project, 'projectLink')).toBe(true);
      return expect(project.projectLink).toBeTruthy();
    });
  });

  it('should contain a defined githubLink key', () => {
    projectSpotlight.map(project => {
      expect(Object.prototype.hasOwnProperty.call(project, 'githubLink')).toBe(true);
      return expect(project.githubLink).toBeTruthy();
    });
  });

  it('should contain a defined description key', () => {
    projectSpotlight.map(project => {
      expect(Object.prototype.hasOwnProperty.call(project, 'description')).toBe(true);
      return expect(project.description).toBeTruthy();
    });
  });
});
