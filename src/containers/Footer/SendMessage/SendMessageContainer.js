import React, { Component } from 'react'
import SendMessage from 'components/Footer/SendMessage';

import Notification from 'components/Notification';
import { SlackContext } from 'store/store';
import { sendMessage } from 'utils/ChatKitUtil';

// TODO : Use refs instead of querySelector
class SendMessageContainer extends Component {
    static contextType = SlackContext;

    state = {
        message : null,
        curserPositonStart : 0,
        curserPositonEnd : 0
    }

    componentDidMount(){
        document.addEventListener('keydown', this._handleCursorPosition.bind(this), true);
        document.addEventListener('click', this._handleCursorPosition.bind(this), true);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this._handleCursorPosition.bind(this), true);
        document.removeEventListener('click', this._handleCursorPosition.bind(this), true);
    }
    _handleCursorPosition(e) {
        if (e.target.classList.contains("slack-message")) {
            this.setState({
                curserPositonStart: e.target.selectionStart,
                curserPositonEnd: e.target.selectionEnd
            });
        }
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

    _onEmojiSelected = (emoji, textareaRef) => {
        let string = document.querySelector(".slack-message").value;
        const textareaStrParts = [
            `${string.substring(0, this.state.curserPositonStart)}`,
            `${emoji.native}`,
            `${string.substring(this.state.curserPositonEnd, this.length)}`,
        ];
        this.setState({ message: textareaStrParts.join('') })
    }

    render() {
        return (
            <>
                <SendMessage
                    message   = {this.state.message}
                    onChange  = {this._onChange}
                    onKeyDown = {this._onKeyDown}
                    onEmojiSelected = {this._onEmojiSelected}
                />
            </>
        )
    }
}
export default SendMessageContainer;