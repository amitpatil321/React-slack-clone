import React from 'react';
import { filter, orderBy } from 'lodash';
import { Icon } from 'antd';

// TODO : Instead of getting rooms, currentRoom as 2 params, do it like  ({ rooms, room }) in hasRoom function
// Returns list of users which are not a member of room yet
export function getJoinableUsers(rooms, currentRoom) {
	let allUsers = [];
	// Find general room, as We are storing all the users in 'general' room
	let generalRoom = filter(rooms, {
		id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM
	});
	if (generalRoom.length)
		// List all users except which are already member of this room
		generalRoom[0].users.forEach(eachUser => {
			if (!currentRoom.userIds.includes(eachUser.id.toString()))
				allUsers.push(eachUser);
		});
	return allUsers;
}

// Returns list of users which are member of room
export function getRoomUsers(rooms, currentRoom) {
	let allUsers = [];
	// Find general room, as We are storing all the users in 'general' room
	let generalRoom = filter(rooms, {
		id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM
	});
	if (generalRoom.length)
		// List all users except which are already member of this room and loggedin user
		generalRoom[0].users.forEach(eachUser => {
			if (currentRoom.userIds.includes(eachUser.id.toString()))
				allUsers.push(eachUser);
		});
	return allUsers;
}

// Creates a message to be posted in channel
export function peopleJoinedMessage(currentUser, channel, people, type) {
	let message = '',
		myName = '';
	// Convert all ids to names
	let peopleNames = people.map(id => currentUser.userStore.users[id].name);

	// Let room/channel know about new members
	if (currentUser !== undefined) {
		myName = currentUser.name;

		if (people.length) {
			if (people.length === 1) message = peopleNames[0];
			else if (people.length === 2) message = peopleNames.join(' and ');
			else if (people.length > 2) {
				let last = peopleNames.pop();
				message = peopleNames.join(', ') + ' and ' + last;
			}
			if (type === 'NEW')
				return ' joined #' + channel + ' along with ' + message;
			else return myName + ' added ' + message + ' to #' + channel;
		}
		// User created channel but didnt add anyone
		else return 'joined #' + channel;
	}
}

// Returns list of all the available users
export function getAllUsers(user) {
	// Find general room as We are storing all the users in 'general' room
	let generalRoom = filter(user.rooms, {
		id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM
	});
	if (generalRoom.length)
		return orderBy(generalRoom[0].users, ['name'], ['asc']);
}

// Returns list of all joinable(public) available rooms
export function getSubscribedRooms(rooms) {
	// Find general room as We are storing all the users in 'general' room
	// let generalRoom = filter(user.rooms, { id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM })
	// if (generalRoom.length)
	//     return orderBy(generalRoom[0].users, ['name'], ['asc']);
}

export function getUserName(room, id) {
	return room.userStore.users[id].name;
}
export function getUserPic(room, id) {
	return room.userStore.users[id].avatarURL;
}

export function getUserDetails(room, id) {
	return room.userStore.users[id];
}

export function setGeneralSelected() {
	// Set `general` channel selected
	document
		.querySelector('.channel-' + process.env.REACT_APP_CHATKIT_GENERAL_ROOM)
		.click();
}

// Check if current user and clicked user has a private room?
export function getDirectChatRoom(user, rooms, receiverId) {
	let roomUsers = [user.id, receiverId];
	// find if room already exists for this users ?
	return filter(rooms, {
		name: roomUsers.sort().join(''),
		customData: { privateChat: true }
	});
}

// Checks if its a private chat or channel
export function isPrivateChat(room) {
	if (room && room.customData !== undefined && room.customData.privateChat)
		return true;
	return false;
}

// Returns true if ligged in user is chat admin
export function isAdmin(user) {
	return process.env.REACT_APP_CHATKIT_APP_ADMIN === user.id;
}

// Returns true if its a general room
export function isGeneralRoom(room) {
	return process.env.REACT_APP_CHATKIT_GENERAL_ROOM === room.id;
}

export function onlineStatus(user) {
	let status = user.presenceStore[user.id];
	return (
		<>
			<span className={'online-status ' + status}></span>{' '}
			<small>{status == 'online' ? 'active' : 'away'}</small>
		</>
	);
}

export function roomTypeIcon(room) {
	return room.isPrivate ? <Icon type="lock" /> : '#';
}

export function getLastMessageInRoom(room, messages) {
	if (room && messages && messages[room.id] !== undefined) {
		let msgArray = Object.values(messages[room.id]);
		return msgArray[msgArray.length - 1];
	}
	return false;
}

{
	/* Show badge only if
    - There are unread messages
    - Last message wasn't sent by logged in user (that means he has read old message)
    - and he's not already viewing same room where new message came
*/
}
export function canShowUnreadBadge(user, room, chatRoom, messages) {
	return (
		chatRoom &&
		chatRoom.unreadCount &&
		getLastMessageInRoom(chatRoom, messages).senderId !== user.id &&
		chatRoom.id !== room.id
	);
}
