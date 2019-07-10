import React from 'react';
import { mount } from 'enzyme';
import {
  Input, Checkbox, Alert, Select, Form,
} from 'antd';

import AddChannel from './AddChannel';

const { Option } = Select;
let wrapper;
const hideModal = jest.fn();
const onSubmit = jest.fn();
const onInputChange = jest.fn();
const handleDropdownChange = jest.fn();
const onCheckboxChange = jest.fn();

const getInstance = (showModal, isPrivate, validationError, channelName = 'hi', selectedUsers = []) => mount(
  <AddChannel
    error="This is error"
    addChannelModalVisible={showModal}
    allUsers={[<Option key={1}>Amit</Option>, <Option key={2}>Patil</Option>, <Option key={3}>Bhagat</Option>, <Option key={4}>Rajguru</Option>]}
    validationError={validationError}
    channelName={channelName}
    selectedUsers={selectedUsers}
    isPrivate={isPrivate}
    hideModal={hideModal}
    onSubmit={onSubmit}
    onInputChange={onInputChange}
    handleDropdownChange={handleDropdownChange}
    onCheckboxChange={onCheckboxChange}
  />,
);

beforeEach(() => {
  wrapper = getInstance(true, false, false);
});

afterEach(() => {
  wrapper.unmount();
});

it('Renders', () => {
  expect(wrapper.exists()).toBe(true);
});

it('shows a modal window if addChannelModalVisible is true', () => {
  // make modal hidden initially
  let wrapperModalHidden = getInstance(false, false, false);
  expect(wrapperModalHidden.html()).toBe('');
  // make modal visible
  wrapperModalHidden = getInstance(true, false, false);
  expect(wrapperModalHidden.find(Input).length).toEqual(1);
});

it('Renders 1 input, 1 Select and 1 checkbox', () => {
  expect(wrapper.find(Input).length).toEqual(1);
  expect(wrapper.find(Select).length).toEqual(1);
  expect(wrapper.find(Checkbox).length).toEqual(1);
});

it('Renders correct options in Select dropdown', () => {
  wrapper.find(Select).simulate('click');
  expect(wrapper.find('.ant-select-dropdown-menu-item').length).toEqual(4);
  const names = [];
  wrapper.find('.ant-select-dropdown-menu-item').forEach((item) => {
    names.push(item.text());
  });
  expect(names).toEqual(['Amit', 'Patil', 'Bhagat', 'Rajguru']);
});

it('Renders correct channel name', () => {
  const wrapperChannel = getInstance(true, false, false, 'Channel1');
  expect(wrapperChannel.find(Input).prop('value')).toEqual('Channel1');
});

it('Renders selected user names', () => {
  const wrapperSelUser = getInstance(true, false, false, 'Channel1', [1, 3, 4]);
  expect(wrapperSelUser.find('.ant-select-selection__choice').length).toEqual(3);
  const selected = [];
  wrapperSelUser.find('.ant-select-selection__choice').forEach((item) => {
    selected.push(item.text());
  });
  expect(selected).toEqual(['1', '3', '4']);
});

describe('Checkbox toggles', () => {
  let wrapperTrue;
  let wrapperFalse;

  wrapperTrue = getInstance(true, true, false);
  it('It sets checkbox checked if isPrivate is true', () => {
    expect(wrapperTrue.find(Checkbox).prop('checked')).toEqual(true);
  });

  wrapperFalse = getInstance(true, false, false);
  it('It sets checkbox unchecked if isPrivate is false', () => {
    expect(wrapperFalse.find(Checkbox).prop('checked')).toEqual(false);
  });
});

it('Displays error alert and text', () => {
  expect(wrapper.find(Alert).length).toEqual(1);
  expect(wrapper.find(Alert).text()).toEqual('This is error');
});

it('Checks if channel name is entered and trows validation error', () => {
  // Check if error is hidden initially
  let wrapperError = getInstance(true, false, false);
  expect(wrapperError.find('.ant-form-explain').length).toBe(0);

  // Check if it validates empty field on clicking submit button
  wrapperError = getInstance(true, false, true);
  wrapperError.find('.ant-btn-primary').simulate('click');
  expect(wrapperError.find('.ant-form-explain').text()).toEqual('Please enter channel name');
});

// Test event function
it('hideModal function gets called', () => {
  wrapper.find('.ant-modal-close-x').simulate('click');
  expect(hideModal).toHaveBeenCalled();
});

it('onSubmit function gets called', () => {
  wrapper.find(Form).simulate('submit');
  expect(onSubmit).toHaveBeenCalled();
});

it('onInputChange function gets called', () => {
  wrapper.find(Input).simulate('change', { target: { value: 'Test Channel' } });
  expect(onInputChange).toHaveBeenCalled();
});

it('handleDropdownChange function gets called', () => {
  const wrapperSelUser = getInstance(true, false, false, 'Channel1', [1]);
  wrapperSelUser.find('.ant-select-selection__choice__remove').simulate('click');
  expect(handleDropdownChange).toHaveBeenCalled();
});

it('onCheckboxChange function gets called', () => {
  // Check
  document.querySelector('.ant-checkbox-input').click();
  expect(onCheckboxChange).toHaveBeenCalled();
  // Uncheck
  document.querySelector('.ant-checkbox-input').click();
  expect(onCheckboxChange).toHaveBeenCalled();
});
