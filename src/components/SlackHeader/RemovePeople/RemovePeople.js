import React from 'react';
import { PropTypes } from 'prop-types';

import { Modal, Select, Empty } from 'antd';
import { filter } from 'lodash';

const { Option } = Select;

const RemovePeople = ({
  user, room, showModal, selectedUsers, existingRoomUsers, handleRemovePeople, handleChange, onModalClose,
}) => {
  // remove loggedin user from list
  selectedUsers = selectedUsers.filter(eachUser => eachUser !== user.id);
  existingRoomUsers = filter(existingRoomUsers, eachUser => eachUser.id !== user.id);

  return (
    <Modal
      title={`Remove people from #${room.name}`}
      visible={showModal}
      onOk={handleRemovePeople}
      onCancel={onModalClose}
      width={350}
      okText="Save"
      maskClosable={false}
    >
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Remove people"
        onChange={handleChange}
        value={selectedUsers}
        notFoundContent={<Empty description="We ran out of people, Thanos killed all of them." image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      >
        {existingRoomUsers.length && existingRoomUsers.map(({ id, name }) => <Option key={id}>{name}</Option>)}
      </Select>
    </Modal>
  );
};

RemovePeople.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
  selectedUsers: PropTypes.array.isRequired,
  existingRoomUsers: PropTypes.array.isRequired,
  handleRemovePeople: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default RemovePeople;
