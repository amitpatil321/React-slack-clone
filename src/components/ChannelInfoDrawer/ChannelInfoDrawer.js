import React from 'react';
import { Drawer, Collapse, Icon, Menu, Avatar, Card } from 'antd';
import moment from 'moment';
import { filter } from 'lodash';

import {
	getUserName,
	getUserPic,
	isPrivateChat,
	getUserDetails,
	onlineStatus,
	roomTypeIcon
} from 'utils/SlackUtils';
import './ChannelInfoDrawer.css';

const { Panel } = Collapse;
const { Meta } = Card;

const ChannelInfoDrawer = ({
	user,
	room,
	channelInfoVisible,
	hideChannelInfoDrawer
}) => {

	let roomUser;

	if (isPrivateChat(room)) {
		// Get user id, if nothing returned then user clicked on his own profile/name
		let userId = filter(room.userIds, id => id !== user.id);
		if (!userId.length) userId = user.id;
		roomUser = getUserDetails(room, userId);
	}

	const members = room.userIds.map((userId, index) => (
		<Menu.Item key={index}>
			<Avatar src={getUserPic(room, userId)} />
			<span>{getUserName(room, userId)}</span>
		</Menu.Item>
	));

	return (
		<Drawer
			className="channel-info"
			title={
				<strong>
					About&nbsp;
					{isPrivateChat(room) ? (
						' this conversation'
					) : (
						<>
							{roomTypeIcon(room)}
							{room.name}
						</>
					)}
				</strong>
			}
			placement="right"
			width="250"
			closable
			maskClosable
			visible={channelInfoVisible}
			onClose={hideChannelInfoDrawer}
			destroyOnClose
		>
			{isPrivateChat(room) ? (
				<Card
					hoverable
					cover={<img alt={roomUser.name} src={roomUser.avatarURL} />}
				>
					<Meta title={roomUser.name} description={onlineStatus(roomUser)} />
				</Card>
			) : (
				<Collapse
					bordered={false}
					expandIconPosition="right"
					defaultActiveKey={['1']}
				>
					<Panel
						key="1"
						header={
							<strong>
								<Icon type="info-circle" style={{ color: 'blue' }} />
								&nbsp; Channel Details
							</strong>
						}
					>
						<div id="channel-creator">
							Created by &nbsp;
							{
								<strong>
									{room.createdByUserId === user.id
										? 'You'
										: getUserName(room, room.createdByUserId)}
								</strong>
							}&nbsp;
							on &nbsp; {moment(room.createdAt).format('MMM D, YYYY hh:mm A')}
						</div>
					</Panel>
					<Panel
						header={
							<strong>
								<Icon type="user" style={{ color: '#52c41a' }} />
								&nbsp;{room.userIds.length}
								&nbsp;{room.userIds.length === 1 ? 'Member' : 'Members'}
							</strong>
						}
						key="2"
					>
						<Menu className="channel-users">{members}</Menu>
						<br />
					</Panel>
				</Collapse>
			)}
		</Drawer>
	);
};

export default ChannelInfoDrawer;
