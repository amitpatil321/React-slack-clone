import React, { Component } from 'react'
import SendMessage from 'components/Footer/SendMessage';

import Notification from 'components/Notification';
import { SlackContext } from 'store/store';
import { sendMessage } from 'utils/ChatKitUtil';
class SendMessageContainer extends Component {
    static contextType = SlackContext;
    state = {
        message : null
    }

    _onChange = (event) => {
        this.setState({ message: event.target.value })
    }
    _onKeyDown = (event) => {
        if (event.key === "Enter"){
            let { user, room } = this.context.state;
            if (this.state.message && this.state.message.trim().length){
                // send message in room
                sendMessage(user, room.id, this.state.message, () => this.setState({ message: '' }), (err) => {
                    Notification("error", "Error", "Failed to send message, Please try again. " + err);
                });
            }
            event.preventDefault()
            event.stopPropagation();
        }
    }
    render() {
        return (
            <SendMessage
                message   = {this.state.message}
                onChange  = {this._onChange}
                onKeyDown = {this._onKeyDown}
            />
        )
    }
}
export default SendMessageContainer;