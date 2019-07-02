import React from 'react';
import { mount } from 'enzyme';
import { Input } from 'antd';
import { user, room } from 'store/mockData';

import SendMessage from './SendMessage';

const { TextArea } = Input;
let wrapper;

beforeEach(() => {
  wrapper = mount(
    <SendMessage
      user={user}
      room={room}
      message="This is message"
    />,
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('Renders', () => {
  expect(wrapper.exists()).toBe(true);
});

it('Renders textarea', () => {
  expect(wrapper.find(TextArea).length).toEqual(1);
});

it('Renders message in textarea', () => {
  expect(wrapper.find(TextArea).text()).toEqual('This is message');
});

it('Triggers onChange event', () => {
  // wrapper.find(TextArea).simulate('change', {
  //   target: { value: 'new text' },
  // });
  // wrapper.forceUpdate();
  // expect(wrapper.find('textarea').prop('value')).toEqual('new text');

  // const inputName = wrapper.find(TextArea);
  // console.log(inputName.length);
  // inputName.instance().value = 'Amit Patil';
  // inputName.simulate('change');
  // expect(wrapper.find('input').prop('value')).toEqual('Amit Patil');
});
