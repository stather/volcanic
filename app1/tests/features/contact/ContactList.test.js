import React from 'react';
import { shallow } from 'enzyme';
import { ContactList } from '../../../src/features/contact';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ContactList />);
  expect(renderedComponent.find('.contact-contact-list').length).toBe(1);
});
