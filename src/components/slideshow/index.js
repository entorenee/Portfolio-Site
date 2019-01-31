// @flow
import { useEffect, useState } from 'react';

export type Direction = 'previous' | 'next' | number;
type Slides = Array<any>;
type Options = {
  timerLength?: number,
};

function useSlideshow(slides: Slides, { timerLength = 5000 }: Options = {}) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currIndex, setCurrIndex] = useState(0);

  /* eslint-disable-next-line consistent-return */
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => setCurrIndex((currIndex + 1) % slides.length), timerLength);

      return () => clearTimeout(timer);
    }
  }, [currIndex, isPlaying]);

  const updateSlide = (direction: Direction) => {
    if (typeof direction === 'number') {
      return setCurrIndex(direction);
    }

    if (direction === 'next') {
      return setCurrIndex((currIndex + 1) % slides.length);
    }

    return setCurrIndex((currIndex - 1 + slides.length) % slides.length);
  };

  return {
    currIndex,
    isPlaying,
    setIsPlaying,
    updateSlide,
  };
}

export default useSlideshow;
