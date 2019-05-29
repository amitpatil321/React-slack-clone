import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar'
import PropTypes from 'prop-types';
import { isEqual, reduce } from 'lodash';

export default class SidebarContainer extends Component {

    // TODO : Improve component performance by deep comapring curcular objects
    // shouldComponentUpdate(prevProps, prevState){
    //     if (this.props.rooms.length)
    //         return true;
    //     return false;
    // }

    _onLogoutSuccess = () => {
        console.log("On logout Success");
    }

    render() {
        let { user, rooms, room } = this.props;
        return (
            <>
                <Sidebar
                    user            = {user}
                    rooms           = {rooms}
                    room            = {room}
                    onLogoutSuccess = {this._onLogoutSuccess}
                />
            </>
        )
    }
}

SidebarContainer.propTypes = {
    user : PropTypes.object.isRequired,
    rooms: PropTypes.array.isRequired,
    room : PropTypes.object
}