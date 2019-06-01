import React from 'react'
import { Input } from 'antd';

import { Consumer } from '../../../store/store';

const { TextArea } = Input;

const SendMessage = ({ message, onChange, onKeyDown}) => {
    return (
        <Consumer>
            {({state}) =>
                <TextArea
                    value       = {message}
                    onChange    = {onChange}
                    onKeyDown   = {onKeyDown}
                    placeholder = {"Message #"+state.room.name}
                    autosize    = {{ minRows: 1, maxRows: 4 }}
                    style       = {{ fontWeight : "bold" }}
                />
            }
        </Consumer>
    )
}

export default SendMessage;