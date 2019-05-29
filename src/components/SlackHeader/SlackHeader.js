import React, { Component } from 'react'
import { Button, Row, Col, Icon } from 'antd';

class SlackHeader extends Component {
    render() {
        let roomName, users;
        let { room } = this.props;
        if (room) {
            users = [<Icon type="user" key={room.id} />, room.userIds.length]
            roomName = "#" + room.name
        }

        return (
            <Row>
                <Col span={20}>
                    <strong>{roomName}</strong> <span className="seperator"> </span><Button type="link" shape="circle"><small>{users}</small></Button>
                </Col>
                <Col span={4} className="room-settings">
                    {/* <RoomOptions
                        room={room}
                        rooms={rooms}
                        user={user}
                    /> */}
                </Col>
            </Row>
        )
    }
}

export default SlackHeader;