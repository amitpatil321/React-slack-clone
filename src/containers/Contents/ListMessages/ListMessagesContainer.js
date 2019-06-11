import React, { Component } from 'react'
import moment from 'moment';

import { SlackContext } from 'store/store';
import { setReadCursor } from 'utils/ChatKitUtil';
import ListMessages from 'components/Content/ListMessages';
import * as CONFIG from 'config';

class ListMessagesContainer extends Component {
    static contextType = SlackContext;

    componentDidUpdate(){
        let {user, room, messages } = this.context.state;
        let messageList = Object.values(messages[room.id]);
        // Set read cursor only if there are unread messages and last message wasnt send my loggedin suer itself
        if (room.unreadCount)
            setReadCursor(user, room, messages[room.id], () => {}, () => console.log("Failed to set read cursor"))

        //Scroll to bottom of page
        let elem = document.querySelector(".content");
        elem.scrollTop = elem.scrollHeight;
    }
    render() {
        let { messages } = this.props;
        let old, thisMessage;
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
                if (mins_elapsed > 0 && mins_elapsed <= CONFIG.GROUP_MESSAGE_DURATION && old.senderId === thisMessage.senderId) {
                    canGroup = true;
                }
            }
            old = thisMessage;

            return (
                <ListMessages
                    key      = {index}
                    canGroup = {canGroup}
                    message  = {messages[message]}
                />
            );
        });
    }
}

export default ListMessagesContainer