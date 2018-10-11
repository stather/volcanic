import React from 'react';
import { shallow } from 'enzyme';
import { SearchContactPanel } from '../../../src/features/contact/SearchContactPanel';

describe('contact/SearchContactPanel', () => {
  it('renders node with correct class name', () => {
    const props = {
      contact: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchContactPanel {...props} />
    );

    expect(
      renderedComponent.find('.contact-search-contact-panel').length
    ).toBe(1);
  });
});
