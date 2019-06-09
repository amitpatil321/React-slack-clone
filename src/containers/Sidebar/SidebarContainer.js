import React, { Component } from 'react'

import { SlackContext } from 'store/store';
import { hasRoom } from 'utils/SlackUtils';
import { createRoom } from 'utils/ChatKitUtil';
import Notification from 'components/Notification';

import Sidebar from 'components/Sidebar';

export default class SidebarContainer extends Component {
    static contextType = SlackContext;

    componentDidMount(){
        // Bind click event to "channels" word
        document.querySelector("#channels .ant-menu-item-group-title").addEventListener("click", this.context.showListChannels)
    }

    _onLogoutSuccess = () => {
        console.log("On logout Success");
    }

    _onSelection = (item) => {
        // Check if its a room or direct chat?
        if (item.avatarURL === undefined)
            this.context.joinRoom(item)
        else{
            // check if room exists for logged in user and clicked user ?
            let findRoom = hasRoom(this.context.state, item.id);
            if (findRoom.length){
                this.context.joinRoom(findRoom[0])
            }else{
                let { user } = this.context.state;
                let roomUsers = [user.id, item.id].sort().join('');
                this.context.showLoading("Wait a moment!");
                // Room doesnt exists, Lets create new room for them
                createRoom(user, roomUsers, [user.id, item.id], true, { privateChat: true, userIds: [user.id, item.id] },  (newRoom) => {
                    this.context.joinRoom(newRoom);
                    this.context.hideLoading();
                },(error) => Notification("error", "Error", "Error creating private room, Please try again!"))
            }
        }
    }

    render() {
        return <Sidebar
            onLogoutSuccess = {this._onLogoutSuccess}
            onSelection     = {this._onSelection}
        />
    }
}