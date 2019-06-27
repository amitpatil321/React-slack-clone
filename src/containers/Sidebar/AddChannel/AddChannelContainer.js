/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { joinRoom, hideAddChannel } from 'store/SlackActions';
import { getAllUsers, peopleJoinedMessage } from 'utils/SlackUtils';
import { createRoom, sendMessage } from 'utils/ChatKitUtil';
import AddChannel from 'components/Sidebar/AddChannel';

const { Option } = Select;

class AddChannelContainer extends Component {
	state = {
	  error: null,
	  channelName: '',
	  validationError: false,
	  isPrivate: false,
	  selectedUsers: [],
	};

	// Returns all users as dropdown value
	_getAllUsers = () => {
	  const { user } = this.props;
	  const allUsers = getAllUsers(user);
	  if (allUsers) {
	    return allUsers.map(({ id, name }) => {
	      // List all users except logged in user, Coz he will be default member of channel
	      if (user.id !== id) return <Option key={id}>{name}</Option>;
	      return null;
	    });
	  }
	};

	// Handle form submit
	_onSubmitForm = (event) => {
	  event.preventDefault();
	  const { user, room, rooms } = this.props;
	  const { channelName, isPrivate, selectedUsers } = this.state;
	  // Check if room with same name already exists in channels user name or user group
	  const channelExists = rooms.filter(
	    room => room.name.toLowerCase() === channelName.trim().toLowerCase(),
	  );
	  const userExists = Object.values(room.userStore.users).filter(
	    user => user.name.toLowerCase() === channelName.trim().toLowerCase(),
	  );

	  if (!channelExists[0] && !userExists[0]) {
	    if (channelName.trim().length) {
	      // Create room
	      createRoom(
	        user,
	        channelName.toLowerCase(),
	        selectedUsers,
	        isPrivate,
	        null,
	        (newRoom) => {
	          // Create message and post to new channel
	          const message = peopleJoinedMessage(
	            user,
	            newRoom.name,
	            selectedUsers,
	            'NEW',
	          );

	          if (message)
	          // send messge to newly created channel
	            {
	            sendMessage(
	            user,
	            newRoom.id,
	            message,
	            () => {},
	            () => {
	              console.log('Error sendind people joined message');
	            },
	          );
	          }
	          setTimeout(() => {
	            const { joinRoom } = this.props;
	            // Set newly created channel as active channel
	            joinRoom(newRoom);
	            // document.querySelector(".channel-"+newRoom.id).click()
	          }, 500);
	          // clear form text
	          this.setState({
	            channelName: '',
	            isPrivate: false,
	            selectedUsers: [],
	            error: null,
	          });
	          // Hide modal
	          this._closeModal();
	        },
	        (error) => {
	          this.setState({ error: error.error });
	        },
	      );
	    } else this.setState({ validationError: true });
	  } else {
	    this.setState({
	    error: `name '${channelName}' is already taken by channel or user.`,
	  });
	  }
	};

	_closeModal = () => {
	  const { hideAddChannel } = this.props;
	  // Clear validation error and form on modal close
	  this.setState({
	    validationError: false,
	    error: null,
	    channelName: '',
	    selectedUsers: [],
	    isPrivate: false,
	  });
	  hideAddChannel();
	};

	_onInputChange = event => this.setState({ channelName: event.target.value });

	_onCheckboxChange = event => this.setState({ isPrivate: event.target.checked });

	_onHandleDropdownChange = selectedUsers => this.setState({ selectedUsers });

	render() {
	  const {
	    validationError, channelName, selectedUsers, isPrivate, error,
	  } = this.state;
	  const { addChannelModalVisible } = this.props;
	  return (
  <AddChannel
    error={error}
    addChannelModalVisible={addChannelModalVisible}
    allUsers={this._getAllUsers()}
    validationError={validationError}
    channelName={channelName}
    selectedUsers={selectedUsers}
    isPrivate={isPrivate}
    hideModal={this._closeModal}
    onSubmit={this._onSubmitForm}
    onInputChange={this._onInputChange}
    handleDropdownChange={this._onHandleDropdownChange}
    onCheckboxChange={this._onCheckboxChange}
  />
	  );
	}
}

const mapStateToProps = state => ({
  user: state.user,
  room: state.room,
  rooms: state.rooms,
  addChannelModalVisible: state.addChannelModalVisible,
});

const mapDispatchToProps = dispatch => ({
  joinRoom: room => dispatch(joinRoom(room)),
  hideAddChannel: () => dispatch(hideAddChannel()),
});

AddChannelContainer.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
  joinRoom: PropTypes.func.isRequired,
  hideAddChannel: PropTypes.func.isRequired,
  addChannelModalVisible: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddChannelContainer);
