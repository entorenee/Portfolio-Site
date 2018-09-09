/* eslint-disable no-underscore-dangle */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-dom/extend-expect'

global.___loader = {
  enqueue: jest.fn(),
};

configure({ adapter: new Adapter() });
