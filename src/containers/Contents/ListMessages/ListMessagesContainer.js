import React, { Component } from 'react'

import { SlackContext } from '../../../store/store';

class ListMessagesContainer extends Component {
    static contextType = SlackContext;
    render() {
        if(Object.keys(this.props.messages).length === 0 || this.context.state.room === null) return "Loading...";

        let messages = this.props.messages[this.context.state.room.id];
        let messagesList = [];
        if (messages !== undefined)
        Object.keys(messages).forEach(message => {
            let { id, createdAt, text, senderId, userStore } = messages[message];
            let { avatarURL, name } = userStore.users[senderId];
            messagesList.push(<div key={id}>{name} : {text}</div>)
        }
        )
        return (
            <div>
                {messagesList}
            </div>
        )
    }
}

export default ListMessagesContainer