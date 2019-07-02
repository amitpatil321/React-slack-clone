import React from 'react';
import { mount } from 'enzyme';
import {
  Comment,
  Tooltip,
  Col,
  Row,
} from 'antd';

import { room, message } from 'store/mockData';
import ListMessages from './ListMessages';

let wrapper;

beforeEach(() => {
  wrapper = mount(<ListMessages
    room={room}
    key={message.id}
    canGroup={false}
    message={message}
  />);
});
afterEach(() => {
  wrapper.unmount();
});

it('Renders', () => {
  expect(wrapper.exists()).toBe(true);
});

it('Renders message', () => {
  expect(wrapper.find(Comment).length).toBe(1);
});

it('Renders correct sender name and time', () => {
  expect(wrapper.find('.message-sender').text()).toEqual('Amit Patil\xA002:00 PM');
});
