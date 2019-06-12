import React, { useContext } from 'react';
import { Avatar, Tooltip, Button, Icon, Menu, Badge } from 'antd'
import PropTypes from 'prop-types';
import GoogleLogout from 'react-google-login';
import { filter, sortBy } from 'lodash';

import { SlackContext } from 'store/store';
import { roomTypeIcon, canShowUnreadBadge, getDirectChatRoom } from 'utils/SlackUtils';
import './Sidebar.css';

const MenuItemGroup = Menu.ItemGroup;

const Sidebar = ({ onSelection, onLogoutSuccess }) => {
    let getRoomsList = (context) => {
        let { user, room, rooms, messages } = context.state;
        return sortBy(rooms, each => each.name).map(eachRoom => {
            let { id, name, customData } = eachRoom;
            // Show unread message flag, only if there are unread messages and message was not sent by same/logged in user and user is not in same room
            let hasUnread = (canShowUnreadBadge(user, room, eachRoom, messages)) ? "unread-message" : "";
            // Ignore private chat room
            if (!eachRoom.customData || eachRoom.customData.privateChat !== true){
                return <Menu.Item key={id} onClick={() => onSelection(eachRoom)} className={"channel-"+id +" "+ hasUnread}>
                    {roomTypeIcon(eachRoom)} {name}
                </Menu.Item>
            }
        })
    }

    let getUsersList = (context) => {
        let { user, room, rooms, messages } = context.state;
        // List all users
        let general = filter(rooms, { id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM });
        if (general.length) {
            return sortBy(general[0].users, each => each.name.toLowerCase()).map(eachUser => {
                let privateRoom = getDirectChatRoom(context.state, eachUser.id)[0];
                let unreadCount = canShowUnreadBadge(user, room, privateRoom, messages) ?
                    <Badge className="float-right" count={privateRoom.unreadCount} overflowCount={10}></Badge>
                    : null;

                return <Menu.Item
                        key = {privateRoom ? privateRoom.id : eachUser.id}
                        onClick={() => onSelection(eachUser)}
                        className={"channel-" + (privateRoom ? privateRoom.id : eachUser.id)}
                       >
                        <span className={"online-status " + eachUser.presence.state}></span>
                        {eachUser.name}
                        {unreadCount}
                </Menu.Item>
            })
        }
    }

    let context = useContext(SlackContext);
    let { user, rooms, room } = context.state;
    return (
        <>
            <div className="logged-user">
                <Avatar src={user.avatarURL}></Avatar>
                <span>{user.name}</span>
                <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    onLogoutSuccess={onLogoutSuccess}
                    render={renderProps => (
                        <Tooltip placement="bottom" title="Logout" trigger="hover">
                            <Button type="link" onClick={renderProps.onClick} className="float-right">
                                <Icon type="poweroff" />
                            </Button>
                        </Tooltip>
                    )}
                >
                </GoogleLogout>
            </div>
            <Menu
                className           = "rooms-list"
                mode                = "inline"
                theme               = "dark"
                selectedKeys={[room ? room.id : process.env.REACT_APP_CHATKIT_GENERAL_ROOM]}
            >
                <MenuItemGroup key="g1" title="Channels" className="channel-group" id="channels">
                    {getRoomsList(context)}
                </MenuItemGroup>
                <Menu.Item className="add-channel" onClick={context.showAddChannel}>
                    <strong><Icon type="plus" />Add a channel</strong>
                </Menu.Item>
                <MenuItemGroup key="g2" title="Direct Message" className="channel-group" id="users">
                    {getUsersList(context)}
                </MenuItemGroup>
            </Menu>
        </>
    )
}

// Sidebar.propType = {
//     user           : PropTypes.object.isRequired,
//     rooms          : PropTypes.array.isRequired,
//     room           : PropTypes.object,
//     onLogoutSuccess: PropTypes.func.isRequired
// }

export default Sidebar