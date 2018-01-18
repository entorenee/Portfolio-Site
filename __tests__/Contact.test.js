import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Contact from '../src/components/Contact';

describe('Contact', () => {
  let shallowContact;

  const contact = () => {
    if (!shallowContact) {
      shallowContact = shallow(<Contact />);
    }
    return shallowContact;
  };

  beforeEach(() => {
    shallowContact = undefined;
  });

  it('renders out a form', () => {
    expect(contact().find('form')).toHaveLength(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Contact />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
