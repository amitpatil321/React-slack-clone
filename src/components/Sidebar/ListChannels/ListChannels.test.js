import React from 'react';
import { mount } from 'enzyme';
import {
  Input, Button,
} from 'antd';

import {
  user, room, rooms, joinableRooms,
} from './mockData';
import ListChannels from './ListChannels';

let wrapper;
const onChange = jest.fn();
const becomeRoomMember = jest.fn();
const joinRoom = jest.fn();
const hideListChannels = jest.fn();
const showAddChannel = jest.fn();

const getInstance = (text = null, listChannelsModalVisible = true, fetchComplete = true, error = null) => mount(<ListChannels
  user={user}
  room={room}
  text={text}
  onChange={onChange}
  existingRooms={rooms} // Ignore private chat rooms
  joinableRooms={joinableRooms}
  becomeRoomMember={becomeRoomMember} // Join new room
  gotoRoom={joinRoom} // Goto existing room already joined
  listChannelsModalVisible={listChannelsModalVisible}
  hideListChannels={hideListChannels}
  fetchComplete={fetchComplete}
  showAddChannel={showAddChannel}
  error={error}
/>);

beforeEach(() => {
  wrapper = getInstance(null, true, true);
});

afterEach(() => {
  wrapper.unmount();
});

it('Renders', () => {
  expect(wrapper.exists()).toBe(true);
});

/*
TODO : Make this test work
it('Shows/hide list channel modal', () => {
  // Hide modal and test
  let wrapperHidden = getInstance(null, false);
  console.log(wrapperHidden.exists());
  expect(wrapperHidden.exists()).toBe(false);
  // console.log(document.querySelector('.list-channels'));
  // console.log(document.querySelector('.list-channels'));
  // expect(document.querySelector('.list-channels')).toBe(null);
  // Show modal and test
  wrapperHidden = getInstance(null, true);
  expect(wrapperHidden.exists()).toBe(true);
  console.log(wrapperHidden.find('.list-channels').style);
  // expect(document.querySelector('.list-channels')).not.toBe(null);
});
*/

it('Lists joinable rooms', () => {
  const joinable = [];
  wrapper.find('.ant-list-split').at(0).find('.ant-list-item').map((eachRoom) => {
    joinable.push(eachRoom.find('h4').text());
  });
  expect(joinable.length).toEqual(2);
  expect(joinable).toEqual(['channel3', 'channel4']);
});

it('Lists already joined rooms', () => {
  const existing = [];
  wrapper.find('.ant-list').at(1).find('.ant-list-item').map((eachRoom) => {
    existing.push(eachRoom.find('h4').text());
  });
  expect(existing.length).toEqual(3);
  expect(existing).toEqual(['general', 'channel1', 'channel2']);
});

it('Search field accepts text', () => {
  const wrapperSearch = getInstance('search');
  wrapperSearch.setProps({ text: 'string' });
  expect(wrapperSearch.find(Input).prop('value')).toEqual('string');
});

it('Searches channel name in a list ', () => {
  // Search in joinable rooms
  let wrapperSearch = getInstance('channel3');
  expect(wrapperSearch.find('.ant-list').at(0).find('.ant-list-item').find('h4')
    .text()).toEqual('channel3');
  // Search in a existing rooms
  wrapperSearch = getInstance('channel1');
  wrapperSearch.update();
  expect(wrapperSearch.find('.ant-list').at(1).find('.ant-list-item').find('h4')
    .text()).toEqual('channel1');
});

it('Renders error message', () => {
  expect(wrapper.find('.ant-alert-error').length).toBe(0);
  const wrapperError = getInstance(null, true, true, 'Error!');
  expect(wrapperError.find('.ant-alert-error').text()).toEqual('Error!');
});

it('Closes modal', () => {
  wrapper.find('.ant-modal-close').simulate('click');
  expect(hideListChannels).toHaveBeenCalled();
});

it('Joins new room', () => {
  const roomToJoin = joinableRooms.find(jroom => jroom.name === 'channel3');
  wrapper.find('.ant-list').at(0).find('.ant-list-item').first()
.find(Button)
.simulate('click');
  expect(becomeRoomMember).toHaveBeenCalledWith(roomToJoin);
});

it('Joins existing room', () => {
  wrapper.find('.ant-list').at(1).find('.ant-list-item').first()
.simulate('click');
  expect(becomeRoomMember).toHaveBeenCalled();
});

it('showAddChannel function gets called', () => {
  wrapper.find('.ant-row').find(Button).simulate('click');
  expect(showAddChannel).toHaveBeenCalled();
});
