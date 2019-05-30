import React from 'react'
import { Modal, Select, Empty } from 'antd';

import { Consumer } from '../../../store/store';

const Option = Select.Option;

const AddPeople = ({ allUsers, roomName, onUserSelect, onSubmit, selectedUsers, clearSelected }) => {
    const _hideAddPeople = (callback) => {
        // Clear users selection on modal close
        clearSelected()
        // Call close modal method
        callback();
    }
    return (
        <Consumer>
            {({ state, hideAddPeople}) =>
                <Modal
                    title        = {"Add people to # " + roomName}
                    visible      = {state.addPeopleModalVisible}
                    onOk         = {onSubmit}
                    onCancel     = {() => _hideAddPeople(hideAddPeople)}
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