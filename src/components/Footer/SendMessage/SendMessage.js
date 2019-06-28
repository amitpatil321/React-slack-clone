import React, { useState } from 'react';
import {
  Input, Icon, Row, Col, Button,
} from 'antd';
import PropTypes from 'prop-types';

import { filter } from 'lodash';
import { Detector } from 'react-detect-offline';
import { Picker } from 'emoji-mart';

import { getUserName } from 'utils/SlackUtils';
import * as CONFIG from 'config';
import './SendMessage.css';
import 'emoji-mart/css/emoji-mart.css';

const { TextArea } = Input;

const SendMessage = ({
  user, room, message, onChange, onKeyDown, onEmojiSelected,
}) => {
  const [showEmojiPicker, changeShowEmojiPicker] = useState(false);
  let roomName;
  if (room.customData && room.customData.privateChat === true) {
    // Find id which is not same as logged user id
    const receiver = filter(room.userIds, id => id !== user.id);
    if (receiver.length) {
      roomName = `Message ${getUserName(room, receiver)}`;
    } else {
      roomName = 'Jot something down';
    } // It means sender and receiver is same
  }

  return (
    <Detector
      render={({ online }) => (
        <>
          <Row className="messagebox-container">
            <Col span={23}>
              <TextArea
                value={message}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder={roomName}
                autosize={{ minRows: 1, maxRows: 4 }}
                className="slack-message"
                disabled={!online}
              />
            </Col>
            <Col span={1}>
              <Button
                type="link"
                className="smiley"
                onClick={() => changeShowEmojiPicker(!showEmojiPicker)}
              >
                <Icon type="smile" />
              </Button>
              {showEmojiPicker
                && (
                <Picker
                  set="emojione"
                  style={{ position: 'absolute', bottom: '35px', right: '0px' }}
                  title={`${CONFIG.APP_NAME}™`}
                  emojiTooltip
                  sheetSize={32}
                  backgroundImageFn={
                    () => require('./images/32.png')
                  }
                  onSelect={(emoji) => {
                    onEmojiSelected(emoji);
                    changeShowEmojiPicker(!showEmojiPicker);
                  }}
                />
                )
              }
            </Col>
          </Row>
          <small className="text-red" style={{ display: online ? 'none' : 'block' }}>You are offline, so messages can’t be sent yet.</small>
        </>
      )}
    />
  );
};

SendMessage.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onEmojiSelected: PropTypes.func,
};

SendMessage.defaultProps = {
  onChange: () => { },
  onKeyDown: () => { },
  onEmojiSelected: () => { },
};

export default SendMessage;
