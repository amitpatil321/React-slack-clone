import React, { useContext } from 'react'
import { Drawer, Collapse, Icon, Menu, Avatar, Card } from 'antd';
import moment from 'moment';
import filter from 'lodash/filter';

import { SlackContext } from 'store/store';
import { getUserName, getUserPic, isPrivateChat, getUserDetails, onlineStatus, roomTypeIcon } from 'utils/SlackUtils';
import './ChannelInfoDrawer.css';

const Panel = Collapse.Panel;
const { Meta } = Card;

const ChannelInfoDrawer = () => {
    let context = useContext(SlackContext)
    let { user, room } = context.state;
    let roomUser;

    if(isPrivateChat(room)){
        // Get user id, if nothing returned then user clicked on his own profile/name
        let userId = filter(room.userIds, id => id !== user.id)
        if (!userId.length) userId = user.id;
        roomUser = getUserDetails(room, userId);
    }

    let members = room.userIds.map((userId, index) => {
        return <Menu.Item key={index}>
            <Avatar src={getUserPic(room, userId)}></Avatar>
            <span>{getUserName(room, userId)}</span>
        </Menu.Item>
    })

    return <Drawer
        className    = "channel-info"
        title        = {<strong>About {isPrivateChat(room) ? " this conversation" : <>{roomTypeIcon(room)} {room.name}</>}</strong> }
        placement    = "right"
        width        = "250"
        closable     = {true}
        maskClosable = {true}
        visible      = {context.state.channelInfoVisible}
        onClose      = {context.hideDrawer}
        destroyOnClose
    >
        {isPrivateChat(room) ?
            <Card
                hoverable
                cover={<img alt={roomUser.name} src={roomUser.avatarURL} />}
            >
                <Meta title={roomUser.name} description={onlineStatus(roomUser)}/>
            </Card>
        :
            <Collapse bordered={false} expandIconPosition="right" defaultActiveKey={['1']}>
                <Panel key="1" header={<strong ><Icon type="info-circle" style={{ color: 'blue' }} /> Channel Details</strong>}>
                    <div id="channel-creator">
                        Created by {<strong>{(room.createdByUserId === user.id) ? "You" : getUserName(room, room.createdByUserId)}</strong>} on {moment(room.createdAt).format("MMM D, YYYY hh:mm A")}
                    </div>
                </Panel>
                <Panel header={<strong><Icon type="user" style={{ color: '#52c41a' }}/> {room.userIds.length} {(room.userIds.length == 1) ? "Member" : "Members"} </strong>} key="2">
                    <Menu className="channel-users">
                        {members}
                    </Menu>
                    <br />
                </Panel>
            </Collapse>
        }
    </Drawer>
}

export default ChannelInfoDrawer;