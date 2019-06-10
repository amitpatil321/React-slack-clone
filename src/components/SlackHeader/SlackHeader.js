import React, { useContext } from 'react'
import { Button, Row, Col, Icon } from 'antd';
import { SlackContext } from 'store/store';
import { filter } from 'lodash';

import HeaderOptions from 'containers/SlackHeader/HeaderOptions';
import './SlackHeader.css';
import { getUserName, onlineStatus, getUserDetails, roomTypeIcon } from 'utils/SlackUtils';

const SlackHeader = () => {
    let context = useContext(SlackContext);
    let { user, room } = context.state;
    let roomName, users;
    // Check if its a channel or private chat header?
    if (room.customData === undefined || room.customData.privateChat === false) {
        users = [<Icon type="user" key={room.id} onClick={context.showDrawer} />, room.userIds.length]
        roomName = <>{roomTypeIcon(room)}{room.name}</>
    } else {
        // Find id which is not same as logged user id
        let receiver = filter(room.customData.userIds, (id) => id !== user.id);
        if (receiver.length)
            roomName = getUserName(room, receiver);
        else {
            // It means sender and receiver is same
            receiver = user.id;
            roomName = user.name + " (you)";
        }
        users = onlineStatus(getUserDetails(room, receiver));
    }

    return (
        <Row>
            <Col span={20}>
                <span className="room-title">{roomName}</span> <span className="seperator"> </span><Button type="link" shape="circle"><small>{users}</small></Button>
            </Col>
            <Col span={4} className="room-settings">
                <HeaderOptions />
            </Col>
        </Row>
    )
}

export default SlackHeader;