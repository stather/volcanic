import React from 'react';
import { shallow } from 'enzyme';
import { EditContactPanel } from '../../../src/features/contact/EditContactPanel';

describe('contact/EditContactPanel', () => {
  it('renders node with correct class name', () => {
    const props = {
      contact: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <EditContactPanel {...props} />
    );

    expect(
      renderedComponent.find('.contact-edit-contact-panel').length
    ).toBe(1);
  });
});
