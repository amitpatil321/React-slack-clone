import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar'
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

export default class SidebarContainer extends Component {
    state = {
        loading : true
    }

    shouldComponentUpdate(prevProps, prevState){
        // Object.keys(this.props.user).length || this.props.rooms.length &&
        if (!isEqual(this.props, prevProps) || !isEqual(this.state, prevState))
            return true;
        return false;
    }

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
    room : PropTypes.object.isRequired
}