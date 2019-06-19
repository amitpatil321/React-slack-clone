import React from 'react';
import { roomTypeIcon } from 'utils/SlackUtils';

import { Modal } from 'antd';

const DeleteChannelConfirm = ({ room, visible, handleOk, handleCancel }) => {
    return (
        <Modal
            title    = { "Delete " + roomTypeIcon(room) + room.name}
            visible  = {visible}
            onOk     = {handleOk}
            onCancel = {handleCancel}
            okText   = "Delete"
        >
            Are you sure you want to delete <b>{room.name}</b>? All of the channel’s messages will be removed immediately.  <br/><br/>
            <span className="text-red">This cannot be undone.</span>
        </Modal>
    )
}

export default DeleteChannelConfirm;