import React, { Component } from 'react'
import { Row, Col, Comment, Avatar } from 'antd';
import moment from 'moment';

import { SlackContext } from '../../../store/store';
import ListMessages from '../../../components/Content/ListMessages';
import * as CONFIG from '../../../config';

let old;
class ListMessagesContainer extends Component {
    static contextType = SlackContext;

    render() {
        let { messages } = this.props;
        let old, canGroup = false, thisMessage;
        return Object.keys(messages).map((message, index) => {
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