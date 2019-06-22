import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { setReadCursor } from 'utils/ChatKitUtil';
import ListMessages from 'components/Content/ListMessages';
import * as CONFIG from 'config';

//TODO : Group messages based on day (Like : today, yesterday)
class ListMessagesContainer extends Component {
	componentDidUpdate() {
		let { user, room, messages } = this.props;
		// Set read cursor only if there are unread messages and last message wasnt send my loggedin suer itself
		if (room.unreadCount) setReadCursor(user, room, messages[room.id]);
		//Scroll to bottom of page
		let elem = document.querySelector('.content');
		elem.scrollTop = elem.scrollHeight;
	}
	render() {
		let { room, messages } = this.props;
		let old, thisMessage;
		messages = messages[room.id];
		// Return null if there are no message (this is unlikely to happen)
		if (!messages) return null;

		return Object.keys(messages).map((message, index) => {
			let canGroup = false;
			// Check if message can be combined?
			// TODO : Time span should be between first message from same author and current message.
			// existing funtion is matching current message and previous one.
			thisMessage = messages[message];
			if (old !== undefined) {
				var newTime = moment(thisMessage.createdAt);
				var oldTime = moment(old.createdAt);
				let mins_elapsed = newTime.diff(oldTime, 'minutes', true);
				if (
					mins_elapsed > 0 &&
					mins_elapsed <= CONFIG.GROUP_MESSAGE_DURATION &&
					old.senderId === thisMessage.senderId
				) {
					canGroup = true;
				}
			}
			old = thisMessage;
			return (
				<ListMessages
					room={room}
					key={index}
					canGroup={canGroup}
					message={messages[message]}
				/>
			);
		});
	}
}

const mapStateToProps = ({ user, room, rooms, messages }) => {
	return {
		user,
		room,
		rooms,
		messages
	};
};

// const mapDispatchToProps = dispatch => {
//     return {
//         hideAddPeople: () => dispatch(hideAddPeople())
//     }
// }

export default connect(mapStateToProps)(ListMessagesContainer);
