import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { hideDeleteChannelConfirm } from 'store/SlackActions';
import Notification from 'components/Notification';
import DeleteChannelConfirm from 'components/SlackHeader/DeleteChannelConfirm';
import { deleteRoom } from 'utils/ChatKitUtil';
import { setGeneralSelected } from 'utils/SlackUtils';

class DeleteChannelConfirmContainer extends Component {
  // Delete room
  _deleteChannel = () => {
    const { user, room, hideDeleteChannelConfirm } = this.props;
    if (room.id !== process.env.REACT_APP_CHATKIT_GENERAL_ROOM) {
      deleteRoom(user, room, () => {
        // Goto general room
        setGeneralSelected();
      }, (err) => {
        Notification('error', 'Error deleting channel', err);
      });
    }
    // Hide modal
    hideDeleteChannelConfirm();
  }

  render() {
    const { room, deleteChannelConfirmVisible, hideDeleteChannelConfirm } = this.props;
    return (
      <DeleteChannelConfirm
        room={room}
        visible={deleteChannelConfirmVisible}
        handleOk={this._deleteChannel}
        handleCancel={hideDeleteChannelConfirm}
      />
    );
  }
}

const mapStateToProps = ({ user, room, deleteChannelConfirmVisible }) => ({
  user, room, deleteChannelConfirmVisible,
});

const mapDispatchToProps = dispatch => ({
  hideDeleteChannelConfirm: () => dispatch(hideDeleteChannelConfirm()),
});

DeleteChannelConfirmContainer.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  hideDeleteChannelConfirm: PropTypes.func.isRequired,
  deleteChannelConfirmVisible: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteChannelConfirmContainer);
