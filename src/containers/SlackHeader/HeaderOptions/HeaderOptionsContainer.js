import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';

import { showAddPeople, showChannelInfoDrawer, showRemovePeople } from 'store/SlackActions';
import HeaderOptions from 'components/SlackHeader/HeaderOptions';
import { isPrivateChat, isAdmin, isGeneralRoom, roomTypeIcon, setGeneralSelected } from 'utils/SlackUtils';
import { removeUserFromRoom } from 'utils/ChatKitUtil';

const SubMenu = Menu.SubMenu;

class HeaderOptionsContainer extends Component {
    _availabeOptions() {
        let { user, room, showChannelInfoDrawer, showAddPeople, showRemovePeople, leaveRoom } =  this.props;
        if(room === null) return false;

        let roomName = room.name, options;
        // TODO : Try to compress/group below code so it will look cleaner

        if(isPrivateChat(room))
            options =
                <SubMenu title={<Icon type="setting" style={{ fontSize: 18 }} />} >
                <Menu.Item key="setting:5" onClick={showChannelInfoDrawer}>View conversation details</Menu.Item>
                </SubMenu >
        else
            options =
                <SubMenu title={<Icon type="setting" style={{ fontSize: 18 }} />} >
                <Menu.Item key="setting:1" onClick={showAddPeople}>Add people to {roomTypeIcon(room)}{roomName} </Menu.Item>
                    {isAdmin(user) && !isGeneralRoom(room) &&
                    <Menu.Item key="setting:2" onClick={showRemovePeople}>Remove People from {roomTypeIcon(room)}{roomName}</Menu.Item>}
                    <Menu.Item key="setting:3" onClick={showChannelInfoDrawer}>View channel details</Menu.Item>
                    {!isGeneralRoom(room) &&
                    <Menu.Item key="setting:5" onClick={leaveRoom}>Leave {roomTypeIcon(room)}{roomName}</Menu.Item>
                    }
                    {/* User can remove users and delete room only if he's slack admin user and its not "general" room */}
                    {isAdmin(user) && !isGeneralRoom(room) &&
                        <Menu.Item key="setting:4">Delete channel</Menu.Item>
                    }
                </SubMenu>
        return options
    }

    _leaveRoom(){
        let { user, room } = this.props
        // LeaveRoom API doesnt have any hook so we are using removeuser API method
        removeUserFromRoom(user, room.id, user.id, () => setGeneralSelected(), (err) => Notification("error", "Error leaving channel", err))
    }

    render() {
        let { showChannelInfoDrawer } = this.props;
        return (
            <HeaderOptions
                options               = {this._availabeOptions()}
                showChannelInfoDrawer = {showChannelInfoDrawer}
            />
        )
    }
}

const mapStateToProps = ({ user, room, rooms }) => {
    return {
        user,
        room,
        rooms
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showChannelInfoDrawer: () => dispatch(showChannelInfoDrawer()),
        showAddPeople        : () => dispatch(showAddPeople()),
        showRemovePeople     : () => dispatch(showRemovePeople()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderOptionsContainer)