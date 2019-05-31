import React, { Component, lazy, Suspense } from 'react'
import { Button, Row, Col, Icon } from 'antd';
import { Consumer } from '../../store/store';

import HeaderOptions from '../../containers/SlackHeader/HeaderOptions';
import './SlackHeader.css';

const AddPeopleModal = lazy(() => import('../../containers/SlackHeader/AddPeople'));
const RemovePeopleModal = lazy(() => import('../../containers/SlackHeader/RemovePeople'));

class SlackHeader extends Component {
    render() {
        return (
            <Consumer>
            {({state}) => {
                let { room } = state;
                let roomName, users;
                if (room) {
                    users = [<Icon type="user" key={room.id} />, room.userIds.length]
                    roomName = "#" + room.name
                }
                return (
                    <>
                        <Row>
                            <Col span={20}>
                                <strong>{roomName}</strong> <span className="seperator"> </span><Button type="link" shape="circle"><small>{users}</small></Button>
                            </Col>
                            <Col span={4} className="room-settings">
                                <HeaderOptions />
                            </Col>
                        </Row>
                        {/* We will load this lazy, Because no these components will be rarely used by user */}
                        <Suspense fallback={""}>
                            <AddPeopleModal />
                            <RemovePeopleModal />
                        </Suspense>
                    </>
                )
            }}
            </Consumer>
        )
    }
}

export default SlackHeader;