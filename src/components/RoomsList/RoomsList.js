import React from 'react'
import PropTypes from 'prop-types';
import { Icon, Menu } from 'antd';

const MenuItemGroup = Menu.ItemGroup;

const RoomsList = ({ room, rooms }) => {
    let getRoomsList = () => rooms.map(eachRoom => {
        return <Menu.Item key={eachRoom.id}>
            {(eachRoom.isPrivate) ? <Icon type="lock" style={{}} /> : <span>#</span>}
            {eachRoom.name}
        </Menu.Item>
    });

    return (
        <Menu
            className = "rooms-list"
            mode      = "inline"
            theme     = "dark"
            defaultSelectedKeys={[(room) ? room.id : '0']}
        >
         {getRoomsList()}
        </Menu>
    )
}


RoomsList.propTypes = {
    rooms: PropTypes.array.isRequired
}

export default RoomsList