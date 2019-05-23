import React from 'react';
import UserPicName from '../UserPicName';
import RoomsList from '../RoomsList';
import PropType from 'prop-types';

import '../Sidebar/Sidebar.css';

const Sidebar = ({ user, rooms, onLogoutSuccess }) => {
    return (
        <>
            <UserPicName
                user            = {user}
                onLogoutSuccess = {onLogoutSuccess}
            />
            <RoomsList rooms={rooms} />
        </>
    )
}

Sidebar.propType = {
    user : PropType.object.isRequired,
    rooms: PropType.array.isRequired,
    onLogoutSuccess : PropType.func.isRequired
}

export default Sidebar