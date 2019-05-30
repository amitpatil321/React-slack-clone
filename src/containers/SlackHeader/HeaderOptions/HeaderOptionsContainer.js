import React, { Component } from 'react'
import { SlackContext } from '../../../store/store';
import { Menu, Icon } from 'antd';

import HeaderOptions from '../../../components/SlackHeader/HeaderOptions';

const SubMenu = Menu.SubMenu;

class HeaderOptionsContainer extends Component {
    static contextType = SlackContext;

    componentDidMount(){
        // console.log("mounted");
    }

    componentDidUpdate(prevProps, prevState){
        // console.log("did update");
    }

    _availabeOptions() {
        let { user, room, rooms } =  this.context.state;
        if(room === null) return false;

        let roomName = room.name;

        return (
            <SubMenu title={<Icon type="setting" />} >
                <Menu.Item key="setting:1" onClick={this._addPeopleModal}>Add people to #{roomName} </Menu.Item>
                {
                    (process.env.REACT_APP_CHATKIT_APP_ADMIN === user.id && room.id !== process.env.REACT_APP_CHATKIT_GENERAL_ROOM) ?
                    <Menu.Item key="setting:2" onClick={this._removePeopleModal}>Remove People from #{roomName}</Menu.Item>
                    : ""
                }
                <Menu.Item key="setting:3">View channel details</Menu.Item>
                {
                    (room.id !== process.env.REACT_APP_CHATKIT_GENERAL_ROOM) ?
                    <Menu.Item key="setting:5" onClick={this._leaveRoom}>Leave #{roomName}</Menu.Item>
                    : ''
                }
                {/* User can remove users and delete room only if he's slack admin user and its not "general" room */}
                {
                    (process.env.REACT_APP_CHATKIT_APP_ADMIN === user.id && room.id !== process.env.REACT_APP_CHATKIT_GENERAL_ROOM) ?
                    <Menu.Item key="setting:4">Delete channel</Menu.Item>
                    : ""
                }
            </SubMenu>
        )
    }

    render() {
        return (
            <HeaderOptions options={this._availabeOptions()}/>
        )
    }
}

export default HeaderOptionsContainer