/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

global.___loader = {
  enqueue: jest.fn(),
};
