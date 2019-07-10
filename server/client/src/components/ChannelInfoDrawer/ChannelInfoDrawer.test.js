import React from 'react';
import { mount } from 'enzyme';
import { Avatar, Collapse } from 'antd';

import { user, room } from 'store/mockData';
import ChannelInfoDrawer from './ChannelInfoDrawer';

let wrapper;
const { Panel } = Collapse;

beforeEach(() => {
  wrapper = mount(
    <ChannelInfoDrawer
      user={user}
      room={room}
      channelInfoVisible
      hideChannelInfoDrawer={() => { }}
    />,
  );
});
afterEach(() => {
  wrapper.unmount();
});

it('Renders', () => {
  expect(wrapper.exists()).toBe(true);
});

it('It visible when channelInfoVisible is true', () => {
  expect(wrapper.exists('.ant-drawer-header')).toBe(true);
});

it('It hidden when channelInfoVisible is false', () => {
  const wrapperHidden = mount(
    <ChannelInfoDrawer
      user={user}
      room={room}
      channelInfoVisible={false}
      hideChannelInfoDrawer={() => { }}
    />,
  );

  expect(wrapperHidden.exists('.ant-drawer-header')).toBe(false);
});

it('Renders correct drawer title', () => {
  expect(wrapper.find('.ant-drawer-header').find('strong').html()).toMatch('<strong>About&nbsp;#general</strong>');
});
