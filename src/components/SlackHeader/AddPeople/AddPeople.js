import React from 'react';
import { Modal, Select, Empty } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

const AddPeople = ({
  room, addPeopleModalVisible, allUsers, onUserSelect, onSubmit, selectedUsers, onModalClose,
}) => (
  <Modal
    title={`Add people to #${room.name}`}
    visible={addPeopleModalVisible}
    onOk={onSubmit}
    onCancel={onModalClose}
    width={380}
    okText="Add"
    maskClosable={false}
  >
    <Select
      name="users"
      mode="multiple"
      style={{ width: '100%' }}
      onChange={onUserSelect}
      placeholder="Add people"
      value={selectedUsers}
      notFoundContent={<Empty description="We ran out of people, Thanos killed all of them." image={Empty.PRESENTED_IMAGE_SIMPLE} />}
    >
      {allUsers && allUsers.map(({ id, name }) => <Option key={id}>{name}</Option>)}
    </Select>
  </Modal>
);

AddPeople.propTypes = {
  room: PropTypes.object.isRequired,
  addPeopleModalVisible: PropTypes.bool.isRequired,
  allUsers: PropTypes.array.isRequired,
  onUserSelect: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  selectedUsers: PropTypes.array.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
export default AddPeople;
