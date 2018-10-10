import React from 'react';
import { shallow } from 'enzyme';
import { PlainTextInput } from '../../../src/features/grommet';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<PlainTextInput />);
  expect(renderedComponent.find('.grommet-plain-text-input').length).toBe(1);
});
