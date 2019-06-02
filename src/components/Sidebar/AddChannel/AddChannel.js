import React from 'react'
import { Modal, Input, Checkbox, Alert, Select, Form } from 'antd';

import { Consumer } from 'store/store';
import './AddChannel.css';

const AddChannel = ({
    error,
    allUsers,
    hideModal,
    validationError,
    channelName,
    selectedUsers,
    isPrivate,
    onSubmit,
    onInputChange,
    handleDropdownChange,
    onCheckboxChange
}) => {
    return (
        <Consumer>
            {({ state }) =>
                <Modal
                    title         = "Add Channel"
                    visible       = {state.addChannelModalVisible}
                    okButtonProps = {{ form: "frmAddChannel", htmlType: "submit" }}
                    onCancel      = {hideModal}
                    width         = {350}
                    okText        = "Create"
                    maskClosable  = {false}
                >
                    {(error) ? <Alert message={error} type="error" showIcon/> : ''}
                    <Form id="frmAddChannel" onSubmit={onSubmit} className="login-form">
                        <Form.Item className={(validationError ? 'has-error' : '')}>
                            <Input
                                name        = "channel_name"
                                maxLength   = {25}
                                onChange    = {onInputChange}
                                value       = {channelName}
                                placeholder = "Channel name *"
                            />
                            {validationError && <div className="ant-form-explain">Please enter channel name</div>}
                        </Form.Item>
                        <Form.Item>
                            <Select
                                name        = "users"
                                mode        = "multiple"
                                style       = {{ width: '100%' }}
                                placeholder = "Add users"
                                onChange    = {handleDropdownChange}
                                value       = {selectedUsers}
                                allowClear  = {true}
                            >
                                {allUsers}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Checkbox
                                name     = "private"
                                onChange = {onCheckboxChange}
                                checked  = {isPrivate}
                            >Private Channel</Checkbox>
                        </Form.Item>
                    </Form>
                </Modal>
            }
        </Consumer>
    )
}

export default AddChannel;