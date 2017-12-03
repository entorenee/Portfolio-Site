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

  it('should have a default `isPlaying` state of false', () => {
    expect(carousel().state().isPlaying).toBe(false);
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
