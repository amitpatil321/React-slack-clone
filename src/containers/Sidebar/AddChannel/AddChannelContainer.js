import React, { Component } from 'react'
import { Select } from 'antd';

import { SlackContext } from 'store/store';
import { getAllUsers, peopleJoinedMessage } from 'utils/SlackUtils';
import { createRoom, sendMessage } from 'utils/ChatKitUtil';
import AddChannel from 'components/Sidebar/AddChannel';

const Option = Select.Option;

class AddChannelContainer extends Component {
    static contextType = SlackContext;

    state = {
        error          : null,
        addChannel     : false,
        channelName    : '',
        validationError: false,
        error          : null,
        isPrivate      : false,
        selectedUsers  : []
    }

    // Returns all users as dropdown value
    _getAllUsers = () => {
        let allUsers = getAllUsers(this.context.state.user);
        if(allUsers){
            return allUsers.map(user => {
                // List all users except logged in user, Coz he will be default member of channel
                if (this.context.state.user.id !== user.id)
                    return <Option key={user.id}>{user.name}</Option>;
            })
        }
    }

    // Handle form submit
    _onSubmitForm = (event) => {
        event.preventDefault()
        let { user } = this.context.state;
        let { channelName, isPrivate, selectedUsers } = this.state;
        if (channelName.trim().length) {
            // Create room
            createRoom(user, channelName, selectedUsers, isPrivate, null , (newRoom) => {
                // Create message and post to new channel
                let message = peopleJoinedMessage(user, newRoom.name, selectedUsers, "NEW");

                if (message)
                // send messge to newly created channel
                sendMessage(user, newRoom.id, message, () => { }, () => { })
                // Hide modal
                this._closeModal()
                // clear form text
                this.setState({ channelName: '', isPrivate: false, selectedUsers: [], error: null })
                setTimeout(() => {
                    // Set newly created channel as active channel
                    this.context.joinRoom(newRoom)
                    // document.querySelector(".channel-"+newRoom.id).click()
                }, 500);
            }, (error) => {
                this.setState({ error : error.error });
            })
        } else
            this.setState({ validationError: true })
    }
    _closeModal = () => {
        // Clear validation error on modal close
        this.setState({ validationError : false, error : null })
        this.context.hideAddChannel()
    }
    _onInputChange = (event) => this.setState({ channelName: event.target.value })
    _onCheckboxChange = (event) => this.setState({ isPrivate: event.target.checked })
    _onHandleDropdownChange = (selectedUsers) => this.setState({ selectedUsers: selectedUsers })
    render() {
        return (
            <AddChannel
                error                = {this.state.error}
                allUsers             = {this._getAllUsers()}
                validationError      = {this.state.validationError}
                channelName          = {this.state.channelName}
                selectedUsers        = {this.state.selectedUsers}
                isPrivate            = {this.state.isPrivate}
                hideModal            = {this._closeModal}
                onSubmit             = {this._onSubmitForm}
                onInputChange        = {this._onInputChange}
                handleDropdownChange = {this._onHandleDropdownChange}
                onCheckboxChange     = {this._onCheckboxChange}
            />
        )
    }
}

export default AddChannelContainer;