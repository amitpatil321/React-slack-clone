import React, { useContext } from 'react'
import { Input } from 'antd';
import { filter } from 'lodash';
import { Offline, Online } from 'react-detect-offline';

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
        <>
            <Online>
                <TextArea
                    value       = {message}
                    onChange    = {onChange}
                    onKeyDown   = {onKeyDown}
                    placeholder = {roomName}
                    autosize    = {{ minRows: 1, maxRows: 4 }}
                    style       = {{ fontWeight : "bold" }}
                />
            </Online>
            <Offline>
                <TextArea
                    placeholder = {roomName}
                    autosize    = {{ minRows: 1, maxRows: 4 }}
                    style       = {{ fontWeight : "bold" }}
                    disabled    = {true}
                />
                <small>You are offline, so messages can’t be sent yet.</small>
            </Offline>
        </>
    )
}

export default SendMessage;