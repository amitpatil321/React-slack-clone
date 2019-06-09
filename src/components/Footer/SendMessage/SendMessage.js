import React, { useContext } from 'react'
import { Input } from 'antd';
import { filter } from 'lodash'

import { SlackContext } from 'store/store';
import { getUserName } from 'utils/SlackUtils';

const { TextArea } = Input;

const SendMessage = ({ message, onChange, onKeyDown}) => {
    let { state } = useContext(SlackContext);
    let roomName = "Message #" +state.room.name;

    if (state.room.customData && state.room.customData.privateChat === true) {
        // Find id which is not same as logged user id
        let receiver = filter(state.room.userIds, (id) => id !== state.user.id);
        if (receiver.length)
            roomName = "Message "+ getUserName(state.room, receiver);
        else
            // It means sender and receiver is same
            roomName = "Jot something down";
    }

    return (
        <TextArea
            value       = {message}
            onChange    = {onChange}
            onKeyDown   = {onKeyDown}
            placeholder = {roomName}
            autosize    = {{ minRows: 1, maxRows: 4 }}
            style       = {{ fontWeight : "bold" }}
        />
    )
}

export default SendMessage;