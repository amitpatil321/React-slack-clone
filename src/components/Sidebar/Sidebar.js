import React from 'react';
import { Avatar, Tooltip, Button, Icon, Menu } from 'antd'
import PropTypes from 'prop-types';
import GoogleLogout from 'react-google-login';
import { filter, sortBy } from 'lodash';

import { Consumer } from 'store/store';
import { roomTypeIcon } from 'utils/SlackUtils';
import './Sidebar.css';

const MenuItemGroup = Menu.ItemGroup;

const Sidebar = ({ onSelection, onLogoutSuccess }) => {
    let getRoomsList = (rooms) => sortBy(rooms, each => each.name).map(room => {
        // Ignore private chat room
        if(!room.customData || room.customData.privateChat !== true)
            return <Menu.Item key={room.id} onClick={() => onSelection(room)} className={"channel-"+room.id}>
                {roomTypeIcon(room)} {room.name}
            </Menu.Item>
    });

    let getUsersList = (rooms) => {
        // List all users
        let general = filter(rooms, { id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM });
        if (general.length) {
            return sortBy(general[0].users, each => each.name.toLowerCase()).map(user => {
                return <Menu.Item key={user.id} onClick={() => onSelection(user)}>
                    <span className={"online-status " + user.presence.state}></span>  {user.name}
                </Menu.Item>
            })
        }
    }

    return (
        <Consumer>
            {(context) => {
                let { user, rooms, room } = context.state
                return <>
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
                            {getRoomsList(rooms)}
                        </MenuItemGroup>
                        <Menu.Item className="add-channel" onClick={context.showAddChannel}>
                            <strong><Icon type="plus" />Add a channel</strong>
                        </Menu.Item>
                        <MenuItemGroup key="g2" title="Direct Message" className="channel-group" id="users">
                            {getUsersList(rooms)}
                        </MenuItemGroup>
                    </Menu>
                </>
              }
            }
        </Consumer>
    )
}

// Sidebar.propType = {
//     user           : PropTypes.object.isRequired,
//     rooms          : PropTypes.array.isRequired,
//     room           : PropTypes.object,
//     onLogoutSuccess: PropTypes.func.isRequired
// }

export default Sidebar