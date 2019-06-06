import React, { useContext } from 'react';
import { Modal, Input, Icon, Alert, List, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import ContentLoader from 'react-content-loader';

import { getUserName } from 'utils/SlackUtils';
import { SlackContext } from 'store/store';
import './ListChannels.css';

const ListChannels = ({ text, onChange, existingRooms, joinableRooms, onChannelClick, selected, gotoRoom, error }) => {
    let context = useContext(SlackContext);
    const isSelected = (room) => {
        return (selected.find(each => each.id == room.id) === undefined) ? false : true;
    }

    const description = (room) => {
        let author = (room.createdByUserId === context.state.user.id) ? "You" : getUserName(context.state.room, room.createdByUserId);
        return 'Created by ' + author +' on '+ moment(room.createdAt).format("MMM D, YYYY hh: mm A");
    }

    console.log(joinableRooms);

    return (
        <Modal
            title    = "Browse Channels"
            className= "list-channels"
            visible  = {context.state.listChannelsModalVisible}
            okText   = "Join"
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
                {(joinableRooms == null)  ?
                    <ContentLoader
                        height={160}
                        width={400}
                        speed={2}
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                    >
                        <rect x="5" y="15" rx="5" ry="5" width="128" height="7" />
                        <rect x="5" y="35" rx="5" ry="5" width="140" height="6" />
                        <rect x="159" y="35" rx="5" ry="5" width="85" height="6" />
                        <rect x="261" y="35" rx="5" ry="5" width="85" height="6" />

                        <rect x="5" y="60" rx="5" ry="5" width="128" height="7" />
                        <rect x="5" y="80" rx="5" ry="5" width="140" height="6" />
                        <rect x="159" y="80" rx="5" ry="5" width="85" height="6" />
                        <rect x="261" y="80" rx="5" ry="5" width="85" height="6" />

                        <rect x="5" y="105" rx="5" ry="5" width="128" height="7" />
                        <rect x="5" y="125" rx="5" ry="5" width="140" height="6" />
                        <rect x="159" y="125" rx="5" ry="5" width="85" height="6" />
                        <rect x="261" y="125" rx="5" ry="5" width="85" height="6" />
                    </ContentLoader>
                    :
                    <List
                        itemLayout="horizontal"
                        dataSource={joinableRooms}
                        renderItem={room => (
                            <List.Item
                                onClick={() => onChannelClick(room)}
                                className={(isSelected(room)) ? "selected" : null}
                            >
                                <List.Item.Meta
                                    title={ room.name }
                                    description={ description(room) }
                                />
                                <span><Icon type="check" /></span>
                            </List.Item>
                        )}
                    />
                }
                <br />
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
    selected       : PropTypes.array,
    onChannelClick : PropTypes.func,
    gotoRoom       : PropTypes.func,
    error          : PropTypes.string
}

SlackContext.Consumer.propTypes = {
    state: PropTypes.shape({
        showAddChannel : PropTypes.object.isRequired
    }).isRequired
};

export default ListChannels;
