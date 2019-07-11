import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { showChannelInfoDrawer } from 'store/SlackActions';
import SlackHeader from 'components/SlackHeader';

class SlackHeaderContainer extends Component {
  state = {
    userCount: 0,
  }

  componentDidUpdate() {
    const { room } = this.props;
    const { userCount } = this.state;
    if (userCount !== room.userIds.length && room.userIds.length >= 1) { this.setState({ userCount: room.userIds.length }); }
  }
  // shouldComponentUpdate(nextProps) {
  // 	let { room } = this.props;
  // 	if (
  // 		room.id !== nextProps.room.id ||
  // 		room.userIds.length !== nextProps.room.userIds.length
  // 	)
  // 		return true;
  // 	return false;
  // }

  render() {
    const { user, room, showChannelInfoDrawer } = this.props;
    const { userCount } = this.state;

    return (
      room && (
      <SlackHeader
        user={user}
        room={room}
        showChannelInfoDrawer={showChannelInfoDrawer}
        userCount={userCount}
      />
      )
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  room: state.room,
  rooms: state.rooms,
  showChannelInfoDrawer: state.showChannelInfoDrawer,
  // We are not using below variables but we are using it just to trigger change when we add/remove people
  // rooms.userIds change is not getting detected, so we are using this workaround
  addPeopleModalVisible: state.addPeopleModalVisible,
  remPeopleModalVisible: state.remPeopleModalVisible,
});

const mapDispatchToProps = dispatch => ({
  showChannelInfoDrawer: () => dispatch(showChannelInfoDrawer()),
});

SlackHeaderContainer.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
  addPeopleModalVisible: PropTypes.bool.isRequired,
  remPeopleModalVisible: PropTypes.bool.isRequired,
  showChannelInfoDrawer: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SlackHeaderContainer);
