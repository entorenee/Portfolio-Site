import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { cleanup, fireEvent, render } from 'react-testing-library';

import Header from '..';

afterEach(cleanup);

const location = {
  pathname: '/',
};

scroll.scrollToTop = jest.fn();

describe('<Header /> mobile view', () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

  it('renders correctly', () => {
    const { container, getByLabelText } = render(<Header location={location} />);

    expect(container).toBeTruthy();
    expect(getByLabelText('menu')).toBeTruthy();
  });

  it('the mobile icon toggles open states on click', () => {
    const { getByLabelText } = render(<Header location={location} />);

    const menu = getByLabelText('menu');
    expect(menu).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(menu);
    expect(menu).toHaveAttribute('aria-expanded', 'true');
  });
});

describe('<Header /> non-mobile view', () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

  it('renders correctly', () => {
    const { container, getByAltText } = render(<Header location={location} />);

    const logo = getByAltText('Logo');
    fireEvent.click(logo);

    expect(container).toBeTruthy();
    expect(logo).toBeTruthy();
    expect(scroll.scrollToTop).toBeCalledTimes(1);
    scroll.scrollToTop.mockReset();
  });
});
