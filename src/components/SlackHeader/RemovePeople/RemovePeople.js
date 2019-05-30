import React from 'react'
import { Modal, Select, Empty } from 'antd';

import { Consumer } from '../../../store/store';

const Option = Select.Option;

const RemovePeople = ({ existingRoomUsers }) => {
    return (
        <Consumer>
            {(context) => {
                let { state, hideRemovePeople } = context;
                return (
                    <Modal
                        title        = {"Remove people from #" + state.room.name}
                        visible      = {state.remPeopleModalVisible}
                        // onOk         = {this._removePeople}
                        onCancel     = {hideRemovePeople}
                        width        = {350}
                        okText       = "Remove"
                        maskClosable = {false}
                    >
                        <Select
                            mode            = "multiple"
                            style           = {{ width : '100%' }}
                            placeholder     = "Remove people"
                            // onChange     = {this._handleRemovePeopleChange}
                            value           = {state.room.userIds}
                            notFoundContent = {<Empty description = "We ran out of people, Thanos killed all of them." image = {Empty.PRESENTED_IMAGE_SIMPLE} />}
                        >
                            {existingRoomUsers && existingRoomUsers.map(({ id, name }) =>
                                <Option key={id}>{name}</Option>
                            )}
                        </Select>
                    </Modal>
                )
            }}
        </Consumer>
    )
}

export default RemovePeople;