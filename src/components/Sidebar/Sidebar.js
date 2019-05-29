import React from 'react';
import { Avatar, Tooltip, Button, Icon, Menu } from 'antd'
import PropTypes from 'prop-types';
import GoogleLogout from 'react-google-login';
import { filter } from 'lodash';

import '../Sidebar/Sidebar.css';

const MenuItemGroup = Menu.ItemGroup;

const Sidebar = ({ user, rooms, room, onLogoutSuccess }) => {
    let getRoomsList = () => rooms.map(({id, isPrivate, name}) => {
        return <Menu.Item key={id} >
            {(isPrivate) ? <Icon type="lock" style={{}} /> : <span>#</span>}
            {name}
        </Menu.Item>
    });

    let getUsersList = () => {
        // List all users
        let general = filter(rooms, { id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM });
        if (general.length) {
            return general[0].users.map(({ id, name, presence}) => {
                return <Menu.Item key={id} >
                    <span className={"online-status " + presence.state}></span>  {name}
                </Menu.Item>
            })
        }
    }

    return (
        <>
            <div className="logged-user">
                <Avatar src={user.imageUrl}></Avatar>
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
                defaultSelectedKeys={[room ? room.id : process.env.REACT_APP_CHATKIT_GENERAL_ROOM]}
            >
                <MenuItemGroup key="g1" title="Channels" className="channel-group" id="channels">
                    {getRoomsList()}
                </MenuItemGroup>
                <Menu.Item className="add-channel">
                    <strong><Icon type="plus" />Add a channel</strong>
                </Menu.Item>

                <MenuItemGroup key="g2" title="Direct Message" className="channel-group" id="users">
                    {getUsersList()}
                </MenuItemGroup>
            </Menu>

        </>
    )
}

Sidebar.propType = {
    user           : PropTypes.object.isRequired,
    rooms          : PropTypes.array.isRequired,
    room           : PropTypes.object,
    onLogoutSuccess: PropTypes.func.isRequired
}

export default Sidebar