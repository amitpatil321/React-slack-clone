import React, { Component } from 'react'
import { Select } from 'antd';
import { connect } from 'react-redux';

import { joinRoom, hideAddChannel } from 'store/SlackActions';
import { getAllUsers, peopleJoinedMessage } from 'utils/SlackUtils';
import { createRoom, sendMessage } from 'utils/ChatKitUtil';
import AddChannel from 'components/Sidebar/AddChannel';

const Option = Select.Option;

class AddChannelContainer extends Component {

    state = {
        error          : null,
        addChannel     : false,
        channelName    : '',
        validationError: false,
        isPrivate      : false,
        selectedUsers  : []
    }

    // Returns all users as dropdown value
    _getAllUsers = () => {
        let { user } =  this.props;
        let allUsers = getAllUsers(user);
        if(allUsers){
            return allUsers.map(({id, name}) => {
                // List all users except logged in user, Coz he will be default member of channel
                if (user.id !== id)
                    return <Option key={id}>{name}</Option>;
            })
        }
    }

    // Handle form submit
    _onSubmitForm = (event) => {
        event.preventDefault()
        let { user } = this.props;
        let { channelName, isPrivate, selectedUsers } = this.state;
        if (channelName.trim().length) {
            // Create room
            createRoom(user, channelName.toLowerCase(), selectedUsers, isPrivate, null , (newRoom) => {
                // Create message and post to new channel
                let message = peopleJoinedMessage(user, newRoom.name, selectedUsers, "NEW");

                if (message)
                // send messge to newly created channel
                sendMessage(user, newRoom.id, message, () => {}, () => { console.log("Error sendind people joined message"); })
                setTimeout(() => {
                    // Set newly created channel as active channel
                    this.props.joinRoom(newRoom)
                    // document.querySelector(".channel-"+newRoom.id).click()
                }, 500);
                // clear form text
                this.setState({ channelName: '', isPrivate: false, selectedUsers: [], error: null })
                // Hide modal
                this._closeModal()
            }, (error) => {
                this.setState({ error : error.error });
            })
        } else
            this.setState({ validationError: true })
    }
    _closeModal = () => {
        // Clear validation error and form on modal close
        this.setState({ validationError: false, error: null, channelName: '', selectedUsers: [], isPrivate : false })
        this.props.hideAddChannel()
    }
    _onInputChange = (event) => this.setState({ channelName: event.target.value })
    _onCheckboxChange = (event) => this.setState({ isPrivate: event.target.checked })
    _onHandleDropdownChange = (selectedUsers) => this.setState({ selectedUsers: selectedUsers })
    render() {
        let { addChannelModalVisible } = this.props;
        return (
            <AddChannel
                error                = {this.state.error}
                addChannelModalVisible={addChannelModalVisible}
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

const mapStateToProps = ({ user, addChannelModalVisible }) => {
    return {
        user,
        addChannelModalVisible
    }
}

const mapDispatchToProps = dispatch => {
    return {
        joinRoom: (room) => dispatch(joinRoom(room)),
        hideAddChannel: () => dispatch(hideAddChannel()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChannelContainer);