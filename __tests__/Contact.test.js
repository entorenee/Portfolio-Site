import React from 'react';
import { shallow } from 'enzyme';
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

  it('renders out a section element', () => {
    expect(contact().find('section')).toHaveLength(1);
  });

  it('renders out a form', () => {
    expect(contact().find('form')).toHaveLength(1);
  });
});
