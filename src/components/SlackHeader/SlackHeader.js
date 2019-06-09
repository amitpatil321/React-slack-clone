import React, { Component } from 'react'
import { Button, Row, Col, Icon } from 'antd';
import { Consumer } from 'store/store';
import { filter } from 'lodash';

import HeaderOptions from 'containers/SlackHeader/HeaderOptions';
import './SlackHeader.css';
import { getUserName } from 'utils/SlackUtils';

class SlackHeader extends Component {
    render() {
        return (
            <Consumer>
            {(context) => {
                let { room, user } = context.state;
                let roomName, users;
                if (room) {
                    if (room.customData === undefined || room.customData.privateChat === false){
                        users = [<Icon type="user" key={room.id} onClick={context.showDrawer} />, room.userIds.length]
                        roomName = "#" + room.name
                    }else{
                        // Find id which is not same as logged user id
                        let receiver = filter(room.customData.userIds, (id) => id !== user.id);
                        if (receiver.length)
                            roomName = getUserName(room, receiver);
                        else{
                            // It means sender and receiver is same
                            roomName = user.name + " (you)";
                            users = "";
                        }
                    }
                }
                return (
                    <>
                        <Row>
                            <Col span={20}>
                                <span className="room-title">{roomName}</span> <span className="seperator"> </span><Button type="link" shape="circle"><small>{users}</small></Button>
                            </Col>
                            <Col span={4} className="room-settings">
                                <HeaderOptions />
                            </Col>
                        </Row>
                    </>
                )
            }}
            </Consumer>
        )
    }
}

export default SlackHeader;