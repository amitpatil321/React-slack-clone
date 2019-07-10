import React, { Component } from 'react';
import { orderBy } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hideAddPeople } from 'store/SlackActions';
import AddPeopleModal from 'components/SlackHeader/AddPeople';
import { addUserToRoom, sendMessage } from 'utils/ChatKitUtil';
import {
  peopleJoinedMessage,
  getJoinableUsers,
  getUserName,
} from 'utils/SlackUtils';

class AddPeopleContainer extends Component {
  state = {
    selectedUsers: [],
  };

  _onUserSelect = selectedIds => this.setState({ selectedUsers: selectedIds });

  _clearSelected = () => this.setState({ selectedUsers: [] });

  // Handle submit button click
  _onSubmit = () => {
    const { selectedUsers } = this.state;
    const { room, user, hideAddPeople } = this.props;
    // Add newly added users to room
    this._addPeopleSync(user, room, selectedUsers).then(
      (addSuccess) => {
        // Get list of all members newly joined
        const message = peopleJoinedMessage(
          user,
          room.name,
          addSuccess,
          'EXISTING',
        );
        // Add message to channel letting them know who has joined
        sendMessage(
          user,
          room.id,
          message,
          () => {},
          err => Notification('error', 'Error notifying channel', err),
        );
        // clear existing selection
        this._clearSelected();
        // Hide modal
        hideAddPeople();
      },
    );
  };

  _onModalClose = () => {
    const { hideAddPeople } = this.props;
    // clear existing selection
    this._clearSelected();
    // Hide modal
    hideAddPeople();
  };

  // add people to channel (a)synchronously
  _addPeopleSync = (currentUser, room, newlyAdded) => {
    const addSuccess = [];
    let count = 0;
    return new Promise((resolve, reject) => {
      newlyAdded.forEach((userId) => {
        addUserToRoom(
          currentUser,
          room.id,
          userId,
          () => {
            addSuccess.push(userId);
            count++;
            if (newlyAdded.length === count) resolve(addSuccess);
          },
          (err) => {
            Notification(
              'error',
              `Error adding ${
                getUserName(room, userId)
              } to room, Please try again`,
              err,
            );
            reject(err, userId);
          },
        );
      });
    });
  }

  // Returns list of all available users except existing members
  _getAllUsers() {
    const { rooms, room } = this.props;
    if (rooms.length) { return getJoinableUsers(rooms, room); }
    return false;
  }

  render() {
    const { selectedUsers } = this.state;
    const { room, addPeopleModalVisible } = this.props;
    return (
      <AddPeopleModal
        room={room}
        addPeopleModalVisible={addPeopleModalVisible}
        allUsers={orderBy(this._getAllUsers(), ['name'], ['asc'])}
        onSubmit={this._onSubmit}
        onUserSelect={this._onUserSelect}
        selectedUsers={selectedUsers}
        onModalClose={this._onModalClose}
      />
    );
  }
}

const mapStateToProps = ({
  user, room, rooms, addPeopleModalVisible,
}) => ({
  user,
  room,
  rooms,
  addPeopleModalVisible,
});

const mapDispatchToProps = dispatch => ({
  hideAddPeople: () => dispatch(hideAddPeople()),
});

AddPeopleContainer.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
  hideAddPeople: PropTypes.func.isRequired,
  addPeopleModalVisible: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPeopleContainer);
