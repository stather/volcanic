import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/agent-desktop/DefaultPage';

describe('agent-desktop/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      agentDesktop: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.agent-desktop-default-page').length
    ).toBe(1);
  });
});
