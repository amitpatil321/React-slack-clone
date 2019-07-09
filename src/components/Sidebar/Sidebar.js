import React from 'react';
import {
  Avatar, Tooltip, Button, Icon, Menu, Badge,
} from 'antd';
import PropTypes from 'prop-types';
import { filter, sortBy } from 'lodash';

import { roomTypeIcon, canShowUnreadBadge, getDirectChatRoom } from 'utils/SlackUtils';
import './Sidebar.css';

const MenuItemGroup = Menu.ItemGroup;

const Sidebar = ({
  user, room, rooms, messages, onSelection, onLogoutSuccess, showAddChannel,
}) => {
  const getRoomsList = () => sortBy(rooms, each => each.name).map((eachRoom) => {
    const { id, name } = eachRoom;
    // Show unread message flag, only if there are unread messages and message was not sent by same/logged in user and user is not in same room
    const hasUnread = canShowUnreadBadge(user, room, eachRoom, messages) ? 'unread-message' : '';
    // Ignore private chat room
    if (!eachRoom.customData || eachRoom.customData.privateChat !== true) {
      return (
        <Menu.Item
          key={id}
          onClick={() => onSelection(eachRoom)}
          className={`channel-${id} ${hasUnread}`}
        >
          {roomTypeIcon(eachRoom)}
          {' '}
          {name}
        </Menu.Item>
      );
    }
    return null;
  });

  const getUsersList = () => {
    let unreadCount;
    // List all users
    const general = rooms.find(eachRoom => eachRoom.id === process.env.REACT_APP_CHATKIT_GENERAL_ROOM);
    if (general) {
      return sortBy(general.users, each => each.name.toLowerCase()).map((eachUser) => {
        const privateRoom = getDirectChatRoom(user, rooms, eachUser.id)[0];
        if (privateRoom) {
          unreadCount = canShowUnreadBadge(user, room, privateRoom, messages) ? (
            <Badge className="float-right" count={privateRoom.unreadCount} overflowCount={10} />
          ) : null;
        }
        return (
          <Menu.Item
            key={privateRoom ? privateRoom.id : eachUser.id}
            onClick={() => onSelection(eachUser)}
            className={`channel-${privateRoom ? privateRoom.id : eachUser.id} slack-users`}
          >
            <span className={`online-status ${(eachUser.presence.state === 'online') ? 'online' : 'offline'}`} />
            {eachUser.name}
            {' '}
            {eachUser.id === user.id && <small>(you)</small>}
            {unreadCount}
          </Menu.Item>
        );
      });
    }
  };

  return (
    <>
      <div className="logged-user">
        <Avatar src={user.avatarURL} />
        <span>{user.name}</span>
        <Tooltip placement="bottom" title="Logout" trigger="hover">
          <Button type="link" onClick={onLogoutSuccess} className="float-right">
            <Icon type="poweroff" />
          </Button>
        </Tooltip>
      </div>
      <Menu
        className="rooms-list"
        mode="inline"
        theme="dark"
        selectedKeys={[room ? room.id : process.env.REACT_APP_CHATKIT_GENERAL_ROOM]}
      >
        <MenuItemGroup key="g1" title="Channels" className="channel-group" id="channels">
          {getRoomsList()}
        </MenuItemGroup>
        <Menu.Item className="add-channel" onClick={showAddChannel}>
          <strong>
            <Icon type="plus" />
            Add a channel
          </strong>
        </Menu.Item>
        <MenuItemGroup key="g2" title="Direct Message" className="channel-group" id="users">
          {getUsersList()}
        </MenuItemGroup>
      </Menu>
    </>
  );
};

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
  messages: PropTypes.object.isRequired,
  onSelection: PropTypes.func.isRequired,
  onLogoutSuccess: PropTypes.func.isRequired,
  showAddChannel: PropTypes.func.isRequired,
};

export default Sidebar;
