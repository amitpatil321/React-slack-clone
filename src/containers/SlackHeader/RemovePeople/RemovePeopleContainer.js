import React, { Component } from 'react'

import { SlackContext } from '../../../store/store';
import RemovePeopleModal from '../../../components/SlackHeader/RemovePeople'
import { getRoomUsers } from '../../../utils/SlackUtils';

class RemovePeopleContainer extends Component {
    static contextType = SlackContext;
    state = {
        selectedUsers: []
    }

    // Returns list of all available users except existing members
    _getRoomUsers() {
        let { rooms, room } = this.context.state;
        if (rooms.length) {
            return getRoomUsers(rooms, room);
        }
    }

    render() {
        return (
            <RemovePeopleModal existingRoomUsers={this._getRoomUsers()}/>
        )
    }
}

export default RemovePeopleContainer;