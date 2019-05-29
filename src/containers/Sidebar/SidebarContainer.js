import React, { Component } from 'react'


import { SlackContext } from '../../store/store';
import Sidebar from '../../components/Sidebar'

export default class SidebarContainer extends Component {
    static contextType = SlackContext;
    // TODO : Improve component performance by deep comapring curcular objects
    // shouldComponentUpdate(prevProps, prevState){
    //     if (this.props.rooms.length)
    //         return true;
    //     return false;
    // }

    _onLogoutSuccess = () => {
        console.log("On logout Success");
    }

    _onSelection = (item) => {
        // TODO : Impliment join personal chat feature
        this.context.joinRoom(item)
    }

    render() {
        return <Sidebar
            onLogoutSuccess = {this._onLogoutSuccess}
            onSelection     = {this._onSelection}
        />
    }
}

// SidebarContainer.propTypes = {
//     user : PropTypes.object.isRequired,
//     rooms: PropTypes.array.isRequired,
//     room : PropTypes.object
// }