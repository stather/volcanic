import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/grommet/DefaultPage';

describe('grommet/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      grommet: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.grommet-default-page').length
    ).toBe(1);
  });
});
