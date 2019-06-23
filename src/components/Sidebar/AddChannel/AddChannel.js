import React from 'react'
import { Modal, Input, Checkbox, Alert, Select, Form } from 'antd';

import './AddChannel.css';

//TODO : check if channel name already exists
const AddChannel = ({
	error,
	addChannelModalVisible,
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
		<Modal
			title         = "Add Channel"
			visible       = {addChannelModalVisible}
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
	)
}

export default AddChannel;