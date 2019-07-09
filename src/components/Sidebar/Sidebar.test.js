import React from 'react';
import { mount } from 'enzyme';
import {
  filter, map, uniq, uniqWith, isEqual, sortBy,
} from 'lodash';

import { user, room } from 'store/mockData';
import { messages, rooms } from './mockData';
import Sidebar from './Sidebar';

let wrapper;
const onLogoutSuccess = jest.fn();
const onSelection = jest.fn();
const showAddChannel = jest.fn();
const showListChannels = jest.fn();

beforeEach(() => {
  wrapper = mount(<Sidebar
    user={user}
    room={room}
    rooms={rooms}
    messages={messages}
    onLogoutSuccess={onLogoutSuccess}
    onSelection={onSelection}
    showAddChannel={showAddChannel}
    showListChannels={showListChannels}
  />);
});

afterEach(() => {
  wrapper.unmount();
});

it('Renders', () => {
  expect(wrapper.exists()).toBe(true);
});

describe('Testing rooms/channels', () => {
  it('Sets default selected/active room', () => {
    expect(wrapper.find('#channels').find('.ant-menu-item-selected').text()).toEqual('# general');
  });

  it('Renders channels', () => {
    const expected = filter(rooms, eachRoom => !eachRoom.customData || eachRoom.customData.privateChat !== true);
    expect(wrapper.find('.channel-group ul').length).toBe(expected.length);
  });

  it('Makes channel name bold if it has unread messages', () => {
    const expected = filter(rooms, eachRoom => eachRoom.unreadCount && eachRoom.name === 'Channel5');
    const roomName = expected[0].name;
    let hasBoldCLass = false;
    wrapper.find('#channels ul').at(0).find('li').map((each) => {
      if (each.text().replace('# ', '') === roomName && each.hasClass('unread-message')) {
        hasBoldCLass = true;
      }
    });
    expect(hasBoldCLass).toBe(true);
  });

  it('onLogoutSuccess gets called', () => {
    wrapper.find('.logged-user .ant-btn').simulate('click');
    expect(onLogoutSuccess).toHaveBeenCalled();
  });

  it('onSelection gets called', () => {
    wrapper.find('#channels ul').childAt(0).simulate('click');
    expect(onSelection).toHaveBeenCalled();
  });

  it('showAddChannel gets called', () => {
    wrapper.find('.add-channel').first().simulate('click');
    expect(showAddChannel).toHaveBeenCalled();
  });
});


describe('Testing users', () => {
  it('Renders private chat/users list', () => {
    let users = [];
    const generalRoom = rooms.find(eachRoom => eachRoom.id === process.env.REACT_APP_CHATKIT_GENERAL_ROOM);
    const expected = map(generalRoom.users, user => user.name);
    wrapper.find('.slack-users').map((each) => {
      users.push(cleanName(each.text()).trim());
    });
    // Remove duplicates
    users = uniq(users);
    expect(users.length).toBe(Object.keys(expected).length);
    expect(users.sort()).toEqual(expected.sort());
  });

  it('Shows correct online/offlive status', () => {
    const status = [];
    let users = [];

    const onlineUsers = rooms.find(eachRoom => eachRoom.id === process.env.REACT_APP_CHATKIT_GENERAL_ROOM);
    onlineUsers.users.forEach(({ name, presence }) => {
      // console.log(name, presence.state);
      status.push({ name: name.trim(), status: presence.state });
    });
    wrapper.find('.slack-users').map((each) => {
      users.push({ name: cleanName(each.text()).trim(), status: each.find('span').first().hasClass('online') ? 'online' : 'offline' });
    });
    users = uniqWith(users, isEqual);
    expect(sortBy(users, ['name'])).toEqual(sortBy(status, ['name']));
  });

  it('Shows unread message badge if there are unread messages', () => {
    // Get obj with unread count message
    const unread = rooms.find(eachRoom => eachRoom.isPrivate && eachRoom.unreadCount);
    let otherUser;
    unread.userIds.forEach((eachUser) => {
      if (eachUser !== user.id) { otherUser = eachUser; }
    });
    expect(wrapper.find(`.channel-${unread.id}`).first().find('.ant-badge-count').first()
      .prop('title')).toEqual(unread.unreadCount);
  });
});

const cleanName = (str) => {
  return str.replace('012345678901234567890123456789', '').replace('(you)', '');
}
