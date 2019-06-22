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
		console.log(room.userIds);
		return room ? (
			<>
				<SlackHeader
					room={room}
					user={user}
					showChannelInfoDrawer={showChannelInfoDrawer}
				/>
			</>
		) : null;
	}
}

const mapStateToProps = ({ user, room, showChannelInfoDrawer }) => {
	return {
		user,
		room,
		showChannelInfoDrawer
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
