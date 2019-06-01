import React from 'react';
import { Row, Col } from 'antd';
import { Comment, Avatar } from 'antd';
import moment from 'moment';
import { getUserName, getUserPic } from '../../../utils/SlackUtils';

import { Consumer } from '../../../store/store';

import './ListMessages.css'

// TODO :  Combine messages from same auther only if they are sent in a span of given time, starting from first message from same author
const ListMessages = ({ canGroup, message }) => {
    if (message == undefined) return false;

    let { id, senderId, text, createdAt } = message;
    let time = <small>{moment(createdAt).format("hh:mm A")}</small>;

    return (
        (canGroup)
            ?
            <Row className="grouped-message" key={id}>
                <Col span={1} style={{ width: "55px" }}>
                    {time}
                </Col>
                <Col span={21}>
                    {text}
                </Col>
            </Row>
            :
            <Consumer >
                {({ state }) => {
                    let author = getUserName(state.room, senderId);
                    let avatar = getUserPic(state.room, senderId);

                    return <Comment
                        key={id}
                        author={<div className="message-sender">{author} {time}</div>}
                        avatar={<Avatar src={avatar} alt={author} />}
                        content={text}
                    >
                    </Comment>
                }}
            </Consumer>
        )
    }

    export default ListMessages;
