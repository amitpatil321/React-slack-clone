import React, { Component } from 'react';
import { isEqual } from 'lodash';

import ListChannels from 'components/Sidebar/ListChannels';
import { SlackContext } from 'store/store';
import { getJoinableRooms } from 'utils/ChatKitUtil';

//TODO : Replace componentDidMount with componentDidUpdate, to show latest changes
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

        // let joinableRooms = this.state.joinableRooms.filter(each => each.name.startsWith(searchString));
        // let selectedChannels = this.state.selectedChannels.filter(each => each.name.startsWith(searchString));

        // this.setState({ joinableRooms: joinableRooms })
    }

    render() {
        let {text, error} = this.state;
        return (
            <ListChannels
                text          = {text}
                onChange      = {this._onChange}
                existingRooms = {this.context.state.rooms}
                joinableRooms = {this.state.joinableRooms}
                error         = {error}
            />
        )
    }
}

export default ListChannelsContainer;