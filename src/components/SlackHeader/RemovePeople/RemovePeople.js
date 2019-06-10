import React from 'react'

import { Modal, Select, Empty } from 'antd';
import { Consumer } from 'store/store';

const Option = Select.Option;

const RemovePeople = ({ showModal, selectedUsers, existingRoomUsers, handleRemovePeople, handleChange, onModalClose }) => {
    return (
        <Consumer>
            {({ state }) => {
                return (
                    <Modal
                        title        = {"Remove people from #" + state.room.name}
                        visible      = {showModal}
                        onOk         = {handleRemovePeople}
                        onCancel     = {onModalClose}
                        width        = {350}
                        okText       = "Save"
                        maskClosable = {false}
                    >
                        <Select
                            mode        = "multiple"
                            style       = {{ width: '100%' }}
                            placeholder = "Remove people"
                            onChange    = {handleChange}
                            value       = {selectedUsers}
                            notFoundContent = {<Empty description = "We ran out of people, Thanos killed all of them." image = {Empty.PRESENTED_IMAGE_SIMPLE} />}
                        >
                            {existingRoomUsers.length && existingRoomUsers.map(user => {
                               let { id, name } = user;
                               return <Option key={id}>{name}</Option>
                            })}
                        </Select>
                    </Modal>
                )
            }}
        </Consumer>
    )
}

export default RemovePeople;