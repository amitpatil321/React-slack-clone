import React, { Component } from 'react';
import { orderBy } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hideRemovePeople } from 'store/SlackActions';
import Notification from 'components/Notification';
import RemovePeopleModal from 'components/SlackHeader/RemovePeople';
import {
  getRoomUsers,
  getUserName,
  setGeneralSelected,
} from 'utils/SlackUtils';
import { removeUserFromRoom } from 'utils/ChatKitUtil';

// TODO : After adding users and then immediately opening "remove people", it shows IDs instead of user names
class RemovePeopleContainer extends Component {
  state = {
    selectedUsers: [],
    existingRoomUsers: [],
  };

  componentDidMount = () => {
    const { room, rooms } = this.props;
    this.setState({
      existingRoomUsers: getRoomUsers(rooms, room),
    });
  }

  componentDidUpdate(prevProps) {
    // Refresh data on modal visibility change
    const { room, rooms, remPeopleModalVisible } = this.props;
    if (remPeopleModalVisible !== prevProps.remPeopleModalVisible) {
      this.setState({
        selectedUsers: room.userIds,
        existingRoomUsers: getRoomUsers(rooms, room),
      });
    }
  }

  // Handle people remove change
  _onChange = userIds => this.setState({ selectedUsers: userIds });

  // Before modal close put room users as it is
  _onModalClose = () => {
    const { room, hideRemovePeople } = this.props;
    this.setState({ selectedUsers: room.userIds });
    hideRemovePeople();
  };

  // Handle ok button click
  _handleRemovePeople = () => {
    const { selectedUsers } = this.state;
    const { user, room, hideRemovePeople } = this.props;
    const oldUsers = room.userIds;
    // Logged in user should be there always
    const newUsers = selectedUsers.concat(user.id);

    // Find differences and remove
    const removed = oldUsers
      .filter(eachUser => !newUsers.includes(eachUser))
      .concat(newUsers.filter(eachUser => !newUsers.includes(eachUser)));
    if (removed.length) {
      removed.forEach((userId) => {
        removeUserFromRoom(
          user,
          room.id,
          userId,
          () => {
          // Hide modal
            hideRemovePeople();
            // If removed user is the logged in user, that means he removed himself from this room
            // So set default room as focused
            if (user.id === userId) setGeneralSelected();
          },
          (err) => {
            Notification(
              'error',
              `Error removing ${
                getUserName(room, userId)
              } from #${
                room.name
              } , Please try again`,
              err,
            );
          },
        );
      });
    }
    // No change detected, Just hide modal
    else hideRemovePeople();
  };

  render() {
    const { existingRoomUsers, selectedUsers } = this.state;
    const { user, room, remPeopleModalVisible } = this.props;
    return (
      <RemovePeopleModal
        user={user}
        room={room}
        showModal={remPeopleModalVisible}
        selectedUsers={selectedUsers}
        existingRoomUsers={orderBy(
          existingRoomUsers,
          ['name'],
          ['asc'],
        )}
        handleRemovePeople={this._handleRemovePeople}
        handleChange={this._onChange}
        onModalClose={this._onModalClose}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  room: state.room,
  rooms: state.rooms,
  remPeopleModalVisible: state.remPeopleModalVisible,
});

const mapDispatchToProps = dispatch => ({
  hideRemovePeople: () => dispatch(hideRemovePeople()),
});

RemovePeopleContainer.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
  hideRemovePeople: PropTypes.func.isRequired,
  remPeopleModalVisible: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RemovePeopleContainer);
