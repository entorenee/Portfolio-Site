/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

global.___loader = {
  enqueue: jest.fn(),
};
