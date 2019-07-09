import React, { Component } from 'react';
import { filter, isEqual } from 'lodash';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import {
  hideListChannels,
  showLoading,
  hideLoading,
  joinRoom,
  showListChannels,
  showAddChannel,
} from 'store/SlackActions';
import ListChannels from 'components/Sidebar/ListChannels';
import { getJoinableRooms, joinChannel } from 'utils/ChatKitUtil';

// TODO : Replace componentDidMount with componentDidUpdate, to show latest changes
// TODO : Joinable channels list still shows channel which is recently joined
// Remove "Join" button if its not required
class ListChannelsContainer extends Component {
  state = {
    text: null,
    error: null,
    joinableRooms: [],
    fetchComplete: false,
  };

  componentDidMount() {
    this._getJoinableRooms((rooms) => {
      this.setState({ joinableRooms: rooms, fetchComplete: false });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { listChannelsModalVisible } = this.props;
    const {
      text, error, joinableRooms, fetchComplete,
    } = this.state;
    if (
      listChannelsModalVisible !== nextProps.listChannelsModalVisible
      || !isEqual(joinableRooms, nextState.joinableRooms)
      || text !== nextState.text
      || error !== nextState.error
      || fetchComplete !== nextState.fetchComplete
    ) { return true; }
    return false;
  }

  componentDidUpdate() {
    const { joinableRooms } = this.state;
    if (joinableRooms) {
      const existingRooms = joinableRooms.map(room => room.name);
      this._getJoinableRooms((rooms) => {
        const newRooms = rooms.map(room => room.name);
        if (!isEqual(existingRooms, newRooms)) {
          this.setState({ joinableRooms: rooms, fetchComplete: true });
        } else {
          this.setState({ fetchComplete: true });
        }
      });
    }
  }

  _onChange = (event) => {
    const searchString = event.target.value;
    // filter lists based on search text
    this.setState({ text: searchString });
  };

  _becomeRoomMember = (roomToJoin) => {
    const {
      user,
      hideListChannels,
      showLoading,
      joinRoom,
      showListChannels,
      hideLoading,
    } = this.props;

    hideListChannels();
    showLoading('Joining room please wait...');
    joinChannel(
      user,
      roomToJoin,
      (joinedRoom) => {
        joinRoom(joinedRoom);
        hideLoading();
      },
      (err) => {
        showListChannels();
        this.setState({ error: 'Failed to join room, Please try again' });
        hideLoading();
      },
    );
    this.setState({ fetchComplete: false });
  };

  _getJoinableRooms(callback) {
    const { user } = this.props;
    getJoinableRooms(
      user,
      rooms => callback(rooms),
      () => this.setState({ error: 'Error fetching joinable rooms' }),
    );
  }

  render() {
    const {
      text, error, joinableRooms, fetchComplete,
    } = this.state;
    const {
      user, room, rooms, listChannelsModalVisible, hideListChannels, joinRoom, showAddChannel,
    } = this.props;

    return (
      <ListChannels
        user={user}
        room={room}
        text={text}
        onChange={this._onChange}
        existingRooms={filter(rooms, { customData: undefined })} // Ignore private chat rooms
        joinableRooms={joinableRooms}
        becomeRoomMember={this._becomeRoomMember} // Join new room
        gotoRoom={joinRoom} // Goto existing room already joined
        listChannelsModalVisible={listChannelsModalVisible}
        hideListChannels={hideListChannels}
        fetchComplete={fetchComplete}
        showAddChannel={showAddChannel}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  room: state.room,
  rooms: state.rooms,
  listChannelsModalVisible: state.listChannelsModalVisible,
});

const mapDispatchToProps = dispatch => ({
  showListChannels: () => dispatch(showListChannels()),
  hideListChannels: () => dispatch(hideListChannels()),
  showLoading: msg => dispatch(showLoading(msg)),
  hideLoading: () => dispatch(hideLoading()),
  joinRoom: room => dispatch(joinRoom(room)),
  showAddChannel: () => dispatch(showAddChannel()),
});

ListChannelsContainer.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
  hideListChannels: PropTypes.func.isRequired,
  hideLoading: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired,
  listChannelsModalVisible: PropTypes.bool.isRequired,
  showAddChannel: PropTypes.func.isRequired,
  showListChannels: PropTypes.func.isRequired,
  showLoading: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListChannelsContainer);
