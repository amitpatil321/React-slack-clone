import React, { Component } from 'react'
import { SlackContext } from 'store/store';
import { Menu, Icon } from 'antd';

import HeaderOptions from 'components/SlackHeader/HeaderOptions';
import { isPrivateChat, isAdmin, isGeneralRoom } from 'utils/SlackUtils';

const SubMenu = Menu.SubMenu;

class HeaderOptionsContainer extends Component {
    static contextType = SlackContext;

    _availabeOptions() {
        let { user, room } =  this.context.state;
        if(room === null) return false;

        let roomName = room.name, options;
        // TODO : Try to compress/group below code so it will look cleaner

        if(isPrivateChat(room))
            options =
                <SubMenu title={<Icon type="setting" style={{ fontSize: 18 }} />} >
                <Menu.Item key="setting:5" onClick={this.context.showDrawer}>View conversation details</Menu.Item>
                </SubMenu >
        else
            options =
                <SubMenu title={<Icon type="setting" style={{ fontSize: 18 }} />} >
                    <Menu.Item key="setting:1" onClick={this.context.showAddPeople}>Add people to #{roomName} </Menu.Item>
                    {isAdmin(user) && !isGeneralRoom(room) &&
                        <Menu.Item key="setting:2" onClick={this.context.showRemovePeople}>Remove People from #{roomName}</Menu.Item>}
                    <Menu.Item key="setting:3" onClick={this.context.showDrawer}>View channel details</Menu.Item>
                    {!isGeneralRoom(room) &&
                        <Menu.Item key="setting:5" onClick={this.context.leaveRoom}>Leave #{roomName}</Menu.Item>
                    }
                    {/* User can remove users and delete room only if he's slack admin user and its not "general" room */}
                    {isAdmin(user) && !isGeneralRoom(room) &&
                        <Menu.Item key="setting:4">Delete channel</Menu.Item>
                    }
                </SubMenu>
        return options
    }

    render() {
        return (
            <HeaderOptions options={this._availabeOptions()}/>
        )
    }
}

export default HeaderOptionsContainer