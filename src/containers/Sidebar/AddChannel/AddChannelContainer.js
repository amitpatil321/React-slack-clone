import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';

import { joinRoom, hideAddChannel } from 'store/SlackActions';
import { getAllUsers, peopleJoinedMessage } from 'utils/SlackUtils';
import { createRoom, sendMessage } from 'utils/ChatKitUtil';
import AddChannel from 'components/Sidebar/AddChannel';

const Option = Select.Option;

class AddChannelContainer extends Component {
	state = {
		error: null,
		addChannel: false,
		channelName: '',
		validationError: false,
		isPrivate: false,
		selectedUsers: []
	};

	// Returns all users as dropdown value
	_getAllUsers = () => {
		let { user } = this.props;
		let allUsers = getAllUsers(user);
		if (allUsers) {
			return allUsers.map(({ id, name }) => {
				// List all users except logged in user, Coz he will be default member of channel
				if (user.id !== id) return <Option key={id}>{name}</Option>;
				else return null;
			});
		}
	};

	// Handle form submit
	_onSubmitForm = event => {
		event.preventDefault();
		let { user, room, rooms } = this.props;
		let { channelName, isPrivate, selectedUsers } = this.state;
		// Check if room with same name already exists in channels user name or user group
		let channelExists = rooms.filter(
			room => room.name.toLowerCase() === channelName.trim().toLowerCase()
		);
		let userExists = Object.values(room.userStore.users).filter(
			user => user.name.toLowerCase() === channelName.trim().toLowerCase()
		);

		console.log(channelExists[0], userExists[0]);

		if (!channelExists[0] && !userExists[0]) {
			if (channelName.trim().length) {
				// Create room
				createRoom(
					user,
					channelName.toLowerCase(),
					selectedUsers,
					isPrivate,
					null,
					newRoom => {
						// Create message and post to new channel
						let message = peopleJoinedMessage(
							user,
							newRoom.name,
							selectedUsers,
							'NEW'
						);

						if (message)
							// send messge to newly created channel
							sendMessage(
								user,
								newRoom.id,
								message,
								() => {},
								() => {
									console.log('Error sendind people joined message');
								}
							);
						setTimeout(() => {
							// Set newly created channel as active channel
							this.props.joinRoom(newRoom);
							// document.querySelector(".channel-"+newRoom.id).click()
						}, 500);
						// clear form text
						this.setState({
							channelName: '',
							isPrivate: false,
							selectedUsers: [],
							error: null
						});
						// Hide modal
						this._closeModal();
					},
					error => {
						this.setState({ error: error.error });
					}
				);
			} else this.setState({ validationError: true });
		} else
			this.setState({
				error: "name '" + channelName + "' is already taken by channel or user."
			});
	};
	_closeModal = () => {
		// Clear validation error and form on modal close
		this.setState({
			validationError: false,
			error: null,
			channelName: '',
			selectedUsers: [],
			isPrivate: false
		});
		this.props.hideAddChannel();
	};
	_onInputChange = event => this.setState({ channelName: event.target.value });
	_onCheckboxChange = event =>
		this.setState({ isPrivate: event.target.checked });
	_onHandleDropdownChange = selectedUsers =>
		this.setState({ selectedUsers: selectedUsers });
	render() {
		let { addChannelModalVisible } = this.props;
		return (
			<AddChannel
				error={this.state.error}
				addChannelModalVisible={addChannelModalVisible}
				allUsers={this._getAllUsers()}
				validationError={this.state.validationError}
				channelName={this.state.channelName}
				selectedUsers={this.state.selectedUsers}
				isPrivate={this.state.isPrivate}
				hideModal={this._closeModal}
				onSubmit={this._onSubmitForm}
				onInputChange={this._onInputChange}
				handleDropdownChange={this._onHandleDropdownChange}
				onCheckboxChange={this._onCheckboxChange}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		room: state.room,
		rooms: state.rooms,
		addChannelModalVisible: state.addChannelModalVisible
	};
};

const mapDispatchToProps = dispatch => {
	return {
		joinRoom: room => dispatch(joinRoom(room)),
		hideAddChannel: () => dispatch(hideAddChannel())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddChannelContainer);
