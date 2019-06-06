import React, { Component } from 'react';
import { isEqual } from 'lodash';

import ListChannels from 'components/Sidebar/ListChannels';
import { SlackContext } from 'store/store';
import { getJoinableRooms } from 'utils/ChatKitUtil';
class ListChannelsContainer extends Component {
    static contextType = SlackContext
    state = {
        text  : null,
        error : null,
        joinableRooms : null,
        selectedChannels : []
    }

    componentDidUpdate(){
        return getJoinableRooms(this.context.state.user, (rooms) => {
            console.log(rooms);
            this.setState({ joinableRooms : rooms })
        }, () => this.setState({ error : "Error fetching joinable rooms" }));
    }
    _onChange = (event) => {
        let searchString = event.target.value;
        // filter lists based on search text
        this.setState({ text : searchString });

        let joinableRooms = this.state.joinableRooms.filter(each => each.name.startsWith(searchString));
        let selectedChannels = this.state.selectedChannels.filter(each => each.name.startsWith(searchString));

        this.setState({ joinableRooms: joinableRooms, selectedChannels: selectedChannels })
    }

    // Handle channel selection/click event
    _selectChannel = (room) => {
        // If item exists remove it, if not add it
        if (this.state.selectedChannels.find(each => each.id == room.id) === undefined)
            this.setState({ selectedChannels : [...this.state.selectedChannels, room] });
        else
            this.setState({ selectedChannels: this.state.selectedChannels.filter(each => each.id !== room.id)})
    }

    _gotoRoom = (room) => {
        this.context.hideListChannels();
        this.context.joinRoom(room);
    }

    shouldComponentUpdate(nextProps, nextState){
        if (!isEqual(this.state.joinableRooms,nextState.joinableRooms) ||
            !isEqual(this.state.selectedChannels,nextState.selectedChannels))
            return true;
        return false;
    }
    render() {
        let {text, rooms, error} = this.state;
        return (
            <ListChannels
                text          = {text}
                onChange      = {this._onChange}
                existingRooms = {this.context.state.rooms}
                joinableRooms = {this.state.joinableRooms}
                onChannelClick= {this._selectChannel}
                selected      = {this.state.selectedChannels}
                gotoRoom      = {this._gotoRoom}
                error         = {error}
            />
        )
    }
}

export default ListChannelsContainer;