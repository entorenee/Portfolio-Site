// @flow
import type { Direction, Props, State } from '.';

const updateSlideshow = (prevState: State, props: Props, direction: Direction) => {
  const { slides } = props;
  const projectTotal = slides.length;
  const { currIndex } = prevState;

  if (typeof direction === 'number') {
    return { currIndex: direction };
  }

  switch (direction) {
    case 'next':
      return currIndex < projectTotal - 1 ? { currIndex: currIndex + 1 } : { currIndex: 0 };
    case 'previous':
      return currIndex > 0 ? { currIndex: currIndex - 1 } : { currIndex: projectTotal - 1 };
    default:
      return {};
  }
};

export default updateSlideshow;
