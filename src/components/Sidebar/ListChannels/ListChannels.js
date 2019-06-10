import React, { useContext } from 'react';
import { Modal, Input, Icon, Alert, List, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import ContentLoader from 'react-content-loader';

import { getUserName } from 'utils/SlackUtils';
import { SlackContext } from 'store/store';
import './ListChannels.css';

const ListChannels = ({ text, onChange, joinableRooms, existingRooms, joinRoom, error }) => {
    let context = useContext(SlackContext);

    // Filter absed on search string
    if (text){
        existingRooms = existingRooms.filter(each => each.name.toUpperCase().startsWith(text.toUpperCase()));
        joinableRooms = joinableRooms.filter(each => each.name.toUpperCase().startsWith(text.toUpperCase()));
    }

    const description = (room) => {
        let author = (room.createdByUserId === context.state.user.id) ? "You" : getUserName(context.state.room, room.createdByUserId);
        return 'Created by ' + author +' on '+ moment(room.createdAt).format("MMM D, YYYY hh: mm A");
    }

    return (
        <Modal
            title    = "Browse Channels"
            className= "list-channels"
            visible  = {context.state.listChannelsModalVisible}
            onCancel = {context.hideListChannels}
            style    = {{ top : "5%" }}
            destroyOnClose = {true}
        >
            {(error) ? <><Alert message={error} type="error" showIcon /> <br /> </> : ''}
            <Row>
                <Col span={17}>
                    <Input
                        value={text}
                        placeholder="Search Channels"
                        prefix={<Icon type="search" />}
                        onChange={onChange}
                    />
                </Col>
                <Col span={6} className="float-right">
                    <Button type="primary" onClick={ () => { context.hideListChannels(); context.showAddChannel() }}>Create Channel</Button>
                </Col>
            </Row>

            <br/>
            <div className="channels-list">
                <div className="chann-divider">Channels you can join</div>
                {joinableRooms ?
                    <List
                        itemLayout="horizontal"
                        dataSource={joinableRooms}
                        renderItem={room => (
                            <List.Item>
                                <List.Item.Meta
                                    title={room.name}
                                    description={description(room)}
                                />
                                <span onClick={() => {joinRoom(room)}}>
                                    <Button type="primary" size="small">Join <Icon type="user-add" /></Button>
                                </span>
                            </List.Item>
                        )}
                    />
                : null }
                <div className="chann-divider">Channels you belong to</div>
                <List
                    itemLayout="horizontal"
                    dataSource={existingRooms}
                    renderItem={room => (
                        <List.Item onClick={() => { context.hideListChannels(); context.joinRoom(room); }}>
                            <List.Item.Meta
                                title={room.name}
                                description={description(room)}
                            />
                            <span><Icon type="enter" /></span>
                        </List.Item>
                    )}
                />
                <br />
            </div>
        </Modal>
    )
}

ListChannels.propTypes = {
    text           : PropTypes.string,
    onChange       : PropTypes.func,
    existingRooms  : PropTypes.array,
    joinableRooms  : PropTypes.array,
    error          : PropTypes.string
}

SlackContext.Consumer.propTypes = {
    state: PropTypes.shape({
        showAddChannel : PropTypes.object.isRequired
    }).isRequired
};

export default ListChannels;
