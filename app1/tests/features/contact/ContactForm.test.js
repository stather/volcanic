import React from 'react';
import { shallow } from 'enzyme';
import { ContactForm } from '../../../src/features/contact';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ContactForm />);
  expect(renderedComponent.find('.contact-contact-form').length).toBe(1);
});
