import React from 'react'
import { Modal, Select, Empty } from 'antd';

import { Consumer } from '../../../store/store';

const Option = Select.Option;

const AddPeople = ({ allUsers, onUserSelect, onSubmit, selectedUsers, onModalClose }) => {
    return (
        <Consumer>
            {({ state }) =>
                <Modal
                    title        = {"Add people to #" + state.room.name}
                    visible      = {state.addPeopleModalVisible}
                    onOk         = {onSubmit}
                    onCancel     = {onModalClose}
                    width        = {380}
                    okText       = "Add"
                    maskClosable = {false}
                >
                    <Select
                        name        = "users"
                        mode        = "multiple"
                        style       = {{ width: '100%' }}
                        onChange    = {onUserSelect}
                        placeholder = "Add people"
                        value       = {selectedUsers}
                        notFoundContent={<Empty description="We ran out of people, Thanos killed all of them." image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                    >
                        {allUsers && allUsers.map(({ id, name }) =>
                            <Option key={id}>{name}</Option>
                        )}
                    </Select>
                </Modal>
            }
        </Consumer>
    )
}

export default AddPeople