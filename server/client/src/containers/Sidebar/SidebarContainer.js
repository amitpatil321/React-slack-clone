import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  joinRoom,
  showLoading,
  showAddChannel,
  hideLoading,
  showListChannels,
} from 'store/SlackActions';
import { getDirectChatRoom } from 'utils/SlackUtils';
import { createRoom } from 'utils/ChatKitUtil';
import Notification from 'components/Notification';

import Sidebar from 'components/Sidebar';

class SidebarContainer extends Component {
  state = {
    isLoggedIn: true,
  };

  componentDidMount() {
    const { showListChannels } = this.props;
    // Bind click event to "channels" word
    document
      .querySelector('#channels .ant-menu-item-group-title')
      .addEventListener('click', showListChannels);
  }

  _onLogoutSuccess = () => {
    window.localStorage.removeItem('slack');
    this.setState({ isLoggedIn: false });
  };

  _onSelection = (item) => {
    const {
 user, rooms, joinRoom, showLoading, hideLoading
} = this.props;
    // Check if its a room or direct chat?
    if (item.avatarURL === undefined) joinRoom(item);
    else {
      // check if room exists for logged in user and clicked user ?
      const findRoom = getDirectChatRoom(user, rooms, item.id);
      if (findRoom.length) {
        joinRoom(findRoom[0]);
      } else {
        const roomUsers = [user.id, item.id].sort().join('');
        showLoading('Wait a moment!');
        // Room doesnt exists, Lets create new room for them
        createRoom(
          user,
          roomUsers,
          [user.id, item.id],
          true,
          { privateChat: true, userIds: [user.id, item.id].sort() },
          (newRoom) => {
            joinRoom(newRoom);
            hideLoading();
          },
          (error) => {
            Notification(
              'error',
              'Error',
              'Error creating private room, Please try again!',
            );
          },
        );
      }
    }
  };

  render() {
    const { isLoggedIn } = this.state;
    const {
      user,
      room,
      rooms,
      messages,
      showAddChannel,
      showListChannels,
    } = this.props;
    return isLoggedIn ? (
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
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  room: state.room,
  rooms: state.rooms,
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  showListChannels: () => dispatch(showListChannels()),
  showAddChannel: () => dispatch(showAddChannel()),
  showLoading: msg => dispatch(showLoading(msg)),
  hideLoading: () => dispatch(hideLoading()),
  joinRoom: room => dispatch(joinRoom(room)),
});

SidebarContainer.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
  hideLoading: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired,
  messages: PropTypes.object.isRequired,
  showAddChannel: PropTypes.func.isRequired,
  showListChannels: PropTypes.func.isRequired,
  showLoading: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SidebarContainer);
