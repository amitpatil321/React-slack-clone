import React, { useContext, useState } from 'react'
import { Input, Icon, Row, Col, Button } from 'antd';
import { filter } from 'lodash';
import { Detector } from 'react-detect-offline';
import { Picker } from 'emoji-mart';

import { SlackContext } from 'store/store';
import { getUserName } from 'utils/SlackUtils';
import * as CONFIG from 'config';
import "./SendMessage.css";
import 'emoji-mart/css/emoji-mart.css';

const { TextArea } = Input;

const SendMessage = ({ message, onChange, onKeyDown, onEmojiSelected }) => {
    let { state } = useContext(SlackContext);
    let [showEmojiPicker, changeShowEmojiPicker] = useState(false)
    let roomName;

    if (state.room.customData && state.room.customData.privateChat === true) {
        // Find id which is not same as logged user id
        let receiver = filter(state.room.userIds, (id) => id !== state.user.id);
        if (receiver.length)
            roomName = "Message "+ getUserName(state.room, receiver);
        else
            roomName = "Jot something down";  // It means sender and receiver is same
    }

    return (
        <Detector
            render={({ online }) => (
                <>
                    <Row className="messagebox-container">
                        <Col span={23}>
                            <TextArea
                                value       = {message}
                                onChange    = {onChange}
                                onKeyDown   = {onKeyDown}
                                placeholder = {roomName}
                                autosize    = {{ minRows: 1, maxRows: 4 }}
                                className   = {"slack-message"}
                                disabled    = {!online}
                            />
                        </Col>
                        <Col span={1}>
                            <Button type="link" className="smiley" onClick={() => changeShowEmojiPicker(!showEmojiPicker)}><Icon type="smile" /></Button>
                            {showEmojiPicker &&
                                <Picker
                                    set          = 'emojione'
                                    style        = {{ position: 'absolute', bottom: '35px', right: '0px' }}
                                    title        = {CONFIG.APP_NAME + "™"}
                                    emojiTooltip = {true}
                                    sheetSize    = {32}
                                    backgroundImageFn={() =>
                                        require('./images/32.png')
                                    }
                                    onSelect     = {(emoji)=>{
                                        onEmojiSelected(emoji);
                                        changeShowEmojiPicker(!showEmojiPicker);
                                    }}
                                />
                            }
                        </Col>
                    </Row>
                    <small className="text-red" style={{ display: online ? "none" : "block" }}>You are offline, so messages can’t be sent yet.</small>
                </>
            )}
        />
    )
}

export default SendMessage;