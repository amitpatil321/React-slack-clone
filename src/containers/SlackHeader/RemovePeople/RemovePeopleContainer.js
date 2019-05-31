import React, { Component } from 'react'
import { orderBy } from 'lodash';

import Notification from '../../../components/Notification';
import { SlackContext } from '../../../store/store';
import RemovePeopleModal from '../../../components/SlackHeader/RemovePeople'
import { getRoomUsers, getUserName, setGeneralSelected } from '../../../utils/SlackUtils';
import { removeUserFromRoom } from '../../../utils/ChatKitUtil';

//TODO : After adding users and then immediately opening "remove people", it shows IDs instead of user names
class RemovePeopleContainer extends Component {
    static contextType = SlackContext;
    state = {
        selectedUsers    : this.context.state.room.userIds,
        existingRoomUsers: [],
        showModal        : false
    }

    componentDidMount = () => this.setState({ existingRoomUsers: getRoomUsers(this.context.state.rooms, this.context.state.room) })

    componentDidUpdate(prevProps, prevState){
        // Refresh data on modal visibility change
        let { state } = this.context;
        if (this.state.showModal !== state.remPeopleModalVisible){
            this.setState({
                selectedUsers   : state.room.userIds,
                showModal       : state.remPeopleModalVisible,
                existingRoomUsers: getRoomUsers(this.context.state.rooms, this.context.state.room)
            })
        }
    }

    // Handle people remove change
    _onChange = (userIds) => this.setState({ selectedUsers : userIds });
    // Before modal close put room users as it is
    _onModalClose = () => {
        this.setState({ selectedUsers: this.context.state.room.userIds });
        this.context.hideRemovePeople();
    }
    // Handle ok button click
    _handleRemovePeople = () => {
        let { user, room } = this.context.state;
        let oldUsers = room.userIds;
        let newUsers = this.state.selectedUsers;

        // Find differences and remove
        let removed = oldUsers.filter(x => !newUsers.includes(x)).concat(newUsers.filter(x => !newUsers.includes(x)));
        if (removed.length)
            removed.forEach(userId => {
                removeUserFromRoom(user, room.id, userId, () => {
                    // Hide modal
                    this.context.hideRemovePeople();
                    // If removed user is the logged in user, that means he removed himself from this room
                    // So set default room as focused
                    if (user.id == userId) setGeneralSelected()
                }, (err) => {
                    Notification("error", "Error removing " + getUserName(room, userId) + " from #" + room.name+" , Please try again", err)
                })
            })
        else
            //No change detected, Just hide modal
            this.context.hideRemovePeople();
    }

    render() {
        return (
            <RemovePeopleModal
                showModal         = {this.state.showModal}
                selectedUsers     = {this.state.selectedUsers}
                existingRoomUsers = {orderBy(this.state.existingRoomUsers,['name'], ['asc'])}
                handleRemovePeople= {this._handleRemovePeople}
                handleChange      = {this._onChange}
                onModalClose      = {this._onModalClose}
            />
        )
    }
}

export default RemovePeopleContainer;