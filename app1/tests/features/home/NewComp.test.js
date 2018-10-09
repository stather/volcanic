import React from 'react';
import { shallow } from 'enzyme';
import { NewComp } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewComp />);
  expect(renderedComponent.find('.home-new-comp').length).toBe(1);
});
