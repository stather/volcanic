import React from 'react';
import { shallow } from 'enzyme';
import { AddContactPanel } from '../../../src/features/contact/AddContactPanel';

describe('contact/AddContactPanel', () => {
  it('renders node with correct class name', () => {
    const props = {
      contact: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <AddContactPanel {...props} />
    );

    expect(
      renderedComponent.find('.contact-add-contact-panel').length
    ).toBe(1);
  });
});
