import React from 'react';
import { Avatar, Tooltip, Button, Icon, Menu, Badge } from 'antd';
// import PropTypes from 'prop-types';
import { filter, sortBy } from 'lodash';

import {
	roomTypeIcon,
	canShowUnreadBadge,
	getDirectChatRoom
} from 'utils/SlackUtils';
import './Sidebar.css';

const MenuItemGroup = Menu.ItemGroup;

const Sidebar = ({
	user,
	room,
	rooms,
	messages,
	onSelection,
	onLogoutSuccess,
	showAddChannel
}) => {
	let getRoomsList = () => {
		return sortBy(rooms, each => each.name).map(eachRoom => {
			let { id, name } = eachRoom;
			// Show unread message flag, only if there are unread messages and message was not sent by same/logged in user and user is not in same room
			let hasUnread = canShowUnreadBadge(user, room, eachRoom, messages)
				? 'unread-message'
				: '';
			// Ignore private chat room
			if (!eachRoom.customData || eachRoom.customData.privateChat !== true) {
				return (
					<Menu.Item
						key={id}
						onClick={() => onSelection(eachRoom)}
						className={'channel-' + id + ' ' + hasUnread}
					>
						{roomTypeIcon(eachRoom)} {name}
					</Menu.Item>
				);
			} else return null;
		});
	};

	let getUsersList = () => {
		let unreadCount;
		// List all users
		let general = filter(rooms, {
			id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM
		});
		if (general.length) {
			return sortBy(general[0].users, each => each.name.toLowerCase()).map(
				eachUser => {
					let privateRoom = getDirectChatRoom(user, rooms, eachUser.id)[0];
					if (privateRoom) {
						unreadCount = canShowUnreadBadge(
							user,
							room,
							privateRoom,
							messages
						) ? (
								<Badge
									className="float-right"
									count={privateRoom.unreadCount}
									overflowCount={10}
								></Badge>
							) : null;
					}
					return (
						<Menu.Item
							key={privateRoom ? privateRoom.id : eachUser.id}
							onClick={() => onSelection(eachUser)}
							className={
								'channel-' + (privateRoom ? privateRoom.id : eachUser.id)
							}
						>
							<span
								className={'online-status ' + eachUser.presence.state}
							></span>
							{eachUser.name} {eachUser.id === user.id && <small>(you)</small>}
							{unreadCount}
						</Menu.Item>
					);
				}
			);
		}
	};

	return (
		<>
			<div className="logged-user">
				<Avatar src={user.avatarURL}></Avatar>
				<span>{user.name}</span>
  {/* <GoogleLogout
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					onLogoutSuccess={onLogoutSuccess}
					render={renderProps => (
						<Tooltip placement="bottom" title="Logout" trigger="hover">
							<Button
								type="link"
								onClick={renderProps.onClick}
								className="float-right"
							>
								<Icon type="poweroff" />
							</Button>
						</Tooltip>
					)}
				></GoogleLogout> */}
				<Tooltip placement="bottom" title="Logout" trigger="hover">
					<Button type="link" onClick={onLogoutSuccess} className="float-right">
						<Icon type="poweroff" />
					</Button>
				</Tooltip>
			</div>
			<Menu
				className="rooms-list"
				mode="inline"
				theme="dark"
				selectedKeys={[
					room ? room.id : process.env.REACT_APP_CHATKIT_GENERAL_ROOM
				]}
			>
				<MenuItemGroup
					key="g1"
					title="Channels"
					className="channel-group"
					id="channels"
				>
					{getRoomsList()}
				</MenuItemGroup>
				<Menu.Item className="add-channel" onClick={showAddChannel}>
					<strong>
						<Icon type="plus" />
						Add a channel
					</strong>
				</Menu.Item>
				<MenuItemGroup
					key="g2"
					title="Direct Message"
					className="channel-group"
					id="users"
				>
					{getUsersList()}
				</MenuItemGroup>
			</Menu>
		</>
	);
};

// Sidebar.propType = {
//     user           : PropTypes.object.isRequired,
//     rooms          : PropTypes.array.isRequired,
//     room           : PropTypes.object,
//     onLogoutSuccess: PropTypes.func.isRequired
// }

export default Sidebar;
