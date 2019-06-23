import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showChannelInfoDrawer } from 'store/SlackActions';
import SlackHeader from 'components/SlackHeader';

class SlackHeaderContainer extends Component {
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
		let { user, room, showChannelInfoDrawer } = this.props;
		return (
			room && (
				<SlackHeader
					user={user}
					room={room}
					showChannelInfoDrawer={showChannelInfoDrawer}
				/>
			)
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		room: state.room,
		rooms: state.rooms,
		showChannelInfoDrawer: state.showChannelInfoDrawer,
		// We are not using below variables but we are using it just to trigger change when we add/remove people
		// rooms.userIds change is not getting detected, so we are using this workaround
		addPeopleModalVisible: state.addPeopleModalVisible,
		remPeopleModalVisible: state.remPeopleModalVisible
	};
};

const mapDispatchToProps = dispatch => {
	return {
		showChannelInfoDrawer: () => dispatch(showChannelInfoDrawer())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SlackHeaderContainer);
