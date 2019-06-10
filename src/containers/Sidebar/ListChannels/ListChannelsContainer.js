import React, { Component } from 'react';
import filter from 'lodash/filter';

import ListChannels from 'components/Sidebar/ListChannels';
import { SlackContext } from 'store/store';
import { getJoinableRooms, joinRoom } from 'utils/ChatKitUtil';

//TODO : Replace componentDidMount with componentDidUpdate, to show latest changes
//TODO : Joinable channels list still shows channel which is recently joined
//Remove "Join" button if its not required
class ListChannelsContainer extends Component {
    static contextType = SlackContext
    state = {
        text  : null,
        error : null,
        joinableRooms : null
    }

    componentDidMount(){
        getJoinableRooms(this.context.state.user, (rooms) => this.setState({ joinableRooms: rooms }), () => this.setState({ error: "Error fetching joinable rooms" }));
    }

    _onChange = (event) => {
        let searchString = event.target.value;
        // filter lists based on search text
        this.setState({ text : searchString });
    }

    _joinRoom = (roomToJoin) => {
        this.context.hideListChannels();
        this.context.showLoading("Joining room please wait...");
        joinRoom(this.context.state.user, roomToJoin, (joinedRoom) => {
            this.context.joinRoom(joinedRoom);
            this.context.hideLoading();
        }, (err) => {
            this.context.showListChannels();
            this.setState({ error : "Failed to join room, Please try again" })
            this.context.hideLoading();
        })
    }

    render() {
        let {text, error} = this.state;
        return (
            <ListChannels
                text          = {text}
                onChange      = {this._onChange}
                existingRooms = {filter(this.context.state.rooms, { customData: undefined })} // Ignore private chat rooms
                joinableRooms = {this.state.joinableRooms}
                joinRoom      = {this._joinRoom}
                error         = {error}
            />
        )
    }
}

export default ListChannelsContainer;