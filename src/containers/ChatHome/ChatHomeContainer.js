/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { uniqBy, filter } from 'lodash';
import { PropTypes } from 'prop-types';

import {
  connected,
  updateRooms,
  setMessages,
  currentUser,
  joinRoom,
  showChannelInfoDrawer,
} from 'store/SlackActions';
import ChatKit from 'Chatkit';
import ChatHome from 'components/ChatHome';
import Notification from 'components/Notification';
import { subscribeToRoom, removeUserFromRoom } from 'utils/ChatKitUtil';
import { setGeneralSelected } from 'utils/SlackUtils';

// TODO : Improve performance of all components
// TDOD : Show no internet timeout screen in the beginning
// TODO : Add prop types again
// TODO : Test all errors, and make sure they get printed properly
// TODO : Add comments and function param description etc like @param
// TODO : Replace moment.js with some light weight library or plain javascript code
class ChatHomeContainer extends Component {
	actions = {
	  connected: rooms => this.props.connected(rooms), // this.setState({ rooms, chatkitReady: true }),
	  refresh: () => this.forceUpdate(),
	  isTyping: () => console.log('isTyping'),
	  notTyping: () => console.log('notTyping'),
	  subscribeToRoom: (rooms) => {
	    // Add room in rooms array and then remove duplicates.
	    const allRooms = uniqBy([...this.props.rooms, rooms], room => room.id);
	    this.props.updateRooms(allRooms);
	    // Subscribe current user to newly created room to receive new messages
	    subscribeToRoom(this.props.user, rooms.id, {
	      onMessage: this.actions.addMessage,
	    });
	  },
	  // Remove room from rooms array
	  removedFromRoom: (removedRoom) => {
	    const { room, rooms } = this.props;
	    // If current room is the removed one then goto general room
	    if (removedRoom.id === room.id) {
	      this.props.joinRoom(
	      rooms.find(
	          thisRoom => thisRoom.id === process.env.REACT_APP_CHATKIT_GENERAL_ROOM,
	      ),
	    );
	    }
	    this.props.updateRooms(
	      filter(rooms, eachRoom => eachRoom.id !== removedRoom.id),
	    );
	  },
	  // setUserPresence doesnt cause re-render so we forcefully update the view
	  setUserPresence: () => this.forceUpdate(),
	  addMessage: (message) => {
	    setTimeout(() => {
	      this.props.setMessages(message);
	    }, 200);
	  },
	  setUser: user => this.props.currentUser(user),
	  joinRoom: room => this.props.joinRoom(room), // Set current room
	  roomDeleted: room => this.actions.removedFromRoom(room), // Remove room from rooms list
	  error: error => this.setState({ error }),
	};

	componentDidMount() {
	  // TODO : Check if .env file is missing? and handle error accordingly
	  const storageUser = JSON.parse(localStorage.getItem('slack'));
	  if (storageUser && storageUser.googleId) {
	    ChatKit(JSON.parse(localStorage.getItem('slack')).googleId, this.actions);
	  }
	}

	// Leave room
	_leaveRoom = () => {
	  const { user, room } = this.state;
	  // LeaveRoom API doesnt have any hook so we are using removeuser API method
	  removeUserFromRoom(
	    user,
	    room.id,
	    user.id,
	    () => setGeneralSelected(),
	    err => Notification('error', 'Error leaving channel', err),
	  );
	};

	// TODO : Impliment should component update with deep object comaprison for cyclic objects to improve performance
	// shouldComponentUpdate(nextProps, nextState){
	//     let { user, room, rooms } = this.state;
	//     if (Object.keys(user).length &&
	//         room !== null &&
	//         rooms.length &&
	//         !isEqual(this.state, nextState)
	//     )
	//         return true
	//     return false
	// }

	render() {
	  const storageUser = JSON.parse(localStorage.getItem('slack'));
	  const {
	    user,
	    room,
	    rooms,
	    messages,
	    showChannelInfoDrawer,
	    isLoading,
	    error,
	  } = this.props;

	  if (!storageUser || !storageUser.googleId) {
	    return <Redirect to="/login" />;
	  }
	  return (
  <ChatHome
    user={user}
    room={room}
    rooms={rooms}
    messages={messages}
    showChannelInfoDrawer={showChannelInfoDrawer}
    isLoading={isLoading}
    error={error}
  />
	  );
	}
}

const mapStateToProps = state => ({
  chatkitReady: state.chatkitReady,
  user: state.user,
  room: state.room,
  rooms: state.rooms,
  messages: state.messages,
  channelInfoVisible: state.channelInfoVisible,
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  connected: rooms => dispatch(connected(rooms)),
  updateRooms: rooms => dispatch(updateRooms(rooms)),
  currentUser: user => dispatch(currentUser(user)),
  joinRoom: room => dispatch(joinRoom(room)),
  setMessages: messages => dispatch(setMessages(messages)),
  showChannelInfoDrawer: () => dispatch(showChannelInfoDrawer()),
});

ChatHomeContainer.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
  messages: PropTypes.object.isRequired,
  showChannelInfoDrawer: PropTypes.func.isRequired,
  isLoading: PropTypes.object.isRequired,
  error: PropTypes.string,
};

ChatHomeContainer.defaultProps = {
  error: null,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatHomeContainer);
