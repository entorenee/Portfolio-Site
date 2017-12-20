import React from 'react';
import Carousel from '../src/components/work/Carousel';
import projectSpotlight from '../src/components/work/projectSpotlight';
import { mount } from 'enzyme';

describe('Carousel', () => {
  let mountedCarousel;

  const carousel = () => {
    if (!mountedCarousel) {
      mountedCarousel = mount(<Carousel />);
    }
    return mountedCarousel;
  };

  beforeEach(() => {
    mountedCarousel = undefined;
  });

  it('should have a default `currIndex` state of 0', () => {
    expect(carousel().state().currIndex).toBe(0);
  });

  it('should have a default `isPlaying` state of true', () => {
    expect(carousel().state().isPlaying).toBe(true);
  });

  describe('updateProject method', () => {
    it('increments the `currIndex` state when passed the `next` argument', () => {
      carousel()
        .instance()
        .updateProject('next');
      expect(carousel().state().currIndex).toBe(1);
    });

    it('decrements the `currIndex` state when passed the `previous` argument', () => {
      const projectLength = projectSpotlight.length - 1;
      carousel()
        .instance()
        .updateProject('previous');
      expect(carousel().state().currIndex).toBe(projectLength);
    });

    it('sets the `currIndex` state to a specific number when `direction` is a number', () => {
      carousel()
        .instance()
        .updateProject(2);
      expect(carousel().state().currIndex).toBe(2);
    });
  });

  describe('updateIsPlaying method', () => {
    it('sets `isPlaying` state to true and intervalId to be defined when prevState is false', () => {
      carousel()
        .instance()
        .setState({ isPlaying: false, intervalId: undefined });
      carousel()
        .instance()
        .updateIsPlaying();
      expect(carousel().state().isPlaying).toBe(true);
      expect(carousel().state().intervalId).toBeDefined();
    });

    it('sets `isPlaying` state to false and intervalId to be undefined when prevState is true', () => {
      carousel()
        .instance()
        .updateIsPlaying();
      expect(carousel().state().isPlaying).toBe(false);
      expect(carousel().state().intervalId).toBeUndefined();
    });
  });

  describe('resetIntervalTimer method', () => {
    it('is called when isPlaying is `true` and the user clicks the right arrow', () => {
      const resetIntervalTimer = jest.genMockFunction();
      carousel().instance().resetIntervalTimer = resetIntervalTimer;
      carousel()
        .instance()
        .updateProject('next', true);
      expect(resetIntervalTimer).toBeCalled();
    });

    it('is called when isPlaying is `true` and the user clicks the left arrow', () => {
      const resetIntervalTimer = jest.genMockFunction();
      carousel().instance().resetIntervalTimer = resetIntervalTimer;
      carousel()
        .instance()
        .updateProject('previous', true);
      expect(resetIntervalTimer).toBeCalled();
    });

    it('resets the setInterval and ID for carousel progression upon being called', () => {
      const oldIntervalId = carousel().state().intervalId;
      carousel()
        .instance()
        .resetIntervalTimer();
      expect(carousel().state().intervalId).not.toBe(oldIntervalId);
    });

    it('is not called when isPlaying is `false` and the user clicks the right arrow', () => {
      const resetIntervalTimer = jest.genMockFunction();
      carousel().instance().resetIntervalTimer = resetIntervalTimer;
      carousel()
        .instance()
        .setState({ isPlaying: false, intervalId: undefined });
      carousel()
        .instance()
        .updateProject('next', true);
      expect(resetIntervalTimer).not.toBeCalled();
    });

    it('is not called when isPlaying is `false` and the user clicks the left arrow', () => {
      const resetIntervalTimer = jest.genMockFunction();
      carousel().instance().resetIntervalTimer = resetIntervalTimer;
      carousel()
        .instance()
        .setState({ isPlaying: false, intervalId: undefined });
      carousel()
        .instance()
        .updateProject('previous', true);
      expect(resetIntervalTimer).not.toBeCalled();
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
    projectSpotlight.map(project => {
      expect(typeof project).toBe('object');
    });
  });

  it('should contain a defined title key', () => {
    projectSpotlight.map(project => {
      expect(project.hasOwnProperty('title')).toBe(true);
      expect(project.title).toBeTruthy();
    });
  });

  it('should contain a defined image key', () => {
    projectSpotlight.map(project => {
      expect(project.hasOwnProperty('image')).toBe(true);
      expect(project.image).toBeTruthy();
    });
  });

  it('should contain a defined projectLink key', () => {
    projectSpotlight.map(project => {
      expect(project.hasOwnProperty('projectLink')).toBe(true);
      expect(project.projectLink).toBeTruthy();
    });
  });

  it('should contain a defined githubLink key', () => {
    projectSpotlight.map(project => {
      expect(project.hasOwnProperty('githubLink')).toBe(true);
      expect(project.githubLink).toBeTruthy();
    });
  });
  it('should contain a defined description key', () => {
    projectSpotlight.map(project => {
      expect(project.hasOwnProperty('description')).toBe(true);
      expect(project.description).toBeTruthy();
    });
  });
});
