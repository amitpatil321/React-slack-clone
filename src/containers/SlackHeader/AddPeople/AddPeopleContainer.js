import React, { Component } from 'react'
import { orderBy } from 'lodash';

import { SlackContext } from 'store/store';
import AddPeopleModal from 'components/SlackHeader/AddPeople'
import { addUserToRoom, sendMessage } from 'utils/ChatKitUtil';
import { peopleJoinedMessage, getJoinableUsers, getUserName } from 'utils/SlackUtils';

class AddPeopleContainer extends Component {
    static contextType = SlackContext;
    state = {
        selectedUsers : []
    }

    // Returns list of all available users except existing members
    _getAllUsers(){
        let {rooms, room} = this.context.state;
        if(rooms.length){
            return getJoinableUsers(rooms, room);
        }
    }

    _onUserSelect = (selectedIds) => this.setState({ selectedUsers: selectedIds})
    _clearSelected = () => this.setState({ selectedUsers : [] })
    // Handle submit button click
    _onSubmit = () => {
        let { room, user } = this.context.state;
        // Add newly added users to room
        this._addPeopleSync(user, room, this.state.selectedUsers)
        .then(addSuccess => {
            // Get list of all members newly joined
            let message = peopleJoinedMessage(user, room.name, addSuccess, "EXISTING");
            // Add message to channel letting them know who has joined
            sendMessage(user, room.id, message, () => { }, (err) => Notification("error", "Error notifying channel", err)
            )
            // clear existing selection
            this._clearSelected();
            // Hide modal
            this.context.hideAddPeople();
        })
    }

    _onModalClose = () =>{
        // clear existing selection
        this._clearSelected();
        // Hide modal
        this.context.hideAddPeople();
    }

    // add people to channel (a)synchronously
    _addPeopleSync(currentUser, room, newlyAdded) {
        let addSuccess = [];
        let count = 0;
        return new Promise((resolve, reject) => {
            newlyAdded.forEach(userId => {
                addUserToRoom(currentUser, room.id, userId, () => {
                    addSuccess.push(userId)
                    count++;
                    if (newlyAdded.length === count) resolve(addSuccess);
                }, err => {
                    Notification("error", "Error adding " + getUserName(room, userId) + " to room, Please try again", err)
                    reject(err, userId)
                })
            })
        })
    }

    render() {
        return (
            <AddPeopleModal
                allUsers      = {orderBy(this._getAllUsers(), ['name'], ['asc'])}
                onSubmit      = {this._onSubmit}
                onUserSelect  = {this._onUserSelect}
                selectedUsers = {this.state.selectedUsers}
                onModalClose  = {this._onModalClose}
            />
        )
    }
}

export default AddPeopleContainer;