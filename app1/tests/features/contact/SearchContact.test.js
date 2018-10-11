import React from 'react';
import { shallow } from 'enzyme';
import { SearchContact } from '../../../src/features/contact/SearchContact';

describe('contact/SearchContact', () => {
  it('renders node with correct class name', () => {
    const props = {
      contact: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchContact {...props} />
    );

    expect(
      renderedComponent.find('.contact-search-contact').length
    ).toBe(1);
  });
});
