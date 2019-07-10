import React from 'react';
import { mount } from 'enzyme';

import Alert from './Alert';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Alert type="error" title="My Error" message="Something went wrong!" />);
});
afterEach(() => {
  wrapper.unmount();
});

it('Renders', () => {
  expect(wrapper.exists()).toBe(true);
});

it('Renders correct title', () => {
  expect(wrapper.find('.ant-alert-message').text()).toEqual('My Error');
});

it('Renders correct message', () => {
  expect(wrapper.find('.ant-alert-description').text()).toEqual('Something went wrong!');
});

it('Renders correct icon', () => {
  expect(wrapper.find('.anticon-close-circle').length).toEqual(1);
  // Change alert type and test again
  const newWrapper = mount(<Alert type="success" title="My Error" message="Something went wrong!" />);
  expect(newWrapper.find('.anticon-check-circle').length).toEqual(1);
});

it('Uses type variable as alert box title if its not provided', () => {
  let newWrapper = mount(<Alert type="success" message="Something went wrong!" />);
  expect(newWrapper.find('.ant-alert-message').text()).toEqual('Success');

  newWrapper = mount(<Alert type="warning" message="Something went wrong!" />);
  expect(newWrapper.find('.ant-alert-message').text()).toEqual('Warning');
});
