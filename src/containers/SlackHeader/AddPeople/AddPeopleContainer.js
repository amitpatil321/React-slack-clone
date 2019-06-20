import React, { Component } from 'react'
import { orderBy } from 'lodash';
import { connect } from 'react-redux';

import { hideAddPeople } from 'store/SlackActions';
import AddPeopleModal from 'components/SlackHeader/AddPeople'
import { addUserToRoom, sendMessage } from 'utils/ChatKitUtil';
import { peopleJoinedMessage, getJoinableUsers, getUserName } from 'utils/SlackUtils';

class AddPeopleContainer extends Component {
    state = {
    	selectedUsers : []
    }

    // Returns list of all available users except existing members
    _getAllUsers(){
    	let {rooms, room} = this.props;
    	if(rooms.length){
    		return getJoinableUsers(rooms, room);
    	}
    }

    _onUserSelect = (selectedIds) => this.setState({ selectedUsers: selectedIds})
    _clearSelected = () => this.setState({ selectedUsers : [] })
    // Handle submit button click
    _onSubmit = () => {
    	let { room, user } = this.props;
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
    			this.props.hideAddPeople();
    		})
    }

    _onModalClose = () =>{
    	// clear existing selection
    	this._clearSelected();
    	// Hide modal
    	this.props.hideAddPeople();
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
    	let { room, addPeopleModalVisible } = this.props;
    	return (
    		<AddPeopleModal
    			room = {room}
    			addPeopleModalVisible = {addPeopleModalVisible}
    			allUsers      = {orderBy(this._getAllUsers(), ['name'], ['asc'])}
    			onSubmit      = {this._onSubmit}
    			onUserSelect  = {this._onUserSelect}
    			selectedUsers = {this.state.selectedUsers}
    			onModalClose  = {this._onModalClose}
    		/>
    	)
    }
}

const mapStateToProps = ({ user, room, rooms, addPeopleModalVisible}) => {
	return {
		user, room, rooms, addPeopleModalVisible
	}
}

const mapDispatchToProps = dispatch => {
	return {
		hideAddPeople: () => dispatch(hideAddPeople())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPeopleContainer);