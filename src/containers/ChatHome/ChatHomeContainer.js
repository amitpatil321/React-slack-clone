import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { uniqBy, filter } from 'lodash';

import { connected, updateRooms, setMessages, currentUser, joinRoom, showChannelInfoDrawer, hideChannelInfoDrawer } from 'store/SlackActions';
import ChatKit from 'Chatkit';
import ChatHome from 'components/ChatHome';
import Notification from 'components/Notification';
import { subscribeToRoom, removeUserFromRoom } from 'utils/ChatKitUtil';
import { setGeneralSelected } from 'utils/SlackUtils';

//TODO : Delete channel feature not completed yet
//TODO : Show unread message badge - DONE
//TODO : Improve performance of all components
//TDOD : Handle no internet connection error - DONE
//TDOD : Show no internet timeout screen in the beginning
//TODO : Add prop types again
//TODO : repalce <Consumer></Consumer> with useContext  :( - DONE
//TODO : Remove all ../ from path as we now have .env node_path settings - DONE
//TODO : Test all errors, and make sure they get printed properly
//TODO : Add comments and function param description etc like @param
//TODO : On clicking user, "Selected" class is not getting applied to it - DONE
//TODO : Replace moment.js with some light weight library or plain javascript code
class ChatHomeContainer extends Component {

  actions = {
    connected: rooms => this.props.connected(rooms), // this.setState({ rooms, chatkitReady: true }),
    refresh: () => this.forceUpdate(),
    isTyping: () => console.log("isTyping"),
    notTyping: () => console.log("notTyping"),
    subscribeToRoom: rooms => {
      console.log(rooms);
      console.log("Subscribe/added to room");
      // Add room in rooms array and then remove duplicates.
      let allRooms = uniqBy([...this.props.rooms, rooms], function (room) { return room.id; });
      this.props.updateRooms(allRooms);
      // Subscribe current user to newly created room to receive new messages
      subscribeToRoom(this.props.user, rooms.id, {
        onMessage: this.actions.addMessage
      })
    },
    // Remove room from rooms array
    removedFromRoom: removedRoom => {
      let {room, rooms} = this.props;
      // If current room is the removed one then goto general room
      if (removedRoom.id === room.id) this.props.joinRoom(rooms.find(room => room.id === process.env.REACT_APP_CHATKIT_GENERAL_ROOM));
      this.props.updateRooms(filter(rooms, (eachRoom) => eachRoom.id !== removedRoom.id));
    },
    setUserPresence: () => this.forceUpdate(),  //setUserPresence doesnt cause re-render so we forcefully update the view
    addMessage: message => this.props.setMessages(message),
    setUser: user => this.props.currentUser(user),
    joinRoom: room => this.props.joinRoom(room), // Set current room
    roomDeleted: room => this.actions.removedFromRoom(room), // Remove room from rooms list
    readCursorUpdated: cursor => {
      // this.actions.joinRoom(this.state.rooms.find(room => room.id === cursor.roomId))
    },
    error: error => this.setState({ error: error })
  }

  componentDidMount() {
    // TODO : Check if .env file is missing? and handle error accordingly
    let storageUser = JSON.parse(localStorage.getItem("slack"));
    if (storageUser && storageUser.googleId)
      ChatKit(JSON.parse(localStorage.getItem("slack")).googleId, this.actions);
  }

  _showLoading = (message = null) => this.setState({ isLoading: { show: true, message: message } })
  _hideLoading = () => this.setState({ isLoading: { show: false, message: null } })

  // Handle show/hide add people modal
  _showAddPeopleModal = () => this.setState({ addPeopleModalVisible: true })
  _hideAddPeopleModal = () => this.setState({ addPeopleModalVisible: false })

  // Handle show/hide remove people modal
  _showRemovePeopleModal = () => this.setState({ remPeopleModalVisible: true })
  _hideRemovePeopleModal = () => this.setState({ remPeopleModalVisible: false })

  // Show hide channel info drawer
  // _showDrawer = () => this.setState({ channelInfoVisible: true })
  // _hideDrawer = () => this.setState({ channelInfoVisible: false })

  // Show/hide add channel modal
  // _showAddChannelModal = () => this.setState({ addChannelModalVisible: true })
  // _hideAddChannelModal = () => this.setState({ addChannelModalVisible: false })

  // Show/hide list channels modal
  _showListChannelsModal = () => this.setState({ listChannelsModalVisible: true })
  _hideListChannelsModal = () => this.setState({ listChannelsModalVisible: false })

  // Leave room
  _leaveRoom = () => {
    let { user, room } = this.state
    // LeaveRoom API doesnt have any hook so we are using removeuser API method
    removeUserFromRoom(user, room.id, user.id, () => setGeneralSelected(), (err) => Notification("error", "Error leaving channel", err))
  }

  //TODO : Impliment should component update with deep object comaprison for cyclic objects to improve performance
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

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  render() {
    let storageUser = JSON.parse(localStorage.getItem("slack"));
    let { user, room, rooms, messages, channelInfoVisible, showChannelInfoDrawer, hideChannelInfoDrawer, isLoading, error } = this.props;

    if (!storageUser || !storageUser.googleId) {
      return <Redirect to="/login" />
    }
    return (
        <ChatHome
          user                  = {user}
          room                  = {room}
          rooms                 = {rooms}
          messages              = {messages}
          channelInfoVisible    = {channelInfoVisible}
          showChannelInfoDrawer = {showChannelInfoDrawer}
          hideChannelInfoDrawer = {hideChannelInfoDrawer}
          isLoading             = {isLoading}
          error                 = {error}
        />
    )
  }
}

const mapStateToProps = ({ chatkitReady, user, room, rooms, messages, channelInfoVisible, isLoading, error }) => {
  return {
    chatkitReady,
    user,
    room,
    rooms,
    messages,
    channelInfoVisible,
    isLoading,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    connected            : (rooms)    => dispatch(connected(rooms)),
    updateRooms          : (rooms) => dispatch(updateRooms(rooms)),
    currentUser          : (user)     => dispatch(currentUser(user)),
    joinRoom             : (room)     => dispatch(joinRoom(room)),
    setMessages          : (messages) => dispatch(setMessages(messages)),
    showChannelInfoDrawer: ()         => dispatch(showChannelInfoDrawer()),
    hideChannelInfoDrawer: ()         => dispatch(hideChannelInfoDrawer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatHomeContainer)