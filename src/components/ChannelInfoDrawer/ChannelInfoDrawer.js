import React from 'react'
import { Drawer, Collapse, Icon, Menu, Avatar } from 'antd';
import moment from 'moment';

import { Consumer } from '../../store/store';
import { getUserName, getUserPic } from '../../utils/SlackUtils';
import './ChannelInfoDrawer.css';

const Panel = Collapse.Panel;

const ChannelInfoDrawer = () => {

    return (
        <Consumer>
            { context => {
                let { user, room } = context.state;
                let members = room.userIds.map((userId, index) => {
                    return <Menu.Item key={index}>
                        <Avatar src={getUserPic(room, userId)}></Avatar>
                        <span>{getUserName(room, userId)}</span>
                    </Menu.Item>
                })

                return <Drawer
                    className    = "channel-info"
                    title        = {<strong>About #{room.name}</strong> }
                    placement    = "right"
                    width        = "250"
                    closable     = {true}
                    maskClosable = {true}
                    visible      = {context.state.channelInfoVisible}
                    onClose      = {context.hideDrawer}
                    destroyOnClose
                >
                    <Collapse bordered={false} expandIconPosition="right" >
                        <Panel header={<strong><Icon type="info-circle" style={{ color: 'blue' }} /> Channel Details</strong>} key="1">
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
                </Drawer>
            }}
        </Consumer>
        )
}

export default ChannelInfoDrawer;