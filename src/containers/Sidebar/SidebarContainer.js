import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	joinRoom,
	showLoading,
	showAddChannel,
	hideLoading,
	showListChannels
} from 'store/SlackActions';
import { getDirectChatRoom } from 'utils/SlackUtils';
import { createRoom } from 'utils/ChatKitUtil';
import Notification from 'components/Notification';

import Sidebar from 'components/Sidebar';

class SidebarContainer extends Component {
	componentDidMount() {
		// Bind click event to "channels" word
		document
			.querySelector('#channels .ant-menu-item-group-title')
			.addEventListener('click', this.props.showListChannels);
	}

	_onLogoutSuccess = () => {
		console.log('On logout Success');
	};

	_onSelection = item => {
		let { user, rooms } = this.props;
		// Check if its a room or direct chat?
		if (item.avatarURL === undefined) this.props.joinRoom(item);
		else {
			// check if room exists for logged in user and clicked user ?
			let findRoom = getDirectChatRoom(user, rooms, item.id);
			if (findRoom.length) {
				this.props.joinRoom(findRoom[0]);
			} else {
				let { user } = this.props;
				let roomUsers = [user.id, item.id].sort().join('');
				this.props.showLoading('Wait a moment!');
				// Room doesnt exists, Lets create new room for them
				createRoom(
					user,
					roomUsers,
					[user.id, item.id],
					true,
					{ privateChat: true, userIds: [user.id, item.id].sort() },
					newRoom => {
						this.props.joinRoom(newRoom);
						this.props.hideLoading();
					},
					error => {
						Notification(
							'error',
							'Error',
							'Error creating private room, Please try again!'
						);
					}
				);
			}
		}
	};

	render() {
		let { user, room, rooms, messages, showAddChannel, showListChannels } = this.props;
		return (
			<Sidebar
				user={user}
				room={room}
				rooms={rooms}
				messages={messages}
				onLogoutSuccess={this._onLogoutSuccess}
				onSelection={this._onSelection}
				showAddChannel={showAddChannel}
				showListChannels={showListChannels}
			/>
		);
	}
}

const mapStateToProps = ({ user, room, rooms, messages }) => {
	return {
		user,
		room,
		rooms,
		messages
	};
};

const mapDispatchToProps = dispatch => {
	return {
		showListChannels: () => dispatch(showListChannels()),
		showAddChannel: () => dispatch(showAddChannel()),
		showLoading: msg => dispatch(showLoading(msg)),
		hideLoading: () => dispatch(hideLoading()),
		joinRoom: room => dispatch(joinRoom(room))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SidebarContainer);
