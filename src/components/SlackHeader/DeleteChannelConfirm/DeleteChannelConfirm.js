import React from 'react';
import { roomTypeIcon } from 'utils/SlackUtils';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const DeleteChannelConfirm = ({
  room, visible, handleOk, handleCancel,
}) => (
  <Modal
    title={`Delete ${roomTypeIcon(room)}${room.name}`}
    visible={visible}
    onOk={handleOk}
    onCancel={handleCancel}
    okText="Delete"
  >
    Are you sure you want to delete
    {' '}
    <b>{room.name}</b>
    ? All of the channel’s messages will be removed immediately.
    {' '}
    <br />
    <br />
    <span className="text-red">This cannot be undone.</span>
  </Modal>
);

DeleteChannelConfirm.propTypes = {
  room: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default DeleteChannelConfirm;
