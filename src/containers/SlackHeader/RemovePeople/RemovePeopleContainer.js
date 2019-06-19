import React, { Component } from 'react'
import { orderBy } from 'lodash';
import { connect } from 'react-redux';

import { hideRemovePeople } from 'store/SlackActions';
import Notification from 'components/Notification';
import RemovePeopleModal from 'components/SlackHeader/RemovePeople'
import { getRoomUsers, getUserName, setGeneralSelected } from 'utils/SlackUtils';
import { removeUserFromRoom } from 'utils/ChatKitUtil';

//TODO : After adding users and then immediately opening "remove people", it shows IDs instead of user names
class RemovePeopleContainer extends Component {
    state = {
        selectedUsers    : [],
        existingRoomUsers: []
    }

    componentDidMount = () => this.setState({ existingRoomUsers: getRoomUsers(this.props.rooms, this.props.room) })
    componentDidUpdate(prevProps, prevState){
        // Refresh data on modal visibility change
        let { room, rooms, remPeopleModalVisible } = this.props;
        if (remPeopleModalVisible !== prevProps.remPeopleModalVisible){
            this.setState({
                selectedUsers   : room.userIds,
                existingRoomUsers: getRoomUsers(rooms, room)
            })
        }
    }

    // Handle people remove change
    _onChange = (userIds) => this.setState({ selectedUsers : userIds });
    // Before modal close put room users as it is
    _onModalClose = () => {
        this.setState({ selectedUsers: this.props.room.userIds });
        this.props.hideRemovePeople();
    }
    // Handle ok button click
    _handleRemovePeople = () => {
        let { user, room } = this.props;
        let oldUsers = room.userIds;
        // Logged in user should be there always
        let newUsers = this.state.selectedUsers.concat(user.id);

        // Find differences and remove
        let removed = oldUsers.filter(eachUser => !newUsers.includes(eachUser)).concat(newUsers.filter(eachUser => !newUsers.includes(eachUser)));
        if (removed.length)
            removed.forEach(userId => {
                removeUserFromRoom(user, room.id, userId, () => {
                    // Hide modal
                    this.props.hideRemovePeople();
                    // If removed user is the logged in user, that means he removed himself from this room
                    // So set default room as focused
                    if (user.id === userId) setGeneralSelected()
                }, (err) => {
                    Notification("error", "Error removing " + getUserName(room, userId) + " from #" + room.name+" , Please try again", err)
                })
            })
        else
            //No change detected, Just hide modal
            this.props.hideRemovePeople();
    }

    render() {
        let { user, room, remPeopleModalVisible } = this.props;
        return (
            <RemovePeopleModal
                user              = {user}
                room              = {room}
                showModal         = {remPeopleModalVisible}
                selectedUsers     = {this.state.selectedUsers}
                existingRoomUsers = {orderBy(this.state.existingRoomUsers,['name'], ['asc'])}
                handleRemovePeople= {this._handleRemovePeople}
                handleChange      = {this._onChange}
                onModalClose      = {this._onModalClose}
            />
        )
    }
}

const mapStateToProps = ({ user, room, rooms, remPeopleModalVisible }) => {
    return {
        user,
        room,
        rooms,
        remPeopleModalVisible
    }
}

const mapDispatchToProps = dispatch => {
    return {
       hideRemovePeople: () => dispatch(hideRemovePeople())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemovePeopleContainer);